import { Component, OnInit } from '@angular/core';
import { registerLocaleData, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import localeFr from '@angular/common/locales/fr';



registerLocaleData(localeFr);

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  isAuth = false;

  
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
    {
      name: 'Ordinateur',
      status: 'allumé'
    },
    {
      name: 'Caftière',
      status: 'éteint'
    },
    {
      name: 'Lave-vesselle',
      status: 'éteint'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
    
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  goBack() {
    this.location.back();
  }

  onAllumer() {
    console.log('On allume tout !');
    for (let i = 0; i < this.appareils.length; i++) {
      if(this.appareils[i].status == "éteint"){
        this.appareils[i].status = "allumé";
      }
    }
  }
  onEteint() {
    console.log('On éteint tout !');
    for (let i = 0; i < this.appareils.length; i++) {
      if(this.appareils[i].status == "allumé"){
        this.appareils[i].status = "éteint";
      }
    }
  }

  ngOnInit() {
  }

}
