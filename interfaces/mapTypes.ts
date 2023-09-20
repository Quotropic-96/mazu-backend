import { Document, Schema } from "mongoose";

export interface IMap extends Document {
  url: string;
  whaleId: Schema.Types.ObjectId;
  startMonth: number;
  endMonth: number;
}
