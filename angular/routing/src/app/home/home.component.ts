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

  constructor(
    private _thingService: ThingService
  ) { }

  ngOnInit() {
    console.log(this._thingService.sayHello());
  }

}
