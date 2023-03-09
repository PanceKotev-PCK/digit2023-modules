import { Component, Input } from '@angular/core';
import { IPet } from '../models';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent {
@Input() public pet: IPet | undefined;
}
