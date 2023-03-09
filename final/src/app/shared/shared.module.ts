import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetTypeDisplayPipe } from './pipes/pet-type-display.pipe';
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PetTypeDisplayPipe, AddNewItemComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    PetTypeDisplayPipe,
AddNewItemComponent
  ]
})
export class SharedModule { }
