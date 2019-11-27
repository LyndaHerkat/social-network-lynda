import { Route } from '@angular/router';
// INTERFACE
import { ActivatedRoute } from '@angular/router';

import { HomepageComponent } from './authentification/homepage/homepage.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { PostComponent } from './user-interface/post/post.component';
import { ProfileComponent } from './user-interface/profile/profile.component';
import { EditProfileComponent } from './user-interface/profile/edit-profile.component';
import { FriendComponent } from './user-interface/friend/friend.component';
import { ChatComponent } from './user-interface/chat/chat.component'

import { AuthGuard } from './shared/guards/auth.guard';

export const ROUTING = [ //on utilise l'interface Route native d'Angular (https://angular.io/api/router/Route#description). Route[] veux dire un tableau de d'objet respectant l'interface Route
  { path : '', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'accueil', canActivate: [AuthGuard], component: UserInterfaceComponent, children: [
    { path: 'post/:id', canActivate: [AuthGuard], component: PostComponent},
    { path: 'profile/:id', canActivate: [AuthGuard], component: ProfileComponent},
    { path: 'edit-profile/:id', canActivate: [AuthGuard], component: EditProfileComponent},
    { path: 'friends', canActivate: [AuthGuard], component: FriendComponent},
    { path: 'chat/:id', canActivate: [AuthGuard], component: ChatComponent}
  ]}
  // { path: '**', component: PageNotFoundComponent }

];
