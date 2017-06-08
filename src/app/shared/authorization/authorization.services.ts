import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { CacheService, CacheStoragesEnum } from 'ng2-cache/ng2-cache';

import { AppSettings } from '../../app.settings';
import { StateHelper } from '../services/state.helper';
import { User } from './user.interface';

@Injectable()
export class AuthService {

  constructor(private http: Http, private cacheService: CacheService, private stateHelper: StateHelper) { }

  signinUser() {
    const loginUrl = `${AppSettings.API_ENDPOINT}/login`;
    const params = { userName: 'imx', userPass: 'crx', userLang: 'en' };

    this.http.post(loginUrl, params).subscribe(
      res => this.setToken(res.headers.get('x-auth-token'))),
      error => console.log(error.text());
  }

  private setToken(token: string) {
    this.cacheService.set(AppSettings.USER_SESSION_KEY, token, AppSettings.USER_SESSION_EXPIRE_TIME);
    this.stateHelper.goToProtectedState();
  }

  logout() {
    // TODO call logout api method
  }

  isAuthenticated() {
    return this.cacheService.exists(AppSettings.USER_SESSION_KEY);
  }
}
