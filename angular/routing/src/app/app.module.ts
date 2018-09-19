// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

// App decorator
import { BaseComponent } from './base/base.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// App modules
import { HomeComponent } from './home/home.component';
import { ThingComponent } from './thing/thing.component';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ThingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [BaseComponent]
})
export class AppModule { }
