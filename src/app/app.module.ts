import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil-view/appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostListItemComponent } from './blog/post-list/post-list-item/post-list-item.component';
import { PostListComponent } from './blog/post-list/post-list.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    DashboardComponent,
    PostListItemComponent,
    PostListComponent,
    AuthComponent,
    AppareilViewComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AppareilService,
    {provide: LOCALE_ID, useValue: "fr-CA" } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
