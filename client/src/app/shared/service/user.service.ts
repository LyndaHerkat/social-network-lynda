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
      })
    );
  }

  // GET CURRENT USER
  public getCurrentUser(): Observable<User> {
    if (this.currentUser.value) {
      return this.currentUser;
    } else {
      return this.http.get<User>('/request/user/current').pipe(
        tap( ( user: User) => {// on met la valeur retournee par le call http dans l'observable currentUser pour maj de currentUser
        this.currentUser.next(user);
      }),
      switchMap( () => { // permet de retourner un nouvel observable this.currentUser et non la valeur de retour du call http
          return this.currentUser;
        })
      );
    }
  }

  // GET ALL USERS
  public getAllUsers(): Observable<User[]> {
    if (this.allUsersArray.value) {
      return this.allUsersArray;
    } else {
      return this.http.get<User[]>('/request/user/all').pipe(
        tap( (allUsersArray: User[]) => {
          this.allUsersArray.next(allUsersArray);
        }),
        switchMap ( () => {
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

  // EDITION Profil
  public editProfile(user: User): Observable<User> {
    return this.http.post<any>('/request/editprofile', user).pipe(
      tap( (response) => {
        if ( response.updatedUser.value._id === this.currentUser.value._id){
          this.currentUser.next(response.updatedUser.value);
          this.allUsersArray.next(response.updatedAllUserArray);
        } else {
          this.allUsersArray.next(response.updatedAllUserArray);
        }
      }),
      switchMap(() => {
        return this.currentUser;
      })
    );
  }

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
