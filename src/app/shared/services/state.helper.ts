import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class StateHelper {
    constructor(private router: Router) { }

    goToProtectedState() {
        const currentUrl = this.router.url;
        const redirectTo = (currentUrl === '/login') ? '' : currentUrl;
        this.router.navigate([redirectTo]);
    }

    goToDashboard() {
        this.router.navigate(['/e_fhsel']); // TODO will be '/e_dashboard'
    }

    goToLoginState() {
        this.router.navigate(['/login']);
    }
}