import React from 'react'
import { Button } from "@material-ui/core";
import classes from './BookAppointmentModal.module.css'

const ReportModal = ({open , onClose}) => {
    if(!open)
        return null;

    return (
        <div className={classes.modal}>
            <div className={classes.heading}>
                <h1>Book Your Appointment</h1>
            </div>
           
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

export default ReportModal
