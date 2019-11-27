import { Component, OnInit, Inject } from '@angular/core';
import { Router }  from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { WebsocketService } from '../../shared/service/websocket.service';
import { User } from '../../shared/models/user.model';
// import { ModalData } from '../model-data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // public usersConnectedArrayWS: User[];

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private router: Router,
    // public websocketService: WebsocketService,
    @Inject(MAT_DIALOG_DATA) public data: User
    ) {
    }


    ngOnInit() {}

    public onNoClick(): void {
      this.dialogRef.close();
      // console.log('TCL: ModalComponent -> usersConnectedArrayWS', this.usersConnectedArrayWS);
    }

    public onOkClick(userId): void {
      console.log('ok click modal');
      console.log('TCL: ModalComponent -> userId', userId);
      this.router.navigate(['accueil', 'chat', userId]);
    }

}
