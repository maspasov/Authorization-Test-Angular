import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { AppSettings } from '../../app.settings';

import 'rxjs/add/operator/map';

export const contentHeaders = new Headers();
contentHeaders.append('X-AUTH-TOKEN', '');
contentHeaders.append('Accept-Language', 'en'); // TODO dinamic en

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: Http) { }

  signinUser() {

    localStorage.removeItem('id_token'); // TODO del
    this.http.post(
      `{AppSettings.API_ENDPOINT}login`,
      { userName: 'imx', userPass: 'crx', userLang: 'en' }, // get from UI form
      { headers: contentHeaders }
    )
      .map((res) => res.headers.get('x-auth-token'))
      .subscribe(
      token => {
        // TODO set token in heaers
        localStorage.setItem('id_token', token);
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
    const user = localStorage.getItem('id_token');;

    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
