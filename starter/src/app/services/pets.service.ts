import { Injectable } from '@angular/core';
import { IPet } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private readonly petsData: IPet[] = [
    {
      description: 'A dog',
      name: 'Rudolph',
      pictureUrl: 'https://www.tvguide.com/a/img/resize/0efed11fe6494347b648eb2cc28382b7708af08f/hub/2021/11/01/a55be7eb-9723-40d5-93ca-87a20bf9355f/211101-rudolph-the-red-nosed-reindeer.jpg?auto=webp',
      type: 'dog'
    },
    {
      description: 'A dog',
      name: 'Rudolph',
      pictureUrl: 'https://www.tvguide.com/a/img/resize/0efed11fe6494347b648eb2cc28382b7708af08f/hub/2021/11/01/a55be7eb-9723-40d5-93ca-87a20bf9355f/211101-rudolph-the-red-nosed-reindeer.jpg?auto=webp',
      type: 'dog'
    },
    {
      description: 'A dog',
      name: 'Rudolph',
      pictureUrl: 'https://www.tvguide.com/a/img/resize/0efed11fe6494347b648eb2cc28382b7708af08f/hub/2021/11/01/a55be7eb-9723-40d5-93ca-87a20bf9355f/211101-rudolph-the-red-nosed-reindeer.jpg?auto=webp',
      type: 'dog'
    },
    {
      description: 'A dog',
      name: 'Rudolph',
      pictureUrl: 'https://www.tvguide.com/a/img/resize/0efed11fe6494347b648eb2cc28382b7708af08f/hub/2021/11/01/a55be7eb-9723-40d5-93ca-87a20bf9355f/211101-rudolph-the-red-nosed-reindeer.jpg?auto=webp',
      type: 'dog'
    },
    {
      description: 'A dog',
      name: 'Rudolph',
      pictureUrl: 'https://www.tvguide.com/a/img/resize/0efed11fe6494347b648eb2cc28382b7708af08f/hub/2021/11/01/a55be7eb-9723-40d5-93ca-87a20bf9355f/211101-rudolph-the-red-nosed-reindeer.jpg?auto=webp',
      type: 'dog'
    },
    {
      description: 'A dog',
      name: 'Rudolph',
      pictureUrl: 'https://www.tvguide.com/a/img/resize/0efed11fe6494347b648eb2cc28382b7708af08f/hub/2021/11/01/a55be7eb-9723-40d5-93ca-87a20bf9355f/211101-rudolph-the-red-nosed-reindeer.jpg?auto=webp',
      type: 'dog'
    }
  ];

  public getPets(): IPet[] {
    return [...this.petsData];
  }
}
