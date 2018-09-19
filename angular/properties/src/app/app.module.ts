import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseComponent } from './base/base.component';
import { ThingComponent } from './thing/thing.component';

@NgModule({
  declarations: [
    BaseComponent,
    ThingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
