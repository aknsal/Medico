const passport = require("passport");
const Patient = require("../models/patient");

passport.use(Patient.createStrategy());
passport.serializeUser(Patient.serializeUser());
passport.deserializeUser(Patient.deserializeUser());

const Patientregister = async (req, res) => {
  Patient.register(
    {
      fname: req.body.fname,
      lname: req.body.lname,
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
    },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        res.json({ msg: err, code: 404 });
      } else {
        passport.authenticate("local")(req, res, function () {
          res.json({ msg: "REGISTER SUCCESFULL", code: 201 });
        });
      }
    }
  );
};
const Patientlogin = async (req, res) => {
  const patient = new Patient({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(patient, function (err) {
    if (err) {
      console.log(err);
      res.json({ msg: err });
    } else {
      passport.authenticate("local")(req, res, function () {
        res.json({ msg: "LOGIN SUCCESFULL", code: 201 });
      });
    }
  });
};

module.exports = { Patientregister, Patientlogin };
