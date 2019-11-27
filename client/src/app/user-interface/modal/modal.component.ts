import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: User
    ) {}


    ngOnInit() {}

    public onNoClick(): void {
      this.dialogRef.close();
    }

    public onOkClick(userId): void {
      this.router.navigate(['accueil', 'chat', userId]);
    }

}
