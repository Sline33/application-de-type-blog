import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }from './dashboard/dashboard.component';
import { CoursComponent }  from './cours/cours.component';
import { AppareilComponent }  from './appareil/appareil.component';
import { ExerciceComponent }  from './exercice/exercice.component';

const routes: Routes = [
  //Route par défault racine site **
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'appareil', component: AppareilComponent },
  { path: 'exercice', component: ExerciceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}