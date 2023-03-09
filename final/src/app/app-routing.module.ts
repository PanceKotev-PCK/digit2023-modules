import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PetsModule } from './pets/pets.module';
import { SuppliesModule } from './supplies/supplies.module';

const routes: Routes = [
  {
    path: 'home', component: HomepageComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [PetsModule, SuppliesModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
