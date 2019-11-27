import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

// SERVICES
import { WebsocketService } from './websocket.service';

// MODELS
import { User } from '../models/user.model';
import { JwtToken } from '../models/jwt-token.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // CREATION BEHAVIOUR SUBJECT qui surveille les valeurs du token de connexion
  public jwtToken: BehaviorSubject<JwtToken> = new BehaviorSubject({
    isLogged: null,
    token: null
  });

  // CREATION BEHAVIOUR SUBJECT qui recupere et surveille les infos du user connecte
  public currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  // CREATION BEHAVIOUR SUBJECT qui recupere et surveille tous les users existants
  public allUsersArray: BehaviorSubject<User[]> = new BehaviorSubject(null);


  // CONSTRUCTOR
  constructor(
    private http: HttpClient,
    private router: Router,
    private websocketService: WebsocketService
    ) {
    this.checkToken(); // on verifie la presence d'un token dans le local storage lors de l'instanciation du service
    this.getCurrentUser();
    this.getAllUsers();
  }

  // VERIFICATION TOKEN dans le localstorage (API native JS)
  private checkToken(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.jwtToken.next({
        isLogged: true,
        token: token
      });
    } else {
      this.jwtToken.next({
        isLogged: false,
        token: null
      });
    }
  }

  // CREATION d'un new user
  public register(user: User): Observable<User> {
    return this.http.post<User>('/request/register', user);
  }

  // LOGIN d'un user avec recuperation du token cree cote serveur
  public login(credentials: {email: string, password: string}): Observable<string> {
    return this.http.post<string>('/request/login', credentials).pipe(
      tap( (token: string) => {
        this.jwtToken.next({ // Maj de l'observable avec une nouvelle valeur
          isLogged: true,
          token: token
        });
        // Stockage du token recupere depuis le serveur dans le localstorage du client
        localStorage.setItem('jwt', token);
        // Récupération du current user
        // this.getCurrentUser();
      })
    );
  }

  // GET CURRENT USER
  public getCurrentUser(): Observable<User> {
    if (this.currentUser.value) {
      console.log('TCL: this.currentUser from user service !!!!', this.currentUser);
      return this.currentUser;
    } else {
      return this.http.get<User>('/request/user/current').pipe(
        tap( ( user: User) => {// on met la valeur retournee par le call http dans l'observable currentUser pour maj de currentUser
        this.currentUser.next(user);
      }),
      switchMap( () => { // permet de retourner un nouvel observable this.currentUser et non la valeur de retour du call http
          console.log('TCL: this.currentUser', this.currentUser);
          return this.currentUser;
        })
      );
    }
  }

  // // UPDATE CURRENT USER
  // public updateCurrentUser(user: User) {
  //   this.currentUser.next(user);
  // }

  // GET ALL USERS
  public getAllUsers(): Observable<User[]> {
    if (this.allUsersArray.value) {
      return this.allUsersArray;
    } else {
      return this.http.get<User[]>('/request/user/all').pipe(
        tap( (allUsersArray: User[]) => {
          this.allUsersArray.next(allUsersArray);
          console.log('TCL: allUsersArray', allUsersArray);
        }),
        switchMap ( () => {
          console.log('TCL: this.allUsersArray', this.allUsersArray);
          return this.allUsersArray;
          }
        )
      );
    }
  }


  // GET Profil d'un user (on va sur la page de profil avec l'ID du user)
  public getProfile(userID) {
    console.log('TCL: getProfil -> userID', userID);
    this.router.navigate(['accueil', 'profile', userID]);
  }

  // // DISPLAY Profil d'un user (en fonction de son ID)
  // public displayProfile(userID: string) {
  //   this.allUsersArray.subscribe( (allUsersArray) => {
  //     allUsersArray.forEach(elmt => {
  //       if (elmt._id === userID) {
  //         console.log('TCL: displayProfile -> elmt', elmt);
  //         return elmt;
  //       }
  //     });
  //   });
  // }

  // EDITION Profil
  public editProfile(user: User): Observable<User> {
    return this.http.post<any>('/request/editprofile', user).pipe(
      tap( (response) => {
        console.log('TCL: response titi', response);
        console.log('TCL: response.updatedUser.value._id === this.currentUser.value._id', response.updatedUser.value._id === this.currentUser.value._id);
        console.log('TCL: response.updatedUser._id', response.updatedUser.value._id);
        console.log('TCL: response.updatedUser', response.updatedUser);
        console.log('TCL: this.currentUser.value._id', this.currentUser.value._id);
        if ( response.updatedUser.value._id === this.currentUser.value._id){
          this.currentUser.next(response.updatedUser.value);
          this.allUsersArray.next(response.updatedAllUserArray);
          console.log('TCL: this.currentUser titi', this.currentUser);
          // return this.currentUser;
        } else {
          this.allUsersArray.next(response.updatedAllUserArray);
        }
      }),
      switchMap(() => {
        return this.currentUser;
      })
    );
  }

  // // EDITION Profil Current User
  // public editProfile(user: User): Observable<User> {
  //   return this.http.post<User>('/request/editprofile', user).pipe(
  //     tap( (updatedUser: User) => {
  //       this.currentUser.next(updatedUser);
  //     })
  //   );
  // }

  // DECONNEXION (suppression du token)
  public resetToken() {
    // reset du behaviour subject JwtToken dans userService avec next()
    this.jwtToken.next({
      isLogged: false,
      token: null
    });

    // suppression du token du localStorage
    localStorage.removeItem('jwt');
  }

  public logout(user): void {
    // reset du token
    this.resetToken();

    // deconnection websocket
    this.websocketService.emitUserDeconnection(user);

    // remise a zero du current user
    this.currentUser.next(null);

    // remise a zero du AllUser
    this.allUsersArray.next(null);

    // redirection vers la page de connexion
    this.router.navigate(['/']);

  }

}
