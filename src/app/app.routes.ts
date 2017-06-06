import { Routes, RouterModule } from '@angular/router';
import {EDashboardModule} from './shared/e-dashboard/e-dashboard.module';

const APP_ROUTES_PROVIDERS: Routes = [
    { path: '**', redirectTo: 'e_dashboard', pathMatch: 'full' },
    { path: 'e_dashboard', component: EDashboardModule }
];
export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
