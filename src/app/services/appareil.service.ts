import { Subject } from 'rxjs/Subject';

export class AppareilService {

  appareilsSubject = new Subject<any[]>();
  
  private appareils = [
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

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    console.log('On allume tout !');
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }
  switchOffAll() {
    console.log('On éteint tout !');
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }

}