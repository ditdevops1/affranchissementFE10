import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router'

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
// import { AuthGuard } from './keycloak/auth.guard';

export const AppRoutes: Routes = [
    {
        path: '',

        redirectTo: 'dashboard',
       //  canActivate: [AuthGuard],
        pathMatch: 'full',
    }, {
        path: '',

        component: AdminLayoutComponent,
       //  canActivate: [AuthGuard],
        children: [
            {

                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }
            // {
            //     path : '',
            //     loadChildren: () => import('./dashboard/dashboard.module').then(m    => m.DashboardModule)
            // }


            , {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
           
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            },
            {
                path: 'commande',
                loadChildren: './commande/commande.module#CommandeModule'
             
            },
            {
                path: 'stock',
                loadChildren: './stock/stock.module#StockModule'

            }
        ]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }
];
