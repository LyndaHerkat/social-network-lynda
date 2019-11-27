import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { WebsocketService } from '../../shared/service/websocket.service';
import { UserService } from '../../shared/service/user.service';

import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-chat-component',
  templateUrl: 'chat.component.html',
  styleUrls: [],
})
export class ChatComponent implements OnInit, OnDestroy {
  public currentUser: User;
  public friendUserId: string;
  public allUsersArray: User[];
  public usersConnectedArrayWS: User[];
  public messagesArray: Array<{user: { id: string, pseudo: string}, message: string}> = [];
  public messageText: string;
  private sub1: Subscription;
  private sub2: Subscription;
  private sub3: Subscription;
  private sub4: Subscription;
  private sub5: Subscription;


  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private websocketService: WebsocketService
    ) {
      this.sub3 = this.websocketService.newUserJoined().subscribe( data => {
        this.messagesArray.push(data);
      });
      this.sub4 = this.websocketService.userLeftRoom().subscribe( data => {
        this.messagesArray.push(data);
      });
      this.sub5 = this.websocketService.newMessageReceived().subscribe( data => {
        this.messagesArray.push(data);
      });
    }

    ngOnInit() {

      this.sub1 = this.userService.currentUser.subscribe(
        currentUser => {
          this.currentUser = currentUser;
      });
      // Récupération du friendUserId dans l'url
      this.sub2 = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
        this.friendUserId = paramMap.get('id');
        });

      // Rejoindre la room des la ngOnInit
      this.joinRoom();
    }

    private joinRoom() {
      this.websocketService.joinRoom({
        user: {
          _id : this.currentUser._id,
          pseudo: this.currentUser.pseudo
        },
        room: 'titi'
      });
    }

    private leaveRoom() {
      this.websocketService.leaveRoom({
        user: {
          _id : this.currentUser._id,
          pseudo: this.currentUser.pseudo
        },
        room: 'titi'
      });
    }

    public sendMessage() {
      this.websocketService.sendMessage({
        user: {
          _id : this.currentUser._id,
          pseudo: this.currentUser.pseudo
        },
        room: 'titi',
        message: this.messageText
      });
      this.messageText = '';
    }

    ngOnDestroy() {
      this.leaveRoom();
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
    }
}

