import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from './authorization/authorization.services';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AuthGuard } from './authorization/authorization.guard';

@NgModule({
  providers: [
    AuthService,
    AuthGuard
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
