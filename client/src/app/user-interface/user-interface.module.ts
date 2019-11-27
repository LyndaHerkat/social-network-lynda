import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// CUSTOM MODULES
import { LayoutModule } from '../shared/layout/layout.module'; // module custom d'import de material, flex-layout, hammerjs, cdk
import { ModalModule } from './modal/modal.module';

// CUSTOM COMPONENTS
import { PostComponent } from './post/post.component';
import { UserInterfaceComponent } from './user-interface.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile.component';
import { ChatComponent } from './chat/chat.component';
import { TopbarComponent } from '../shared/components/topbar/topbar.component';
import { FriendComponent } from './friend/friend.component';
import { ModalComponent } from './modal/modal.component';

// CUSTOM SERVICE
import { PostService } from '../shared/service/post.service';
import { FriendService } from '../shared/service/friend.service';

@NgModule({
  declarations: [
    PostComponent,
    UserInterfaceComponent,
    EditProfileComponent,
    ProfileComponent,
    TopbarComponent,
    FriendComponent,
    ChatComponent,
    ModalComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    ModalModule
  ],
  providers: [
    PostService,
    FriendService
  ],
  entryComponents: [ModalComponent] // Rend le composant modal disponible partout dasn le module UI
})
export class UserInterfaceModule { }
