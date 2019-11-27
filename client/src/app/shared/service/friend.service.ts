import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { UserService } from 'src/app/shared/service/user.service';

import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
    ) { }


  public sendInvitation(friendUserId: string, currentUserId: string): Observable<any> {
    return this.http.post<string>('request/friend/request', {
      ['friendUserId']: friendUserId,
      ['currentUserId']: currentUserId
    }).pipe(
      tap ( (data) => {
        console.log('TCL: FriendService -> data', data);
        if ( data !== 1 && data !== 2 ) {
          // this.userService.updateCurrentUser(data.currentUser);
          this.userService.currentUser.next(data.currentUserUpdated);
          // console.log('TCL: FriendService -> data.currentUserUpdated', data.currentUserUpdated);
          console.log('TCL: FriendService -> this.userService.currentUser', this.userService.currentUser);
          return data.currentUserUpdated;
        }
      })
    );
  }

  public acceptInvitation(friendUserId: string, currentUserId: string): Observable<any> {
    return this.http.put<string>('request/friend/accept-invitation', {
      ['friendUserId']: friendUserId,
      ['currentUserId']: currentUserId
    }).pipe(
      tap( (data) => {
        // this.userService.currentUser.next(data.currentUser);
      this.userService.currentUser.next(data.currentUserUpdated);
      console.log('TCL: FriendService -> data.currentUserUpdated', data.currentUserUpdated);
      console.log('TCL: FriendService -> this.userService.currentUser', this.userService.currentUser);
      return data.currentUserUpdated;
    })
    );
  }

  public deleteFriend(friendId: string, currentUserId): Observable<any> {
    return this.http.put<any>('/request/friend/delete', {friendId, currentUserId}).pipe(
      tap( (data) => {
        this.userService.currentUser.next(data.currentUserUpdated);
        console.log('TCL: FriendService -> this.userService.currentUser', this.userService.currentUser);
        // return data.currentUserUpdated;
      }),
      switchMap(()=> {
        return this.userService.currentUser;
      })
    );
  }

  public deleteInvitation(invitationId: string, currentUserId): Observable<any> {
    return this.http.put<any>('/request/friend/delete-invitation', {invitationId, currentUserId}).pipe(
      tap( (data) => {
        this.userService.currentUser.next(data.currentUserUpdated);
        console.log('TCL: FriendService -> this.userService.currentUser', this.userService.currentUser);
        // return data.currentUserUpdated;
      }),
      switchMap(() => {
        return this.userService.currentUser;
      })
    );
  }
}
