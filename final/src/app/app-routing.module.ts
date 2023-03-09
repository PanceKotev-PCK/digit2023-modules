import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SupplyTableComponent } from './components/supply-table/supply-table.component';
import { PetsModule } from './pets/pets.module';

const routes: Routes = [
  {
    path: 'home', component: HomepageComponent
  },
  {
    path: 'supplies', component: SupplyTableComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [PetsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
