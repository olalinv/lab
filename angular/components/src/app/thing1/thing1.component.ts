import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thing1',
  templateUrl: './thing1.component.html',
  styleUrls: ['./thing1.component.css']
})
export class Thing1Component implements OnInit {

  componenteName = 'Thing1';
  componenteDesc = 'Lorem ipsum dolor';

  constructor() { }

  ngOnInit() {
  }

}
