import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './authorization.services';
import { StateHelper } from '../services/state.helper';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private stateHelper: StateHelper, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.stateHelper.goToLoginState();
        }
        return false;
    }
}
