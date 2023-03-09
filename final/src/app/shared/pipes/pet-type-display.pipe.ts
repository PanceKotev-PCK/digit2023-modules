import { Pipe, PipeTransform } from '@angular/core';
import { PetType } from '../models';

@Pipe({
  name: 'petTypeDisplay'
})
export class PetTypeDisplayPipe implements PipeTransform {

  transform(value: PetType): string {
    return `🐾 ${value.toUpperCase()}`;
  }

}
