import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {

  // propriétés d'instances
  hasard: number;
  propostion: number;
  tentatives: number;
  message: string;

  constructor() { }

  ngOnInit() {

    this.hasard = Math.floor( Math.random() * 100 ) + 1;
    console.log(this.hasard);
    this.tentatives = 0;
    this.message =  "Devine le nombre !";

  }

  //méthode d'instance pour contrôler le déroulement du jeu
  jouer() {
    //to do, à faire todolist
    if(this.proposition > this.hasard) {
      this.message = "C'est plus petit !";
      this.tentatives += 1;
    }

    if(this.proposition < this.hasard) {
      this.message = "C'est plus grand !";
      this.tentatives += 1;
    }

    if(this.proposition === this.hasard) {
      this.message = "Bravo mon Kiki !";
    }
  }
}
