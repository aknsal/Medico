const mongoose = require("mongoose");

const patient = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["M", "F"],
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ["SURGEON", "PSYCHATRIST", "GENERAL"],
      message: "NOT A VALID CATEGORY",
    },
  },

  hash: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },

  appointments: {
    type: [
      {
        patient_id: { type: mongoose.Schema.Types.ObjectId, required: true },
        time: { type: Date, required: true },
      },
    ],
    default: [],
  },
});

module.exports = patient;
