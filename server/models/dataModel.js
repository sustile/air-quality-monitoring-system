const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema(
  {
    time: { type: Date, required: [true, "A Data must have time"] },
    temperature: {
      type: String,
      required: [true, "A Data must have temperature"],
    },
    humidity: { type: String, required: [true, "A Data must have humidity"] },
    carbonMonoxide: {
      type: String,
      required: [true, "A Data must have carbonMonoxide"],
    },
    fineParticulateMatter: {
      type: String,
      required: [true, "A Data must have Fine Particulate Matter"],
    },
    airQualityIndex: {
      type: String,
      required: [true, "A Data must have Air Quality Index"],
    },
  },
  { strict: true }
);

module.exports = schema;
