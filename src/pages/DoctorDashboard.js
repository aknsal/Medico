import React , { useState } from 'react'
import classes from './DoctorDashboard.module.css'
import { Button } from "@material-ui/core";
import Modal from '../components/modal/doctormodal/Modal' 
import Backdrop from '../components/modal/Backdrop/Backdrop'
import NavbarDoctor from '../components/navbar/NavbarDoctor';

const DoctorDashboard = () => {

    const [showModal , setShowModal] = useState(false);

    return (
        <>
        
        <NavbarDoctor/>
        <div className={classes.container}>
            <div className={classes.up}>
                <div className={classes.common}>
                    <div className={classes.information}>
                        <div className={classes.img}>
                            <img src="https://newassets.apollo247.com/images/no_photo.png" alt="" />
                        </div>
                        <div className={classes.info1}>
                            <div className="name">Name: </div>
                            <div className="speciality">Speciality: </div>
                            <div className="gender">Gender: </div>
                            <div className="age">Age: </div>
                            <div className="phn">Phone Number: </div>
                        </div>
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis esse labore, officiis officia, eius eos assumenda rem iure provident repellendus ad magni eaque.
                    </div>
                    <Button
                        className={classes.apointmentButton , classes.btn}
                        gutterBottom
                        variant="contained"
                        color="primary"
                        onClick={()=>setShowModal(true)}
                    >
                        Edit
                    </Button>
                    <Modal open={showModal} onClose={()=>setShowModal(false)}/>
                    <Backdrop open={showModal} onClose={()=>setShowModal(false)}/>
                </div>
                <div className={classes.appointment}>
                    <div className={classes.heading}>
                        <h1>Recent Appointments</h1>
                    </div>
                    <p>No appointments to attend</p>
                </div>
            </div>
            <div className={classes.below}>
                <div className={classes.patients}>
                    <div className={classes.heading}>
                        <h1>Patients</h1>
                    </div>
                    <p>No patients</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default DoctorDashboard
