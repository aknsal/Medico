const { Router } = require("express");

const {
  Patientlogin,
  Patientregister,
} = require("../controllers/PatientLogin");

const Doctorlogin = require("../controllers/DoctorLogin");

Router.route = router
  .route("/Patientlogin")
  .get(Patientlogin)
  .route("/Patientregister")
  .get(Patientregister)
  .route("/Doctorlogin")
  .get(Doctorlogin);

module.exports = router;
