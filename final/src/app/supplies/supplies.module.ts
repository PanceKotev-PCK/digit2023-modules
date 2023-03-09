import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplyItemComponent } from './components/supply-item/supply-item.component';
import { SupplyTableComponent } from './components/supply-table/supply-table.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';



@NgModule({
  declarations: [SupplyItemComponent, SupplyTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SuppliesModule { }
