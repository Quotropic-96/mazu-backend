import mongoose, { Schema, Model } from 'mongoose';
import { IMap } from '../interfaces/mapTypes';

const mapSchema = new Schema<IMap>({
  url: {
    type: String,
    required: [true, 'Url for the map is required'],
  },
  whaleId: {
    type: Schema.Types.ObjectId,
    ref: 'Whale',
    required: [true, 'Map must be associated with a whale'],
  },
  startMonth: {
    type: Number,
    min: 1,
    max: 12,
    required: false,
    default: 1,
  },
  endMonth: {
    type: Number,
    min: 1,
    max: 12,
    required: false,
    default: 12,
  },
});

const MapModel: Model<IMap> = mongoose.model('Map', mapSchema);

export default MapModel;
