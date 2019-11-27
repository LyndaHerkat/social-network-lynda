// ANGULAR NATIVES MODULES
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// CUSTOM MODULES
import { LayoutModule } from './shared/layout/layout.module'; // module custom d'import de material, flex-layout, hammerjs, cdk
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { AuthentificationModule } from './authentification/authentification.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import { ChatComponent } from './user-interface/chat/chat.component';

// SERVICES
import { UserService } from './shared/service/user.service';
import { WebsocketService } from './shared/service/websocket.service';

// GUARDS
import { AuthGuard } from './shared/guards/auth.guard';

// ROUTES
import { ROUTING } from './app.routing';

// INTERCEPTORS
import { AuthentificationInterceptor } from './shared/interceptors/authentification.interceptor';

// DATE
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// FILTRE
import { FilterPipe } from './shared/pipes/filter.pipe';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // ChatComponent,
    FilterPipe,
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTING),
    HttpClientModule,
    LayoutModule,
    // ReactiveFormsModule,
    // FormsModule,
    UserInterfaceModule,
    AuthentificationModule,
    MatBottomSheetModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthentificationInterceptor,
      multi: true
    },
    UserService,
    WebsocketService,
    AuthGuard,
    { provide: LOCALE_ID,
      useValue: 'fr-FR'}
  ],
  // entryComponents: [ChatComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
