import { Component } from '@angular/core';
import { ThingsListComponent } from './components/things-list.component';
import { ThingsFooterComponent } from './components/things-footer.component';

@Component({
	selector: 'app',
	templateUrl: 'app/view/things.html',
	directives: [ThingsListComponent,
				 ThingsFooterComponent]
})

export class AppComponent {}
