import { Injectable } from '@angular/core';
import {
    BaseRequestOptions,
    Headers,
    RequestOptions,
    RequestOptionsArgs
} from '@angular/http';
import { CacheService } from 'ng2-cache/ng2-cache';

import { AppSettings } from '../../app.settings';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
    constructor(private cacheService: CacheService) {
        super();
    }

    merge(options?: RequestOptionsArgs): RequestOptions {
        if (options.headers != null) {
            const contentType = options.headers.get('content-type');
            if (contentType == null || contentType === '') {
                options.headers.append('content-type', 'application/json');
            }
        } else {
            options.headers = new Headers({ 'content-type': 'application/json' });
        }

        if (this.cacheService.exists(AppSettings.USER_SESSION_KEY)) {
            options.headers.append('x-auth-token', this.cacheService.get(AppSettings.USER_SESSION_KEY));
        }

        return super.merge(options);
    }
}