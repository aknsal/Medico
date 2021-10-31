const Patient = require("../models/patient.model");
const Doctor = require("../models/doctor.model");

const newAppointment = async (req, res) => {
  try {
    const patient = await Patient.findById(req.body.patient_id);
    const doctor = await Doctor.findById(req.body.doctor_id);
    patient.appointments.forEach((element) => {
      if (element.doctor_id == doctor._id) {
        return res.status(500).json({
          success: false,
          error: `Appointment already made with the doctor`,
        });
      }
    });
    const slot = req.body.slot;
    if (doctor[slot].available == false) {
      return res.status(500).json({
        success: false,
        error: `Slot not empty`,
      });
    } else {
      doctor[slot].available = true;
      doctor[slot].patient_id = (await patient)._id;
      patient.appointments.push({
        doctor_id: (await doctor)._id,
        slot: slot,
      });
      (await patient).save();
      (await doctor).save();
      return res.status(200).json({
        success: true,
        error: `Appointment made!`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: `Error in creating Appointment: ${error.message}`,
    });
  }
};

const doneAppointment = async (req, res) => {
  try {
    const patient = await Patient.findById(req.body.patient_id);
    const doctor = await Doctor.findById(req.body.doctor_id);
    const slot = req.body.slot;
    if (doctor[slot].available == false) {
      return res.status(500).json({
        success: false,
        error: `Slot empty`,
      });
    } else {
      doctor[slot] = {};
      patient.appointments.filter((obj) => {
        if (obj.doctor_id != doctor._id) return true;
        else return false;
      });
      doctor.save();
      patient.save();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: `Error in creating Appointment: ${error.message}`,
    });
  }
};

module.exports = {newAppointment, doneAppointment};
