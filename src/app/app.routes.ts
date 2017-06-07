import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthorizationComponent } from './shared/authorization/authorization.component';
import { AuthGuard } from './shared/authorization/authorization.guard';

const APP_ROUTES_PROVIDERS: Routes = [
    { path: '', redirectTo: 'e_fhsel', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'login', component: AuthorizationComponent },
    { path: 'e_fhsel', loadChildren: 'app/screens/e-fhsel/e-fhsel.module#EFhselModule', canActivate: [AuthGuard] }
];
export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);
