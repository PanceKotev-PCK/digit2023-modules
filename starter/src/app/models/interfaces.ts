export interface IPet {
  name: string;
  pictureUrl: string;
  type: PetType;
  description: string;
}

export type PetType = 'cat' | 'mouse' | 'capybarra' | 'dog' | 'rock';

export interface ISupply {
  name: string;
  price: number;
  pictureUrl: string;
  for: PetType;
  description: string;

}
