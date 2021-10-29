import React from 'react'
import { Button } from "@material-ui/core";
import classes from './EditModal.module.css'

const EditModal = ({open , onClose}) => {
    if(!open)
        return null;

    return (
        <div className={classes.modal}>
            <div className={classes.heading}>
                <h1>Update Your Information</h1>
            </div>
            <form action="" className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
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
                    <Button
                        gutterBottom
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </div>
            </form>
                <Button
                    gutterBottom
                    variant="contained"
                    color="primary"
                    onClick={onClose}
                >
                    Close
                </Button>
        </div>
    )
}

export default EditModal
