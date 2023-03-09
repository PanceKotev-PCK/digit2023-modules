import {Route} from '@angular/router';
import { PetGridComponent } from './pet-grid/pet-grid.component';
export const routes: Route[] = [
  {
    path: '', component: PetGridComponent
  },
  {
    path: '**', redirectTo: ''
  }

]
