import { Component, OnInit } from '@angular/core';
import { Thing } from './thing';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {
  private thing1: Thing;
  private thing2: Thing;
  private thing3: Thing;
  private things: Thing[];
  // private things: Array<Thing>;
  private isFlagged: boolean;

  constructor() {
    this.thing1 = new Thing(1, 'Thing 1', 'A');
    this.thing2 = new Thing(2, 'Thing 2', 'B');
    this.thing3 = new Thing(3, 'Thing 3', 'A');
    this.things = [this.thing1, this.thing2, this.thing3];
    this.isFlagged = true;
  }

  ngOnInit() {
    console.log(this.things);
  }

  toggleIsFlagged() {
    this.isFlagged ? this.isFlagged = false : this.isFlagged = true;
  }

}
