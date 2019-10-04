export class AppareilService {

  appareils = [
    {
      name: "Machine à laver",
      status: "éteint",
    },
    {
      name: "Télévision",
      status: "allumé",
    },
    {
      name: "Ordinateur",
      status: "éteint",
    },
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  swicthOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  swicthOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  swicthOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }

}
