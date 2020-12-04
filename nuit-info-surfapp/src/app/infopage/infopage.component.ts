import { Component, OnInit } from '@angular/core';
import { Sessions } from '../mock-session';
import { Session } from '../session';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.css']
})

export class InfopageComponent implements OnInit {

  sessions = Sessions;
  selectedsession: Session | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(session: Session): void {
    this.selectedsession = session;
  }
}
