const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const WhaleSizeSchema = new Schema({
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

const WhaleSchema = new Schema({
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
    default: ['No information to displa']
  }
});

function arrayLimit(val) {
  return val.length <= 2;
}

module.exports = model("Whale", WhaleSchema);

