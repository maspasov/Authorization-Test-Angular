import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EDashboardRoutingModule } from './e-dashboard-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    EDashboardRoutingModule
  ],
  declarations: [HomeComponent]
})
export class EDashboardModule { }
