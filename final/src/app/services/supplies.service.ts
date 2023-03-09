import { Injectable } from '@angular/core';
import { ISupply } from '../supplies/models';

@Injectable({
  providedIn: 'root'
})
export class SuppliesService {
  private _supplies: ISupply[] = [{
    description: "Irure laborum sit adipisicing ex voluptate veniam sunt eu id amet irure. Do tempor laboris consectetur pariatur dolor incididunt veniam officia laborum consequat magna exercitation. Reprehenderit ex nostrud excepteur esse ut excepteur ea adipisicing ut veniam. Ullamco velit eiusmod fugiat voluptate sunt aliqua aliquip ea Lorem exercitation ut duis. Ullamco est esse veniam est proident deserunt mollit sint eu consectetur in. Tempor pariatur cupidatat nulla enim ullamco officia duis aliquip cupidatat commodo do ullamco. Aliquip excepteur elit in ullamco enim aute.",
    for: "dog",
    name: "Dog food",
    pictureUrl: "https://image.similarpng.com/very-thumbnail/2021/11/Dog-Food-Bowl-on-transparent-background-PNG.png",
    price: 100
  },
  {
    description: "Irure laborum sit adipisicing ex voluptate veniam sunt eu id amet irure. Do tempor laboris consectetur pariatur dolor incididunt veniam officia laborum consequat magna exercitation. Reprehenderit ex nostrud excepteur esse ut excepteur ea adipisicing ut veniam. Ullamco velit eiusmod fugiat voluptate sunt aliqua aliquip ea Lorem exercitation ut duis. Ullamco est esse veniam est proident deserunt mollit sint eu consectetur in. Tempor pariatur cupidatat nulla enim ullamco officia duis aliquip cupidatat commodo do ullamco. Aliquip excepteur elit in ullamco enim aute.",
    for: "cat",
    name: "Cat food",
    pictureUrl: "https://image.similarpng.com/very-thumbnail/2021/11/Dog-Food-Bowl-on-transparent-background-PNG.png",
    price: 30
  },
  {
    description: "Irure laborum sit adipisicing ex voluptate veniam sunt eu id amet irure. Do tempor laboris consectetur pariatur dolor incididunt veniam officia laborum consequat magna exercitation. Reprehenderit ex nostrud excepteur esse ut excepteur ea adipisicing ut veniam. Ullamco velit eiusmod fugiat voluptate sunt aliqua aliquip ea Lorem exercitation ut duis. Ullamco est esse veniam est proident deserunt mollit sint eu consectetur in. Tempor pariatur cupidatat nulla enim ullamco officia duis aliquip cupidatat commodo do ullamco. Aliquip excepteur elit in ullamco enim aute.",
    for: "capybarra",
    name: "Capybarra food",
    pictureUrl: "https://image.similarpng.com/very-thumbnail/2021/11/Dog-Food-Bowl-on-transparent-background-PNG.png",
    price: 40
  }]

  public getSupplies(): ISupply[] {
    return this._supplies;
  }
}
