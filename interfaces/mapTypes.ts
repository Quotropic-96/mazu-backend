import { Document, Schema } from "mongoose";
import { Month } from "./types/Month";

export interface IMap extends Document {
  url: string;
  whaleId: Schema.Types.ObjectId;
  startMonth: Month;
  endMonth: Month;
}
