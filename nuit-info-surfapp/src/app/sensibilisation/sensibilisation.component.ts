import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-sensibilisation',
  templateUrl: './sensibilisation.component.html',
  styleUrls: ['./sensibilisation.component.css']
})

export class SensibilisationComponent implements OnInit {

  compteurValue = 212030;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSave(form: NgForm){
    console.log(form.value['ville']);
    

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
