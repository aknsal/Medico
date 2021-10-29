// const Patient = require("../models/doctor");

// const Doctorlogin = async (req, res) => {
//   const patient = new Patient({
//     username: req.body.username,
//     password: req.body.password,
//   });
//   req.login(patient, function (err) {
//     if (err) {
//       console.log(err);
//       res.json({ msg: err });
//     } else {
//       passport.authenticate("local")(req, res, function () {
//         res.json({ msg: "LOGIN SUCCESFULL", code: 201 });
//       });
//     }
//   });
// };

// module.exports = Doctorlogin;
