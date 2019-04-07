
import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';

import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs/Subscription';



registerLocaleData(localeFr);

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  appareils: any[];
  appareilSubcription: Subscription;

  
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) {
    
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareilSubcription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
    console.log('init');
    this.appareilService.getAppareilfromServer();
  }

  //   this.appareilService.saveAppareilToService();

  onAllumer() {
    this.appareilService.switchOnAll();
    this.appareilService.saveAppareilToService();
  }

  onEteint() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
      this.appareilService.saveAppareilToService();
    } else {
      return null;
    }
  }

  ngOnDestroy() {
    this.appareilSubcription.unsubscribe();
  }
  
}

