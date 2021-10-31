const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    // required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
    enum: ["M", "F"],
  },
  rating: {
    type: Number,
    // required: true,
    default: 0,
  },
  category: {
    type: String,
    // required: true,
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
  fees:{
    type:Number,
    // required:true
  },
  slot1:{
    type:{
      patient_id:{ type: mongoose.Schema.Types.ObjectId },
      available: {type: Boolean},
    },
    default: {patient_id: null, available: true}
  },
  slot2:{
    type:{
      patient_id:{ type: mongoose.Schema.Types.ObjectId  },
      available: {type: Boolean },
    },
    default: {patient_id: null, available: true}
  },
  slot3:{
    type:{
      patient_id:{ type: mongoose.Schema.Types.ObjectId  },
      available: {type: Boolean },
    },
    default: {patient_id: null, available: true}
  },
  slot4:{
    type:{
      patient_id:{ type: mongoose.Schema.Types.ObjectId  },
      available: {type: Boolean },
    },
    default: {patient_id: null, available: true}
  },
  slot5:{
    type:{
      patient_id:{ type: mongoose.Schema.Types.ObjectId  },
      available: {type: Boolean },
    },
    default: {patient_id: null, available: true}
  },

});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;
