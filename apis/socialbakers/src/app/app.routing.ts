import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './controllers/home.component';
import { ProfileComponent } from './controllers/profile.component';
import { MetricComponent } from './controllers/metric.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // Home
  { path: 'metrics', component: ProfileComponent }, // Metrics
  { path: 'metrics/:profileId', component: MetricComponent }, // Metrics with Profile ID parameter
  { path: '**', component: HomeComponent } // 404
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
