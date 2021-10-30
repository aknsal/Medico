import React from 'react'
import { Button } from "@material-ui/core";
import classes from './EditModal.module.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';

const EditModal = ({open , onClose, name, setName,id}) => {
    if(!open)
        return null;
    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleSubmit(){
        const url = "http://localhost:8000/api/patient/"+id;
        Axios.patch(url, {
            fname : name
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
        <div className={classes.modal}>
            <div className={classes.heading}>
                <h1>Update Your Information</h1>
            </div>
            <form action="" className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="height">Height</label>
                    <input type="number" id="height"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="weight">Weight</label>
                    <input type="number" id="weight"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" required id="dob"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="phn">Phone Number</label>
                    <input type="tel" required id="phn"/>
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
    )
}

export default EditModal
