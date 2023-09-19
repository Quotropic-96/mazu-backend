const mongoose = require('mongoose');
import { IMap } from '../../interfaces/mapTypes';

const maps: Partial<IMap>[] = [
  // Maps for Blue Whale
  {
    url: "http://some-url.com/blue-whale-map1",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: "Jan",
    endMonth: "Jun"
  },
  {
    url: "http://some-url.com/blue-whale-map2",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: "Jul",
    endMonth: "Dec"
  },
  // Maps for Humpback Whale
  {
    url: "http://some-url.com/humpback-whale-map1",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: "Jan",
    endMonth: "May"
  },
  {
    url: "http://some-url.com/humpback-whale-map2",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: "Jun",
    endMonth: "Dec"
  },
  // Maps for Killer Whale
  {
    url: "http://some-url.com/killer-whale-map1",
    whaleId: new mongoose.Types.ObjectId(),  // Replace with actual ObjectId
    startMonth: "Jan",
    endMonth: "Dec"
  }
];

module.exports = maps;