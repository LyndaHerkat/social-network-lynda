import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// CUSTOM MODULES
import { LayoutModule } from '../shared/layout/layout.module'; // module custom d'import de material, flex-layout, hammerjs, cdk

// CUSTOM COMPONENTS
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// SERVICE
// import { WebsocketService } from '../shared/service/websocket.service';

@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    // WebsocketService
  ]
})
export class AuthentificationModule { }
