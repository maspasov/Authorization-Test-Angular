import { NgModule } from '@angular/core';

import { EFhselRoutingModule } from './e-fhsel-routing.module';
import { EFhselComponent } from './e-fhsel/e-fhsel.component';

@NgModule({
  imports: [
    EFhselRoutingModule
  ],
  declarations: [EFhselComponent]
})
export class EFhselModule { }
