import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseComponent } from './base/base.component';
import { Thing1Component } from './thing1/thing1.component';
import { Thing2Component } from './thing2/thing2.component';

@NgModule({
  declarations: [
    BaseComponent,
    Thing1Component,
    Thing2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
