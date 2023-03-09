import { PetType } from "../shared/models";

export interface IPet {
  name: string;
  pictureUrl: string;
  type: PetType;
  description: string;
}

export interface ISupply {
  name: string;
  price: number;
  pictureUrl: string;
  for: PetType;
  description: string;
}
