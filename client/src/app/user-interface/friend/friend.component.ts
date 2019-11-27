import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { UserService } from 'src/app/shared/service/user.service';
import { FriendService } from 'src/app/shared/service/friend.service';

import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit, OnDestroy {
  public allUsersArray: User[];
  public currentUser: User;
  public requestsArray: User[] = [];
  public invitationsArray: User[] = [];
  public friendsArray: User[] = [];
  private sub1: Subscription;
  private sub2: Subscription;
  private sub3: Subscription;
  private sub4: Subscription;
  private sub5: Subscription;
  private sub6: Subscription;
  private sub7: Subscription;
  private sub8: Subscription;

  constructor(
    private userService: UserService,
    private friendService: FriendService
    ) { }

  ngOnInit() {
    this.sub1 = this.userService.currentUser.subscribe( currentUser => {
      this.currentUser = currentUser;

      this.sub2 = this.userService.getAllUsers().subscribe( allUsersArray => {
        this.allUsersArray = allUsersArray;
        this.getFriends();
        this.getRequests();
        this.getInvitations();
      });
    });
  }

  public getFriends() {
    this.sub3 = this.userService.currentUser.subscribe( currentUser => {
      this.currentUser = currentUser;
      if ( this.currentUser && this.currentUser.friends ) {
        this.currentUser.friends.forEach ( elmt1 => {
          this.allUsersArray.forEach ( elmt2 => {
            if (elmt1 === elmt2._id && this.friendsArray.indexOf( elmt2 ) === -1) {
              this.friendsArray.push( elmt2 );
            }
          });
        });
      }
    });
  }

  public getRequests() {
    this.sub4 = this.userService.currentUser.subscribe( currentUser => {
      this.currentUser = currentUser;
      if ( this.currentUser && this.currentUser.requests) {
        this.currentUser.requests.forEach ( elmt1 => {
          this.allUsersArray.forEach ( elmt2 => {
            if (elmt1 === elmt2._id && this.requestsArray.indexOf( elmt2 ) === -1) {
              this.requestsArray.push( elmt2 );
            }
          });
        });
      }
    });
  }

  public getInvitations() {
    this.sub5 = this.userService.currentUser.subscribe( currentUser => {
      this.currentUser = currentUser;
      if (this.currentUser && this.currentUser.invitations) {
        this.currentUser.invitations.forEach ( elmt1 => {
          this.allUsersArray.forEach ( elmt2 => {
            if (elmt1 === elmt2._id && this.invitationsArray.indexOf( elmt2 ) === -1) {
              this.invitationsArray.push( elmt2 );
            }
          });
        });
      }
    });
  }

  public acceptInvitation(friendUserId: string, currentUserId: string) {
    this.sub6 = this.friendService.acceptInvitation(friendUserId, currentUserId).subscribe( () => {
      this.invitationsArray.forEach( elmt => {
        if ( elmt._id === friendUserId ) {
          const index1 = this.invitationsArray.indexOf(elmt);
          this.invitationsArray.splice(index1, 1);
          const index2 = this.invitationsArray.indexOf(elmt);
          this.requestsArray.splice(index2, 1);
          this.friendsArray.push(elmt);
        }
      });
    });
  }

  public deleteFriend(friendId: string, currentUserId: string) {
    this.sub7 = this.friendService.deleteFriend(friendId, currentUserId).subscribe( () => {
      this.friendsArray.forEach( elmt => {
        if ( elmt._id === friendId ) {
          const index = this.friendsArray.indexOf(elmt);
          this.friendsArray.splice(index, 1);
        }
      });
    });
  }

  public deleteInvitation(invitationId: string, currentUserId: string) {
    this.sub8 = this.friendService.deleteInvitation(invitationId, currentUserId).subscribe( () => {
      this.invitationsArray.forEach( elmt => {
        if ( elmt._id === invitationId ) {
          const index = this.invitationsArray.indexOf(elmt);
          this.invitationsArray.splice(index, 1);
        }
      });
    });
  }

  ngOnDestroy() {
    if ( this.sub1 ) {
      this.sub1.unsubscribe();
    }
    if ( this.sub2 ) {
      this.sub2.unsubscribe();
    }
    if ( this.sub3 ) {
      this.sub3.unsubscribe();
    }
    if ( this.sub4 ) {
      this.sub4.unsubscribe();
    }
    if ( this.sub5 ) {
      this.sub5.unsubscribe();
    }
    if ( this.sub6 ) {
      this.sub6.unsubscribe();
    }
    if ( this.sub7 ) {
      this.sub7.unsubscribe();
    }
    if ( this.sub8 ) {
      this.sub8.unsubscribe();
    }
  }
}



