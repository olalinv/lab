import { Component, OnInit } from '@angular/core';
import { ThingService } from '../services/thing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ThingService]
})
export class HomeComponent implements OnInit {

  public title = 'component';
  public thingsList: string[];
  public thingToAdd: string;
  public birthDay: Date;

  constructor(
    private _thingService: ThingService
  ) {
    this.birthDay = new Date();
  }

  ngOnInit() {
    this.thingsList = this._thingService.getThing();
  }

  addThing() {
    this._thingService.addThing(this.thingToAdd);
    this.thingToAdd = null;
  }

  removeThing(index: number) {
    this._thingService.removeThing(index);
  }

}
