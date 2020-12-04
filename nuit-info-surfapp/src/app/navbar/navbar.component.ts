import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  myFunction() : void {
    let e = document.getElementById("myDropdown");
    if(e!=null){
      e.classList.toggle("show");
    }
  }
}
  





