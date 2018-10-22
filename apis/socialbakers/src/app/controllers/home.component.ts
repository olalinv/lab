import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../views/home.component.html',
  styleUrls: ['../views/home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'Dashboard';

  constructor() { }

  ngOnInit() {}

}
