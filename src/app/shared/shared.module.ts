import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {CacheLocalStorage, CacheService, CacheStorageAbstract} from 'ng2-cache/ng2-cache';

import {LoginGuard} from './authorization/login.guard';
import {AuthGuard} from './authorization/authorization.guard';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AuthService} from './authorization/authorization.services';
import {DefaultRequestOptions} from './connection/connection.options';
import {StateHelper} from './services/state.helper';
import {AuthenticationConnectionBackend} from './connection/connection.interceptor';

@NgModule({
  providers: [
    StateHelper,
    AuthGuard,
    LoginGuard,
    AuthService,
    CacheService,
    {provide: RequestOptions, useClass: DefaultRequestOptions},
    {provide: CacheStorageAbstract, useClass: CacheLocalStorage},
    {provide: XHRBackend, useClass: AuthenticationConnectionBackend},
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AuthorizationComponent
  ],
  exports: [
    FormsModule,
    CommonModule,
    HttpModule
  ],
})
export class SharedModule {
}
