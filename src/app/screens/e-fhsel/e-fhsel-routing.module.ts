import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EFhselComponent } from './e-fhsel/e-fhsel.component';

const routes: Routes = [
  { path: '', component: EFhselComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EFhselRoutingModule {
}
