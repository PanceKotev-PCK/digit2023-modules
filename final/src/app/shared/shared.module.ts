import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetTypeDisplayPipe } from './pipes/pet-type-display.pipe';



@NgModule({
  declarations: [PetTypeDisplayPipe],
  imports: [
    CommonModule
  ],
  exports: [
    PetTypeDisplayPipe
  ]
})
export class SharedModule { }
