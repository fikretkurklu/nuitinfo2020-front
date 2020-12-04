import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur-dechets',
  templateUrl: './compteur-dechets.component.html',
  styleUrls: ['./compteur-dechets.component.css']
})
export class CompteurDechetsComponent implements OnInit {

  compteurValue = 212030;

  constructor() {}

  ngOnInit(): void {
  }

  updateCount() {
    for(let i = 0; i<23540; i++){
      this.compteurValue++;
      if(this.compteurValue > 1000000){
        this.compteurValue = 200;
      }
    }
  }

  

}
