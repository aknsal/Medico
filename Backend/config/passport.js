const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Patient = require("../models/patient.model");
const Doctor = require("../models/doctor.model");
// const connection = require("./database");
// const Patient = connection.models.User;
const validPassword = require("../utils/passwordUtils").validPassword;

const verifyCallback = (username, password, done) => {
  Patient.findOne({ username: username }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      console.log("incorrect Username");
      return done(null, false, { message: "Incorrect username." });
    }
    if (!validPassword(password, user.hash, user.salt)) {
      console.log("incorrect password");
      return done(null, false, { message: "Incorrect password." });
    }
    if (validPassword(password, user.hash, user.salt)) {
      console.log("Account credentials matched");
      return done(null, user);
    }

    console.log("unexpected error");
  });
};

const verifyCallbackDoctor = (username, password, done) => {
  Doctor.findOne({ username: username }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      console.log("incorrect Username");
      return done(null, false, { message: "Incorrect username." });
    }
    if (!validPassword(password, user.hash, user.salt)) {
      console.log("incorrect password");
      return done(null, false, { message: "Incorrect password." });
    }
    if (validPassword(password, user.hash, user.salt)) {
      console.log("Account credentials matched");
      return done(null, user);
    }

    console.log("unexpected error");
  });
};

const patientStrategy = new LocalStrategy(verifyCallback);
const doctorStrategy = new LocalStrategy(verifyCallbackDoctor)

passport.use("patient-local",patientStrategy);
passport.use("doctor-local",doctorStrategy);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Patient.findById(id, function (err, user) {
    done(err, user);
  });
});