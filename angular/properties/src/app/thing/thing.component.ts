import { Component, OnInit } from '@angular/core';
import { Thing } from './thing';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {

  private componenteName = 'Thing Component';
  private componenteDesc = 'Lorem ipsum dolor';
  private thing: Thing;
  private things: Thing[];

  constructor() {
    this.thing = new Thing(1, 'thing1', true, 'any', [1, 2], ['thing1', 'thing2'], [true, false], ['thing1', 2]);
    this.things = [
      new Thing(1, 'thing1', true, 'any', [1, 2], ['thing1', 'thing2'], [true, false], ['thing1', 2]),
      new Thing(2, 'thing2', true, 'any', [1, 2], ['thing1', 'thing2'], [true, false], ['thing1', 2])
    ]
  }

  ngOnInit() {
    console.log(this.thing);
    console.log(this.things);
  }

}
