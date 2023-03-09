import { Component, OnInit } from '@angular/core';
import { IPet } from '../models';
import { PetsService } from 'src/app/services/pets.service';

@Component({
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
