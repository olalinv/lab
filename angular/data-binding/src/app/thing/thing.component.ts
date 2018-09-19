import { Component, OnInit } from '@angular/core';
import { Thing } from './thing';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {

  private componenteName = 'Color Component';
  private componenteDesc = 'Lorem ipsum dolor';
  private selectedColor: string;

  constructor() {
    this.selectedColor = 'grey';
  }

  ngOnInit() {
    console.log(this.selectedColor);
  }

}
