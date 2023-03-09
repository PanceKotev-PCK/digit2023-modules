import { Injectable } from '@angular/core';
import { IPet } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private readonly petsData: IPet[] = [
    {
      description: 'Ullamco est nostrud aliquip ex pariatur velit pariatur consequat id dolore tempor mollit. Anim deserunt est mollit incididunt exercitation do aliquip mollit Lorem occaecat dolor reprehenderit officia. Ex consequat excepteur esse laborum amet anim officia aute duis ullamco in sint. Officia dolor irure anim fugiat qui eiusmod ut ex do veniam sunt anim.',
      name: 'Trixy',
      pictureUrl: 'https://png2.cleanpng.com/sh/df3c8e490b3e57db0182c619ad99b3a1/L0KzQYi4UsE5N2lnTZGAYUO6doW7hshlbGM5TJCENkK5Q4GCVcE2OWQ7Sag9NkO4SIGCTwBvbz==/5a37f44f8dd244.9626309515136164635809.png',
      type: 'dog'
    },
    {
      description: 'Duis sint aliqua mollit voluptate ipsum. Ex ea magna dolor consequat nostrud nostrud deserunt commodo ullamco mollit sunt. Do cupidatat consectetur tempor id nisi sint duis mollit voluptate incididunt amet ex sint.',
      name: 'Neighck',
      pictureUrl: 'https://png2.cleanpng.com/sh/1cc7a9c8ae870f811ac14518ec3d504f/L0KzQYi4UsE2N5Y7fZGAYUO3SLTtg8k6apM2TZCBM0O3QISAUME2OWQ4UaU9MES5QoqATwBvbz==/5a348cfc99bb15.6334037015133934046297.png',
      type: 'dog'
    },
    {
      description: 'Anim amet labore adipisicing veniam. Magna cillum eiusmod sit non irure Lorem. Sit Lorem esse ad occaecat ad eiusmod exercitation tempor sit reprehenderit. Non duis incididunt sunt consectetur adipisicing magna enim aliqua pariatur dolore et eu. Sunt irure fugiat deserunt non voluptate. Voluptate sit magna minim eiusmod nostrud in dolore ea est pariatur officia elit incididunt.',
      name: 'Rudolph',
      pictureUrl: 'https://cutewallpaper.org/21/reindeer-transparent-background/Reindeer-Christmas-transparent-PNG-StickPNG.png',
      type: 'reindeer'
    },
    {
      description: 'Deserunt quis culpa exercitation commodo incididunt in aliqua esse sunt. Sunt officia enim in velit nostrud incididunt dolore ipsum in consectetur mollit. Reprehenderit mollit commodo elit anim ut voluptate.',
      name: 'Bhaadneim',
      pictureUrl: 'https://st3.depositphotos.com/8776626/34629/i/450/depositphotos_346298436-stock-photo-black-footed-cat-felis-nigripes.jpg',
      type: 'cat'
    },
    {
      description: 'Qui sint excepteur ad do occaecat minim Lorem qui excepteur laboris esse mollit enim non. Magna enim velit consectetur sunt duis duis tempor do irure. Voluptate laboris enim proident deserunt amet laborum elit est est proident anim voluptate proident. Irure do magna magna dolore duis sit sit non duis anim mollit ut id esse. Cillum excepteur deserunt minim occaecat Lorem exercitation pariatur ea aliquip.',
      name: 'Bouldy',
      pictureUrl: 'https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fe/Bouldy.png',
      type: 'rock'
    },
    {
      description: 'Mollit ad quis voluptate ut sint proident tempor consequat velit reprehenderit. Id esse Lorem proident dolore ut. Deserunt do irure ex id occaecat sunt aliqua nisi do incididunt sint minim sunt. Enim aute sit qui quis voluptate deserunt sit in ullamco. Esse in enim consectetur commodo nulla culpa Lorem ut velit ex enim consectetur. Minim anim magna est nostrud.',
      name: 'Jerry',
      pictureUrl: 'https://png2.cleanpng.com/sh/78dd7cc67684dd6a53950b151670cd67/L0KzQYi4UsEzN2g4fJGAYULpR4GCUcJiQWQ8UJC8Mki0R4q9VsE2OWQ1Tao9NEm0R4W7TwBvbz==/5a2f70912a9378.3281796615130584491744.png',
      type: 'hamster'
    },

  ];

  public getPets(): IPet[] {
    return [...this.petsData];
  }
}
