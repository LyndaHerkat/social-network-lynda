import { Component, HostListener } from '@angular/core';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private userService: UserService
    ) {
  }

  @HostListener('window:unload', [ '$event' ])
  unloadHandler(event) {
    this.userService.logout(this.userService.currentUser);
  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHander(event) {
    this.userService.logout(this.userService.currentUser);
  }
}
