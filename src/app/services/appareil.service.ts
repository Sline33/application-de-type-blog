export class AppareilService {
  
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

  switchOnAll() {
    console.log('On allume tout !');
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }
  switchOffAll() {
    console.log('On éteint tout !');
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOffOne(i: number) {
      this.appareils[i].status = 'éteint';
  }

}