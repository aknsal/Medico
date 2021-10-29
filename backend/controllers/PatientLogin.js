const Patient = require("../models/patient");
const genPassword = require("../utils/passwordUtils").genPassword;

const Patientregister = async (req, res) => {
  try {
    console.log(req.body.password);
    const saltHash = genPassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newPatient = new Patient({
      username: req.body.username,
      hash: hash,
      salt: salt,
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
    });

    // Save user
    await newPatient.save();
    return res.status(201).json({
      success: true,
      data: newPatient,
    });
  } catch (err) {
    console.log("Error occured while registering", err);
    return res.status(500).json({
      success: false,
      error: `Error Adding User: ${err.message}`,
    });
  }
};
const Patientlogin = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user,
  });
};

module.exports = { Patientregister, Patientlogin };
