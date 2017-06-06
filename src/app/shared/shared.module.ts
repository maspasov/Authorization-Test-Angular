import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EDashboardModule} from './e-dashboard/e-dashboard.module';

@NgModule({
    imports: [
      EDashboardModule
    ],
    exports: [
        CommonModule
    ]
})
export class SharedModule {}
