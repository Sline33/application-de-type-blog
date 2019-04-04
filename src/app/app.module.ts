import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursComponent } from './cours/cours.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    DashboardComponent,
    CoursComponent,
    ExerciceComponent,
    PostListItemComponent,
    PostListComponent,
    AuthComponent
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
