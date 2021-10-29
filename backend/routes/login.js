const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  Patientlogin,
  Patientregister,
} = require("../controllers/PatientLogin");

const Doctorlogin = require("../controllers/DoctorLogin");

router.post("/patientlogin",passport.authenticate("local"),Patientlogin)
  
router.post("/patientregister",Patientregister)
  // .route("/Doctorlogin")
  // .get(Doctorlogin);

module.exports = router;
