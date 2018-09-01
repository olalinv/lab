import { Component } from '@angular/core';
import { Thing } from '../model/thing';

@Component({
	selector: 'things-list',
	templateUrl: 'app/view/things-list.html',
	styleUrls: ['assets/css/thing.css']
})

export class ThingsListComponent {

	public thing:Thing;
	public thingSelected:Thing;
	public things:Array<Thing>;
	public visible:boolean;

	constructor(){
		// this.thing = new Thing(1, "Cosa #1");
		this.things = [
			new Thing(1, "Cosa #1"),
			new Thing(2, "Cosa #2"),
			new Thing(3, "Cosa #3")
		]

		this.thing = this.things[0];
		this.thingSelected = this.thing;
		this.visible = true;
		this.debug();
	}

	debug(){
		console.log(this.things);
	}

	toggle(value){
		this.visible = value;
	}

	change(thing) {
		this.thing = thing;
		this.thingSelected = thing;
	}

}