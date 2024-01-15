import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {AuthGuard} from '../keycloak/auth.guard';

export const DashboardRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'dashboard',
          canActivate:[AuthGuard],
        component: DashboardComponent
    }]
}
];
