import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  public salutation = 'Hello, ThingService here';
  public thingsList = ['Thing 1', 'Thing 2', 'Thing 3'];

  constructor() { }

  sayHello() {
    return this.salutation;
  }

  getThing(): string[] {
    return this.thingsList;
  }

  addThing(thing: string): string[] {
    this.thingsList.push(thing);
    return this.getThing();
  }

  removeThing(index: number) {
    this.thingsList.splice(index, 1);
    return this.getThing();
  }

}
