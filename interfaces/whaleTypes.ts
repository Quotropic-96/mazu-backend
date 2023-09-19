import { Document } from "mongoose";

export interface IWhaleSize {
  gender: "Male" | "Female";
  length: number;
}

export interface IWhale extends Document {
  name: string;
  otherNames?: string[];
  scientificName: string;
  sizes: IWhaleSize[];
  curiosities?: string[];
}