import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Thing } from './thing';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {
  private thing: Thing;
  public things: Thing[];

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.thing = new Thing(null, '', '');
    this.things = [
      new Thing(1, 'Lorem 1', 'type1'),
      new Thing(2, 'Lorem 2', 'type1'),
      new Thing(3, 'Lorem 3', 'type2')
    ];
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.thing);
    this.addThing(this.thing);
    this.thing = new Thing(null, '', '');
  }

  addThing(thing: Thing) {
    this.things.push(thing);
  }


}
