import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-sensibilisation',
  templateUrl: './sensibilisation.component.html',
  styleUrls: ['./sensibilisation.component.css']
})

export class SensibilisationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSave(form: NgForm){
    console.log(form.value['ville']);
    

  }

}
