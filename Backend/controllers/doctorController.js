const Doctor = require("../models/doctor.model");
const genPassword = require("../utils/passwordUtils").genPassword;

const doctorRegister = async (req, res) => {
    try {
      console.log(req.body.password);
      const saltHash = genPassword(req.body.password);
      const salt = saltHash.salt;
      const hash = saltHash.hash;
  
      const newDoctor = new Doctor({
        username: req.body.username,
        hash: hash,
        salt: salt,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
      });
  
      // Save user
      await newDoctor.save();
      return res.status(201).json({
        success: true,
        data: newDoctor,
      });
    } catch (err) {
      console.log("Error occured while registering", err);
      return res.status(500).json({
        success: false,
        error: `Error Adding User: ${err.message}`,
      });
    }
  };

const doctorLogin = async (req, res) => {
    return res.status(200).json({
      success: true,
      data: req.user,
    });
  };

const getAlldoctors = async (req,res) => {
    try {
        const allDoctors = await Doctor.find();
        return res.status(200).json({
            success: true,
            doctorData: allDoctors
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Users: ${error.message}`
        })
    }
}

const getDoctorbyID = async (req,res) => {
    try {
            const doctor = await Doctor.findById(req.params.id);
              return res.status(200).json({
                  success: true,
                  doctorData: doctor
              })
          } catch (error) {
              return res.status(500).json({
                  success: false,
                  error: `Error Getting Users: ${error.message}`
              })
          }
  }
  
  
  const updateDoctor = async (req, res, next) => {
      try {
          const patient = await Doctor.findById(req.params.id).exec();
          if (!patient) {
              return res.status(404).json( {
                  success: false,
                  error: 'Doctor Not Found'
              })
          }
          console.log(req.body)
          patient.set(req.body);
          var update = await patient.save();
          return res.status(200).json({
              success: true,
              data: update
          })
      } catch (error) {
          return res.status(500).json({
              success: false,
              error: `Error Getting Doctor ${req.params.id}: ${error.message}`
          })
      }
  }
  
  const deleteDoctor = async (req, res, next) => {
      try {
          const patient = await Doctor.findById(req.params.id);
          if (!patient) {
              return res.status(404).json( {
                  success: false,
                  error: 'User Not Found'
              })
          }
  
          await   patient.remove();
  
          return res.status(200).json({
              success: true,
              data: {}
          })
      } catch (error) {
          return res.status(500).json({
              success: false,
              error: `Error Deleting Doctor: ${error.message}`
          })
      }
  }

module.exports = {doctorRegister ,doctorLogin,getDoctorbyID,updateDoctor,deleteDoctor, getAlldoctors};
