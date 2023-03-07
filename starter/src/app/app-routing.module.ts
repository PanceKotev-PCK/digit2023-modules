import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PetGridComponent } from './components/pet-grid/pet-grid.component';
import { SupplyTableComponent } from './components/supply-table/supply-table.component';

const routes: Routes = [
  {
   path: 'pets', component: PetGridComponent
  },
  {
    path: 'supplies', component: SupplyTableComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '**', redirectTo: 'pets'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
