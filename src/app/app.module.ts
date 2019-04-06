import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Mes Components
import { AppComponent } from './app.component';
// -- Accueill
import { DashboardComponent } from './dashboard/dashboard.component';
// -- AppareilView
import { EditAppareilComponent } from './appareil-view/edit-appareil/edit-appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AppareilComponent } from './appareil-view/appareil/appareil.component';
import { SingleAppareilComponent } from './appareil-view/appareil/single-appareil/single-appareil.component';

// -- Blog
import { BlogComponent } from './blog/blog.component';
import { PostListComponent } from './blog/post-list/post-list.component';
import { PostListItemComponent } from './blog/post-list/post-list-item/post-list-item.component';
// -- UserList
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './user-list/new-user/new-user.component';
// -- Auth
import { AuthComponent } from './auth/auth.component';
// -- 404 Error
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

// Mes Services
import { AuthGuard } from './services/auth-guard.service';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';




@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    DashboardComponent,
    PostListItemComponent,
    PostListComponent,
    AuthComponent,
    AppareilViewComponent,
    EditAppareilComponent,
    BlogComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    UserService,
    AppareilService,
    AuthService,
    {provide: LOCALE_ID, useValue: "fr-CA" } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
