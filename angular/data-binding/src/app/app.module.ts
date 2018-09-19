import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BaseComponent } from './base/base.component';
import { ThingComponent } from './thing/thing.component';

@NgModule({
  declarations: [
    BaseComponent,
    ThingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
