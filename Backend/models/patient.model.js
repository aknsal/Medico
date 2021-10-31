const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
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
  },
  gender: {
    type: String,
  },
  bloodGroup:{
    type: String,
  },
  weight:{
    type: String,
  },
  height:{
    type: String,
  },
  phone:{
    type:Number,
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
        doctor_id: { type: mongoose.Schema.Types.ObjectId, required: true },
        slot: String,
      },
    ],
    default: [],
  }
});

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;

