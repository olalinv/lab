import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ThingComponent } from './thing/thing.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // Home
  { path: 'thing', component: ThingComponent }, // Thing
  { path: '**', component: HomeComponent } // 404
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
