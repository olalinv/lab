// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

// App layout
import { BaseComponent } from './controllers/base.component';
import { HeaderComponent } from './controllers/header.component';
import { SidebarComponent } from './controllers/sidebar.component';
import { FooterComponent } from './controllers/footer.component';
// App modules
import { HomeComponent } from './controllers/home.component';
import { ProfileComponent } from './controllers/profile.component';
import { MetricComponent } from './controllers/metric.component';
// App pipes
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    MetricComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [BaseComponent]
})
export class AppModule { }
