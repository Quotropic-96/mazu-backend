const mongoose = require('mongoose');
import { IMap } from '../../interfaces/mapTypes';

const maps: Partial<IMap>[] = [
  // Maps for Blue Whale
  {
    url: "http://some-url.com/blue-whale-map1",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: 1,
    endMonth: 6
  },
  {
    url: "http://some-url.com/blue-whale-map2",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: 7,
    endMonth: 12
  },
  // Maps for Humpback Whale
  {
    url: "http://some-url.com/humpback-whale-map1",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: 1,
    endMonth: 5
  },
  {
    url: "http://some-url.com/humpback-whale-map2",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: 6,
    endMonth: 12
  },
  // Maps for Killer Whale
  {
    url: "http://some-url.com/killer-whale-map1",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: 1,
    endMonth: 12
  }
];

export default maps;