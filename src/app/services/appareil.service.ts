export class AppareilService {
  
  appareils = [
    {
      id: 1,
      name: 'Ordinateur',
      status: 'allumé'
    },
    {
      id: 2,
      name: 'Caftière',
      status: 'éteint'
    },
    {
      id: 3,
      name: 'Lave-vesselle',
      status: 'éteint'
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

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