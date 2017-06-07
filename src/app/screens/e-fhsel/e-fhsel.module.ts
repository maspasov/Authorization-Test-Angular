import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

import {EFhselRoutingModule} from './e-fhsel-routing.module';
import {EFhselComponent} from './e-fhsel/e-fhsel.component';
import {DataTableModule} from 'primeng/primeng';
import {EFhselService} from './e-fhsel.service';

@NgModule({
  imports: [
    SharedModule,
    EFhselRoutingModule,
    DataTableModule
  ],
  declarations: [
    EFhselComponent
  ],
  providers: [
    EFhselService
  ]
})
export class EFhselModule {
}
