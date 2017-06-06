import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';

import {EFhselRoutingModule} from './e-fhsel-routing.module';
import {EFhselComponent} from './e-fhsel/e-fhsel.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    EFhselRoutingModule
  ],
  declarations: [EFhselComponent]
})
export class EFhselModule {
}
