import { Component, OnInit } from '@angular/core';
import { IPet } from 'src/app/models/interfaces';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-grid',
  templateUrl: './pet-grid.component.html',
  styleUrls: ['./pet-grid.component.css']
})
export class PetGridComponent implements OnInit{

  public pets: IPet[] = [];

  constructor(private readonly _petsService: PetsService){

  }

  public ngOnInit(): void {
      this.pets = this._petsService.getPets();
  }
}
