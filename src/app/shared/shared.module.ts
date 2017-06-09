import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { CacheLocalStorage, CacheService, CacheStorageAbstract } from 'ng2-cache/ng2-cache';

import { LoginGuard } from './authorization/login.guard';
import { AuthGuard } from './authorization/authorization.guard';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthService } from './authorization/authorization.services';
import { DefaultRequestOptions } from './services/default.request.options';
import { StateHelper } from './services/state.helper';
import { AuthenticationConnectionBackend } from './services/authenticated.connection.backend';

@NgModule({
  providers: [
    StateHelper,
    AuthGuard,
    LoginGuard,
    AuthService,
    { provide: RequestOptions, useClass: DefaultRequestOptions },
    CacheService,
    { provide: CacheStorageAbstract, useClass: CacheLocalStorage },
    { provide: XHRBackend, useClass: AuthenticationConnectionBackend },
  ],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  declarations: [AuthorizationComponent],
  exports: [
    FormsModule,
    CommonModule,
    HttpModule
  ],
})
export class SharedModule {
}
