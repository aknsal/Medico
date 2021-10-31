import React from 'react'
import { Button } from "@material-ui/core";
import classes from './Modal.module.css'

const EditModal = ({open , onClose, fname, setFname, lname, setLname, gender, setGender, phone, setPhone, speciality, setSpeciality, text, setText}) => {
    if(!open)
        return null;

    function handleNameChange(e){
        setFname(e.target.value)
    }
    function handlelNameChange(e){
        setLname(e.target.value)
    }
    function handleGenderChange(e){
        setGender(e.target.value)
    }
    function handlePhoneChange(e){
        setPhone(e.target.value)
    }
    function handleSpecialityChange(e){
        setSpeciality(e.target.value)
    }
    function handleTextChange(e){
        setText(e.target.value)
    }

    return (
        <div className={classes.modal}>
            <div className={classes.heading}>
                <p>Update Your Information</p>
            </div>
            <div className={classes.main}>
                <form action="" className={classes.form}>
                    <div className={classes.control}>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" value={fname} onChange={handleNameChange}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" value={lname} onChange={handlelNameChange}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="specialty">Specialty</label>
                        <input type="number" id="specialty" value={speciality} onChange={handleSpecialityChange}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender" value={gender} onChange={handleGenderChange}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="phn">Phone Number</label>
                        <input type="tel" required id="phn" value={phone} onChange={handlePhoneChange}/>
                    </div>
                    <div className="textarea">
                        <textarea name="description" id="" cols="10" rows="" value={text} onChange={handleTextChange} required></textarea>
                    </div>
                    <div className="actions">
                    </div>
                </form>
                <div className={classes.btn}>
                    <Button
                        gutterBottom
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                    <Button
                        gutterBottom
                        variant="contained"
                        color="primary"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EditModal
