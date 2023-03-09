import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCardComponent } from './pet-card/pet-card.component';
import { PetGridComponent } from './pet-grid/pet-grid.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PetCardComponent, PetGridComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PetsModule { }
