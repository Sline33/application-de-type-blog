import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }from './dashboard/dashboard.component';
import { AppareilComponent }  from './appareil-view/appareil/appareil.component';
import { ExerciceComponent }  from './exercice/exercice.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  //Route par défault racine site **
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'appareil', component: AppareilComponent },
  { path: 'exercice', component: ExerciceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}