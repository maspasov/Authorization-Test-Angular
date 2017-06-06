import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES_PROVIDERS: Routes = [
    { path: '**', redirectTo: 'e_fhsel', pathMatch: 'full' },
    { path: 'e_fhsel', loadChildren: 'app/screens/e-fhsel/e-fhsel.module#EFhselModule' }
];
export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
