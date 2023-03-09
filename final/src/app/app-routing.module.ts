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
    path: 'pets', loadChildren: () => import('./pets/pets.module').then(p => p.PetsModule)
  },
  {
    path: 'supplies', loadChildren: () => import('./supplies/supplies.module').then(s => s.SuppliesModule)
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
