const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  patientLogin,
  patientRegister,
  getPatientbyID,
  updatePatient,
  deletePatient,
  getAllPatients
} = require("../controllers/patientController");

const {
  doctorRegister,
  doctorLogin,
  getDoctorbyID,
  updateDoctor,
  deleteDoctor,
  getAlldoctors
} = require("../controllers/doctorController");

const Doctorlogin = require("../controllers/doctorController");

router.post("/patientlogin",passport.authenticate("patient-local"),patientLogin);

router.post("/doctorlogin",passport.authenticate("doctor-local"),doctorLogin)
  
router.post("/patientregister",patientRegister);
router.post("/doctorregister",doctorRegister);

router.route("/patient/:id").get(getPatientbyID).patch(updatePatient).delete(deletePatient);
router.get("/alldoctors", getAlldoctors);
router.get("/allpatients",getAllPatients);
router.route("/doctor/:id").get(getDoctorbyID).patch(updateDoctor).delete(deleteDoctor)

module.exports = router;
