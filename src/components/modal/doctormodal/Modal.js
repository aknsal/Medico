import React from 'react'
import { Button } from "@material-ui/core";
import classes from './Modal.module.css'

const EditModal = ({open , onClose}) => {
    if(!open)
        return null;

    return (
        <div className={classes.modal}>
            <div className={classes.heading}>
                <p>Update Your Information</p>
            </div>
            <div className={classes.main}>
                <form action="" className={classes.form}>
                    <div className={classes.control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="specialty">Specialty</label>
                        <input type="number" id="specialty"/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender"/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="phn">Phone Number</label>
                        <input type="tel" required id="phn"/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" required id="email"/>
                    </div>
                    <div className="textarea">
                        <textarea name="description" id="" cols="10" rows="" required></textarea>
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
