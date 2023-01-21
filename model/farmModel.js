const mongoose = require("mongoose")

const meatDetailSchema = new mongoose.Schema({
  chicken: {
    type: Boolean,
    default: false
  },
  pork: {
    type: Boolean,
    default: false
  },
  beef: {
    type: Boolean,
    default: false
  },
  goat: {
    type: Boolean,
    default: false
  },
  lamb: {
    type: Boolean,
    default: false
  },
  turkey: {
    type: Boolean,
    default: false
  },
  duck: {
    type: Boolean,
    default: false
  },
})

const produceDetailSchema = new mongoose.Schema({
  potato: {
    type: Boolean,
    default: false
  },
  berry: {
    type: Boolean,
    default: false
  },
  rice: {
    type: Boolean,
    default: false
  },
  tomato: {
    type: Boolean,
    default: false
  },
  lemon: {
    type: Boolean,
    default: false
  },
  nuts: {
    type: Boolean,
    default: false
  },
  onion: {
    type: Boolean,
    default: false
  },
  carrot: {
    type: Boolean,
    default: false
  },
})

const farmSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now,
    required: [true, "Must provide create date"]
  },
  farmName: {
    type: String,
    required: [true, "Must provide unique name"],
    unique: true
  },
  farmImage: {
    type: [String],
    required: [true, "Must provide farm Image"]
  },
  farmLocation: {
    type: String,
    required: [true, "Must provide location"]
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
    min: [1, "min value 1"],
    max: [5, "max value 5"]
  },
  produce: {
    type: Boolean,
    default: false
  },
  produceDetails: {
    type: produceDetailSchema,
    validate: function() {
      return this.produce
    }
  },
  meat: {
    type: Boolean,
    default: false
  },
  meatDetails: {
    type: meatDetailSchema,
    validate: function() {
      return this.meat
    }
  }
})


const Farm = mongoose.model("Farm", farmSchema)

module.exports = Farm
