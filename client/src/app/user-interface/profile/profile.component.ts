import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';


// SERVICE
import { UserService } from 'src/app/shared/service/user.service';
import { FriendService } from 'src/app/shared/service/friend.service';

import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public editProfileForm: FormGroup;
  public currentUser: User;
  public isCurrentUser = false;
  public userId: string;
  public allUsersArray: User[];
  public message: string;
  public errorMessage: string;
  public isSubmitted = false;
  public displayedUser: User;
  private sub1: Subscription;
  private sub2: Subscription;
  private sub3: Subscription;
  private sub4: Subscription;

  constructor(
    private userService: UserService,
    private friendService: FriendService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.sub1 = this.userService.currentUser.subscribe(
      currentUser => {
        this.currentUser = currentUser;
        console.log('TCL: ProfileComponent -> ngOnInit -> this.currentUser TITI', this.currentUser);
        // if (this.userId === this.currentUser._id) {
        //   this.isCurrentUser = true;
        // } else {
        //   this.isCurrentUser = false;
        // }
    });

    this.sub2 = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.userId = paramMap.get('id');
      console.log('TCL: ProfileComponent -> ngOnInit -> this.userId', this.userId);

      this.sub3 = this.userService.getAllUsers().subscribe( allUsersArray => {
        this.allUsersArray = allUsersArray;
        if ( this.allUsersArray && this.currentUser) {
          this.allUsersArray.forEach( elmt => {
            if (elmt._id === this.userId) {
              if (elmt._id === this.currentUser._id) {
                this.isCurrentUser = true;
              } else {
                this.isCurrentUser = false;
              }
              console.log('TCL: ProfileComponent -> ngOnInit -> this.isCurrentUser', this.isCurrentUser);
              this.displayedUser = elmt;
              console.log('TCL: ProfileComponent -> ngOnInit -> this.displayedUser', this.displayedUser);
              // console.log('TCL: ProfileComponent -> ngOnInit -> this.currentUser', this.currentUser);
            }
          });
        }
      });
    });
  }

  public editProfil(displayedUser: User) {
    this.router.navigate(['accueil', 'edit-profile', displayedUser._id]);
  }

  public sendInvitation() {
    this.sub4 = this.friendService.sendInvitation(this.displayedUser._id, this.currentUser._id).subscribe( (data) => {
    console.log('TCL: ProfileComponent -> sendInvitation -> data', data);
    if (data === 1) {
      this.message = `Vous êtes déjà ami avec ${this.displayedUser.pseudo}.`;
    } else {
      if (data === 2) {
        this.message = `Vous avez déjà envoyé une invitation à ${this.displayedUser.pseudo}.`;
      } else {
        this.message = `Votre invitation a été envoyé à ${this.displayedUser.pseudo}.`;
      }
    }
    }, err => {
      this.message = 'Impossible d\'envoyer votre invitation.';
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

  }
}
