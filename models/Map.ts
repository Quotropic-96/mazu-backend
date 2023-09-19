import mongoose, { Schema, Model } from "mongoose";
import { IMap } from "../interfaces/mapTypes";

const mapSchema = new Schema<IMap>({
  url: {
    type: String,
    required: [true, "Url for the map is required"],
  },
  whaleId: {
    type: Schema.Types.ObjectId,
    ref: "Whale",
    required: [true, "Map must be asociated with a whale"],
  },
  startMonth: {
    type: String,
    enum: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    required: false,
    default: "Jan",
  },
  endMonth: {
    type: String,
    enum: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    required: false,
    default: "Dec",
  },
});

const MapModel: Model<IMap> = mongoose.model('Map', mapSchema);

export default MapModel;