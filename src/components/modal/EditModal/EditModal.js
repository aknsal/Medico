import React from 'react'
import { Button } from "@material-ui/core";
import classes from './EditModal.module.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';

const EditModal = ({open , onClose, fname, setFname,lname, setLname, bloodGroup, setBloodGroup, age, setAge, height, setHeight, weight, setWeight, gender, setGender, phone, setPhone ,id}) => {
    if(!open)
        return null;
    function handleNameChange(e){
        setFname(e.target.value)
    }
    function handlelNameChange(e){
        setLname(e.target.value)
    }
    function handleBldChange(e){
        setBloodGroup(e.target.value)
    }
    function handleHeightChange(e){
        setHeight(e.target.value)
    }
    function handleWeightChange(e){
        setWeight(e.target.value)
    }
    function handleAgeChange(e){
        setAge(e.target.value)
    }
    function handleGenderChange(e){
        setGender(e.target.value)
    }
    function handlePhnChange(e){
        setPhone(e.target.value)
    }

    function handleSubmit(){
        const url = "";
        Axios.patch(url, {
            fname : fname,
            lname: lname,
            bloogGroup: bloodGroup,
            age: age,
            height: height,
            weight: weight,
            gender: gender,
            phone: phone
          }).then(res => {
            if(res.status !== 200)
              alert("something might be wrong")
            else {
                alert("Data Changed");
            }
          }).catch(err=>{
            
            alert(err)
          })
    }

    return (
        <>
        <div className={classes.modal}>
            <div className={classes.heading}>
                <h1>Update Your Information</h1>
            </div>
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
                    <label htmlFor="bloodGroup">Blood Group</label>
                    <input type="text" id="lname" value={bloodGroup} onChange={handleBldChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={age} onChange={handleAgeChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="height">Height</label>
                    <input type="text" id="height" value={height} onChange={handleHeightChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="weight">Weight</label>
                    <input type="text" id="weight" value={weight} onChange={handleWeightChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender" value={gender} onChange={handleGenderChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="phn">Phone Number</label>
                    <input type="tel" required id="phone" value={phone} onChange={handlePhnChange}/>
                </div>
                <div className="actions">
                </div>
            </form>
            <div className={classes.btn}>
                <Button
                    gutterBottom
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
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
        </>
    )
}

export default EditModal