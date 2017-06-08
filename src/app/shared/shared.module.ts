import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { CacheLocalStorage, CacheService, CacheStorageAbstract } from 'ng2-cache/ng2-cache';

import { AuthGuard } from './authorization/authorization.guard';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthService } from './authorization/authorization.services';
import { DefaultRequestOptions } from './services/default.request.options';
import { StateHelper } from './services/state.helper';

@NgModule({
  providers: [
    StateHelper,
    AuthGuard,
    AuthService,
    { provide: RequestOptions, useClass: DefaultRequestOptions },
    CacheService,
    { provide: CacheStorageAbstract, useClass: CacheLocalStorage }
  ],
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [AuthorizationComponent],
  exports: [
    FormsModule,
    CommonModule,
    HttpModule
  ],
})
export class SharedModule {
}
