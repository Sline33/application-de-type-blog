import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }from './dashboard/dashboard.component';
import { AppareilComponent }  from './appareil-view/appareil/appareil.component';
import { BlogComponent }  from './blog/blog.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './appareil-view/appareil/single-appareil/single-appareil.component';

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  //Route par défault racine site
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'appareil', canActivate: [AuthGuard], component: AppareilComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}