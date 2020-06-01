import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  isAuth = false;//Variable pour savoir si l'utilisateur est identifier par défaul = faux

  heureActuel = new Promise((resolve, reject) => {//PIPES ASYNC AVEC PROMISE [OBJET AVEC PROMISE]
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils : any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => this.isAuth = true, 4000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllume() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
