import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle: string = 'The Real Madrid CF Locker Room & Players Lounge';  
  constructor() { }

  ngOnInit() {
  }

}
