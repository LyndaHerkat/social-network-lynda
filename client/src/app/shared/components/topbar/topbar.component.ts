import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatBottomSheet } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { UserService } from '../../service/user.service';
import { PostService } from '../../service/post.service';
import { WebsocketService } from '../../service/websocket.service';

import { User } from '../../models/user.model';

// import { ChatComponent } from '../chat/chat.component';
import { ModalComponent } from '../../../user-interface/modal/modal.component';

import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  providers: [FilterPipe]
})
export class TopbarComponent implements OnInit, OnDestroy {
  public currentUser: User;
  public allUsersArray: User[];
  public allUsersArrayNames: any = [];
  public userId: string;
  public searchForm: FormGroup;
  public filterAllUsers: Observable<string[]>;
  public usersConnectedArrayWS: User[];
  public friendsConnected: any[] = [];
  public backgroundColor: String = '#00ff9b';
  public sub1: Subscription;
  public sub2: Subscription;
  public sub3: Subscription;


  constructor(
    private router: Router,
    private userService: UserService,
    private postService: PostService,
    private fb: FormBuilder,
    // private bottomSheet: MatBottomSheet,
    private websocketService: WebsocketService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {

    console.log('TCL: TopbarComponent -> ngOnInit -> usersConnectedArray', this.usersConnectedArrayWS);

    this.sub1 = this.userService.getAllUsers().subscribe( allUsersArray => {

      this.allUsersArray = allUsersArray;
      console.log('TCL: TopbarComponent -> ngOnInit -> allUsersArray', allUsersArray);


      this.sub2 = this.userService.getCurrentUser().subscribe( currentUser => {
        this.currentUser = currentUser;
        console.log('TCL: TopbarComponent -> ngOnInit -> currentUser', currentUser);
        if (this.currentUser && this.currentUser.admin) {
          this.backgroundColor = '#D91C5C';
        }

        this.sub3 = this.websocketService.onUsersConnectedArray().subscribe( data => {
          this.usersConnectedArrayWS = data;
          console.log('TCL: TopbarComponent -> ngOnInit -> this.usersConnectedArrayWS', this.usersConnectedArrayWS);

          this.friendsConnected = [];

          if (this.usersConnectedArrayWS && this.currentUser) {
            this.usersConnectedArrayWS.forEach( user => {
              if (user && user.friends.includes(this.currentUser._id)) {
                this.friendsConnected.push(user);
              }
              // if (currentUser.admin) {
              //   this.friendsConnected = this.usersConnectedArrayWS;
              //   console.log('TCL: TopbarComponent -> ngOnInit -> this.friendsConnected', this.friendsConnected);
              // }
              console.log('TCL: TopbarComponent -> ngOnInit -> this.friendsConnected après', this.friendsConnected);
            });
          }
        });
      });

      if (this.allUsersArray) {
        this.allUsersArray.forEach(elmt => {
          if (this.allUsersArrayNames.indexOf(elmt) === -1) {
            this.allUsersArrayNames.push({
              pseudo: elmt.pseudo.toLowerCase(),
              _id: elmt._id
            });
          }
        });
        console.log('TCL: TopbarComponent -> ngOnInit -> this.allUsersArrayNames après', this.allUsersArrayNames);
      }

    });

    // Moteur de recherche Users
    this.searchForm = this.fb.group({
      search: [ '' ],
    });

    this.filterAllUsers = this.searchForm.get('search').valueChanges.pipe(
      // startWith(null),
      map( data => {
        if (!data) {
          // console.log('TCL: TopbarComponent -> ngOnInit -> this.allUsersArrayNames', this.allUsersArrayNames);
          return;
        } else {
          return this.allUsersArrayNames.filter( user => {
            return user.pseudo.startsWith(data.toLowerCase());
          });
        }
      })
    );
  }

  public getPostUser() {
    this.userId = this.searchForm.value.search;
    this.searchForm.reset();
    this.postService.postRoute(this.userId);
  }

  public getPostCurrentUser() {
    this.postService.postRoute(this.currentUser._id);
  }

  public getCurrentProfileUser() {
    this.userService.getProfile(this.currentUser._id);
  }

  // Messagerie instantanée
  openDialog(user): void {
    console.log('TCL: TopbarComponent -> user', user);
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '80%',
      data: user
    });
    dialogRef.afterClosed().subscribe(res => {
    });
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
    if (this.sub3) {
      this.sub3.unsubscribe();
    }
  }

}
