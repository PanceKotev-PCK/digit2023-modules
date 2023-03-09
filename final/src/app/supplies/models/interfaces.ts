import { PetType } from "../../shared/models";

export interface ISupply {
  name: string;
  price: number;
  pictureUrl: string;
  for: PetType;
  description: string;
}
