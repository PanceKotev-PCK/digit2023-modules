import { PetType } from "src/app/shared/models";

export interface IPet {
  name: string;
  pictureUrl: string;
  type: PetType;
  description: string;
}
