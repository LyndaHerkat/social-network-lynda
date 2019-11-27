import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';
import { PostService } from '../../service/post.service';
import { WebsocketService } from '../../service/websocket.service';

import { JwtToken } from '../../models/jwt-token.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public jwtToken: JwtToken;
  public currentUser: User;
  public sub1: Subscription;
  public sub2: Subscription;

  constructor(
    public router: Router,
    private userService: UserService,
    private postService: PostService,
    private websocketService: WebsocketService
    ) { }

  ngOnInit() {
    // On subscribe au behaviour subject jwtToken cree dans le service UserService de facon à le mettre a jour dans la variable jwtToken du component à chaque modification
    this.sub1 = this.userService.jwtToken.subscribe ((jwtToken: JwtToken) => {
      this.jwtToken = jwtToken;
      this.sub2 = this.userService.currentUser.subscribe( currentUser => {
        this.currentUser = currentUser;
      });
    });
}

  public getPostUser() {
    if (this.currentUser === null) {
      this.router.navigate(['/']);
    } else {
      this.postService.postRoute(this.currentUser._id);
    }
  }

  public logout(): void {
    // deconnection du reseau
    this.userService.logout(this.currentUser);
  }

  ngOnDestroy() {
    // on coupe la subscription lors de la destruction du component
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}
