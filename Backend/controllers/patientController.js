const Patient = require("../models/patient.model");
const genPassword = require("../utils/passwordUtils").genPassword;

const patientRegister = async (req, res) => {
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
const patientLogin = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user,
  });
};

const getAllPatients = async (req,res) => {
  try {
      const getAllPatients = await Patient.find();
      return res.status(200).json({
          success: true,
          allPatients: getAllPatients
      })
  } catch (error) {
      return res.status(500).json({
          success: false,
          error: `Error Getting Users: ${error.message}`
      })
  }
}

const getPatientbyID = async (req,res) => {
  try {
          const patient = await Patient.findById(req.params.id);
            return res.status(200).json({
                success: true,
                data: patient
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: `Error Getting Users: ${error.message}`
            })
        }
}


const updatePatient = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id).exec();
        if (!patient) {
            return res.status(404).json( {
                success: false,
                error: 'Patient Not Found'
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
            error: `Error Getting Patient ${req.params.id}: ${error.message}`
        })
    }
}

const deletePatient = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id);
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
            error: `Error Deleting Patient: ${error.message}`
        })
    }
}

module.exports = { patientRegister, patientLogin, getPatientbyID, updatePatient ,deletePatient, getAllPatients };
