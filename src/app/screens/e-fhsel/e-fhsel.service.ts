import { CacheService } from 'ng2-cache/ng2-cache';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { AppSettings } from '../../app.settings';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class EFhselService {

  constructor(private http: Http, private cacheService: CacheService) { }

  getData(url) {
    return this.http.get(url)
      .map((response: Response) => response.json())
      .catch(this.showError);
  }

  putData(search: any) {
    const body = JSON.stringify(search);
    return this.http.put(`${AppSettings.API_ENDPOINT}/svc/cases/searches`, body)
      .catch(this.showError);
  }

  showError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}
