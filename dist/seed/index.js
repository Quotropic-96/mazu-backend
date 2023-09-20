"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mongoose = require('mongoose');
const Whale = require('../models/Whale');
const Map = require('../models/Map');
const whales = require('./data/whales');
const maps = require('./data/maps');
const assignMaps = (whales, maps) => {
    maps[0].whaleId = whales[0]._id;
    maps[1].whaleId = whales[0]._id;
    maps[2].whaleId = whales[1]._id;
    maps[3].whaleId = whales[1]._id;
    maps[4].whaleId = whales[2]._id;
    return maps;
};
const seed = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to ${connect.connection.name}`);
        await Whale.deleteMany();
        await Map.deleteMany();
        const createdWhales = await Whale.create(whales);
        console.log(`${createdWhales.length} whales created`);
        const createdMaps = await Map.create(assignMaps(createdWhales, maps));
        console.log(`${createdMaps.length} maps created`);
        console.log('Seed done 🌱');
        await mongoose.connection.close();
        console.log('Connection to DB closed');
    }
    catch (error) {
        console.log(error);
    }
};
seed();
// Run npm run seed 
//# sourceMappingURL=index.js.map