import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs/internal/Subscription';


import { ModalComponent } from './modal/modal.component';

import { WebsocketService } from '../shared/service/websocket.service';
// import { UserService } from '../shared/service/user.service';

import { User } from '../shared/models/user.model';


@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit, OnDestroy {
  private usersConnectedArrayWS: User[];
  private sub1: Subscription;

  constructor(
    private websocketService: WebsocketService,
    // private userService: UserService,
    public dialog: MatDialog
  ) {
    this.sub1 = this.websocketService.onUsersConnectedArray().subscribe( data => {
      this.usersConnectedArrayWS = data;
      console.log('TCL: UserInterfaceComponent -> this.usersConnectedArrayWS', this.usersConnectedArrayWS);
      console.log('coucou UserInterfaceComponent');
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if ( this.sub1 ) {
      this.sub1.unsubscribe();
    }
  }

}



