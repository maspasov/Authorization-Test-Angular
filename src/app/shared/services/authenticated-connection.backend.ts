import { Injectable } from '@angular/core';
import { Request, XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { StateHelper } from './state.helper';
import { CacheService } from 'ng2-cache/ng2-cache';

@Injectable()
export class AuthenticationConnectionBackend extends XHRBackend {

    constructor(
        _browserXhr: BrowserXhr,
        _baseResponseOptions: ResponseOptions,
        _xsrfStrategy: XSRFStrategy,
        private stateHelper: StateHelper,
        private cacheService: CacheService
    ) {
        super(_browserXhr, _baseResponseOptions, _xsrfStrategy);
    }

    createConnection(request: Request) {
        const xhrConnection = super.createConnection(request);
        xhrConnection.response = xhrConnection.response.catch((error: Response) => {
            debugger;
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expires or the user is not authorised.');
                this.cacheService.removeAll();
                this.stateHelper.goToLoginState();
            }
            return Observable.throw(error);
        });
        return xhrConnection;
    }
}