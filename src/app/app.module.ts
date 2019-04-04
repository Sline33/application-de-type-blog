import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursComponent } from './cours/cours.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    DashboardComponent,
    CoursComponent,
    ExerciceComponent,
    PostComponent,
    PostlistComponent,
    PostListItemComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: "fr-CA" } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
