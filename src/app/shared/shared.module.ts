import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CacheService, CacheStorageAbstract, CacheLocalStorage } from 'ng2-cache/ng2-cache';
import { AuthService } from './authorization/authorization.services';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthGuard } from './authorization/authorization.guard';
import { StateHelper } from './services/state.helper';

@NgModule({
  providers: [
    AuthService,
    AuthGuard,
    CacheService,
    { provide: CacheStorageAbstract, useClass: CacheLocalStorage },
    StateHelper
  ],
  declarations: [AuthorizationComponent],
  exports: [
    FormsModule,
    CommonModule,
    HttpModule
  ],
})
export class SharedModule {
}
