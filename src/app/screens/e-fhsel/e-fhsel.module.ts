import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {EFhselRoutingModule} from './e-fhsel-routing.module';
import {EFhselComponent} from './e-fhsel/e-fhsel.component';

@NgModule({
  imports: [
    SharedModule,
    EFhselRoutingModule
  ],
  declarations: [EFhselComponent]
})
export class EFhselModule {
}
