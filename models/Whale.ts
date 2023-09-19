import mongoose, { Schema, Model } from "mongoose";
import { IWhale, IWhaleSize } from "../interfaces/whaleTypes";

const WhaleSizeSchema = new Schema<IWhaleSize>({
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});

const WhaleSchema = new Schema<IWhale>({
  name: {
    type: String,
    required: [true, "Whale's name is required"],
  },
  otherNames: {
    type: [String],
    default: null,
  },
  scientificName: {
    type: String,
    required: [true, "Whale's scientific name is required"],
  },
  sizes: {
    type: [WhaleSizeSchema],
    required: [true, "Whale's size is required"],
    validate: [arrayLimit, "Exceeds the limit of size records"],
  },
  curiosities: {
    type: [String],
    default: ["No information to display"],
  },
});

function arrayLimit(val: any[]) {
  return val.length <= 2;
}

const Whale: Model<IWhale> = mongoose.model("Whale", WhaleSchema);

export default Whale;
