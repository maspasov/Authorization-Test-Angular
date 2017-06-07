import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {CacheService} from 'ng2-cache/ng2-cache';
import {AppSettings} from '../../app.settings';

@Injectable()
export class EFhselService {

  constructor(private http: Http, private cacheService: CacheService) {
  }

  getData(url) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', this.cacheService.get(AppSettings.USER_SESSION_KEY));
    return this.http.get(url, {headers: headers})
      .map((response: Response) => response.json())
      .catch(this.showError);
  }

  putData(search: any) {
    const body = JSON.stringify(search);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-auth-token', this.cacheService.get(AppSettings.USER_SESSION_KEY));
    return this.http.put(`${AppSettings.API_ENDPOINT}/svc/cases/searches`, body, {headers: headers})
      .catch(this.showError);
  }

  showError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
