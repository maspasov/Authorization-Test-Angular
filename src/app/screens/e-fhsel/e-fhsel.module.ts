import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EFhselRoutingModule } from './e-fhsel-routing.module';
import { EFhselComponent } from './e-fhsel/e-fhsel.component';

@NgModule({
  imports: [
    CommonModule,
    EFhselRoutingModule
  ],
  declarations: [EFhselComponent]
})
export class EFhselModule { }
