import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// SERVICE
import { UserService } from 'src/app/shared/service/user.service';
import { WebsocketService } from 'src/app/shared/service/websocket.service';

// MODEL
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: string;
  public isSubmitted = false;
  public currentUser: User;
  public allUsersArray: User[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private websocketService: WebsocketService
  ) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: [ '', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public submit(): void {
    this.isSubmitted = true;

    this.userService.login(this.loginForm.value).subscribe( () => {

      this.userService.getCurrentUser().subscribe( currentUser => {

          // Récupération current user
          this.currentUser = currentUser;

          // Ouverture Websocket
          this.websocketService.startWS();

          // Enregistrement du user connecté (WS)
          this.websocketService.emitNewUserWS(this.currentUser);

          // Redirection page d'accueil
          this.router.navigate(['accueil', 'post', this.currentUser._id ]);
      });
    }, err => {
      if (err.status === 401) {
        this.errorMessage = 'Ce compte n\'existe pas. Veuillez créer un nouveau compte';
      } else {
        this.errorMessage = 'Une erreur c\'est produite. impossible d\'accéder à votre compte';
      }
    });

    this.userService.getAllUsers().subscribe( allUsersArray => {
      this.allUsersArray = allUsersArray;
    });

  }


}
