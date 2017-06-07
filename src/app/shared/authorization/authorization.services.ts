import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { AppSettings } from '../../app.settings';
import { CacheService, CacheStoragesEnum } from 'ng2-cache/ng2-cache';

import 'rxjs/add/operator/map';

export const contentHeaders = new Headers();
contentHeaders.append('X-AUTH-TOKEN', '');
contentHeaders.append('Accept-Language', 'en'); // TODO dinamic en

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: Http, private cacheService: CacheService) {}

  signinUser() {

    this.cacheService.removeTag(AppSettings.USER_SESSION_KEY); // TODO remove

    this.http.post(
      `${AppSettings.API_ENDPOINT}login`,
      { userName: 'imx', userPass: 'crx', userLang: 'en' }, // get from UI form
      { headers: contentHeaders }
    )
      .map((res) => res.headers.get('x-auth-token'))
      .subscribe(
      token => {
        // TODO set token in heaers
        this.cacheService.set(AppSettings.USER_SESSION_KEY, token, AppSettings.USER_SESSION_EXPIRE_TIME);
        this.router.navigate([this.router.url]);
      },
      error => {
        // TODO popup error in modal
        console.log(error.text());
      }
      );
  }

  logout() {
    // TODO call logout api method
  }

  isAuthenticated() {
    return this.cacheService.exists(AppSettings.USER_SESSION_KEY);
  }
}
