import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()

export class WebsocketService {

  private socketClient;
  public usersConnectedArray: Observable<User[]>;
  constructor() {}

  public startWS() {
    this.socketClient = io();
    // this.socketClient = io('http://localhost:3000');
  }

  // Connection du current user
  public emitNewUserWS(user: User) {
    this.socketClient.emit('new User', user);
  }

  // Deconnection du current user
  public emitUserDeconnection(user: User) {
    console.log('TCL: WebsocketService -> emitUserDeconnection -> user', user);
    this.socketClient.emit('user deconnection', user);
    // this.socketClient.disconnect();
    // console.log('TCL: WebsocketService -> emitUserDeconnection -> socketClient.disconnected', this.socketClient.disconnected);
  }

  // Mise à jour du tableau des users connectes
  
  public onUsersConnectedArray() {
    this.usersConnectedArray = new Observable<User[]> (observer => {
      this.socketClient.on('all users connected', (data: User[]) => {
        observer.next(data);
        console.log('TCL: WebsocketService -> onUsersConnectedArray -> titi data', data);

      });
      // Error
      // return () => { this.socketClient.disconnect(); };
    });
    return this.usersConnectedArray;
  }

  // Rejoindre une conversation
  public joinRoom(data) {
    this.socketClient.emit('join', data);
  }

  public newUserJoined() {
    const observable = new Observable<{user: { id: string, pseudo: string}, message: string}>( observer => {
      this.socketClient.on('new user joined', (data) => {
        observer.next(data);
      });
      return () => {
        // this.socketClient.disconnect();
      };
    });
    return observable;
  }

  // Quitter une conversation
  public leaveRoom(data) {
    this.socketClient.emit('leave', data);
  }

  public userLeftRoom() {
    const observable = new Observable<{user: { id: string, pseudo: string}, message: string}>( observer => {
      this.socketClient.on('user left room', (data) => {
        observer.next(data);
      });
      return () => {
        // this.socketClient.disconnect();
      };
    });
    return observable;
  }

  public sendMessage(data) {
    this.socketClient.emit('message', data);
  }

  public newMessageReceived() {
    const observable = new Observable<{user:  { id: string, pseudo: string}, message: string}>( observer => {
      this.socketClient.on('new message', (data) => {
        observer.next(data);
      });
      return () => {
        // this.socketClient.disconnect();
      };
    });
    return observable;
  }

}
