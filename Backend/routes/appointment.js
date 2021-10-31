const express = require("express");
const router = express.Router();
const {newAppointment,doneAppointment} = require("../controllers/appointmentController");



router.post("/newAppointment", newAppointment);


router.post("/doneAppointment", doneAppointment);

module.exports = router;