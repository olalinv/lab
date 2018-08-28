import { Component } from '@angular/core';
import { Thing } from './model/thing';

@Component({
	selector: 'app',
	templateUrl: 'app/view/things.html',
	styleUrls: ['../assets/css/thing.css']
})

export class AppComponent {
	// public thing:Thing;
	public things:Array<Thing>;
	public visible:boolean;

	constructor(){
		// this.thing = new Thing(1, "Cosa #1");
		this.things = [
			new Thing(1, "Cosa #1"),
			new Thing(2, "Cosa #2"),
			new Thing(3, "Cosa #3")
		]
		this.visible = true;
		this.debug();
	}

	debug(){
		console.log(this.things);
	}

	toggle(value){
		this.visible = value;
	}

}
