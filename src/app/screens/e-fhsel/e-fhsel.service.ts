import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EFhselService {

  constructor(private http: Http) {
  }

  getCarsSmall() {
    return this.http.get('https://recipe-book-9899a.firebaseio.com/cars.json')
      .map((response: Response) => response.json())
      .catch(this.showError);
  }


  showError(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }

}
