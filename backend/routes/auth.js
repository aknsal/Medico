const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  Patientlogin,
  Patientregister,
  getPatientbyID,
  updatePatient,
  deletePatient
} = require("../controllers/patientController");

const Doctorlogin = require("../controllers/doctorController");

router.post("/patientlogin",passport.authenticate("local"),Patientlogin);
  
router.post("/patientregister",Patientregister);

router.route("/patient/:id").get(getPatientbyID).patch(updatePatient).delete(deletePatient);
  // .route("/Doctorlogin")
  // .get(Doctorlogin);

module.exports = router;
