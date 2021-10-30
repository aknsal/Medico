import React , { useState, useEffect } from 'react'
import classes from './PatientDashboard.module.css'
// import { FaUserEdit } from 'react-icons/fa'
import { Button } from "@material-ui/core";
import ReportModal from '../components/modal/ReportModal/ReportModal';
import {useParams} from "react-router-dom";
import Backdrop from '../components/modal/Backdrop/Backdrop';
import Axios from 'axios'

const PatientProfile = () => {

    const [showEditModal , setShowEditModal] = useState(false);
    const [showReportModal , setShowReportModal] = useState(false);
    const { id } = useParams();
     console.log(id);

     useEffect(() => {
        const url = "http://localhost:8000/api/patient/"+id;
        console.log("Checking id",id);
        Axios.get(url).then(res => {
            console.log(res);
           if(res.status !== 200)
             alert('Wrong id')
         }).catch(err=>{
           alert(err)
         })
    },[]);

    return (
        <div className={classes.container}>
            <div className={classes.up}>
                <div className={classes.common}>
                    <div className={classes.img}>
                        <img src="https://newassets.apollo247.com/images/no_photo.png" alt="" />
                        <div className="name">Name: </div>
                    </div>
                    <div className={classes.info1}>
                        <div className='bldgrp'>Blood Group: B+</div>
                        <div className="age">Age: 60</div>
                        <div className='height'>Height: </div>
                        <div className='weight'>Weight: </div>
                        <div className="gender">Male: M/F/T</div>
                        <div className="number">Phone Number: 32423483289</div>
                        <div className="id">UHID: w234hjgywetw</div>
                        <div className="dob">Date of Birth: 12/31/56</div>
                    </div>
                    {/* <div className='icon-cont'>
                        <FaUserEdit size='2em' className={classes.icon} onClick={null}/>
                    </div> */}
                </div>
                
            </div>
            <div className={classes.below}>
                <div className={classes.appointment}>
                    <div className={classes.heading}>
                        <h1>Appointments</h1>
                    </div>
                    <p>No appointments made</p>
                </div>
                {/* <div className={classes.schedule}>
                    <div className={classes.heading}>
                        <h1>Schedule</h1>
                    </div>
                    <p>Nothing to be seen</p>
                </div> */}
                <div>                    
                <Button
                    className={classes.pastReports , classes.btn}
                    gutterBottom
                    variant="contained"
                    color="primary"
                        onClick={()=>setShowReportModal(true)}
                    >
                    Past Reports
                </Button>
                <ReportModal open={showReportModal} onClose={()=>setShowReportModal(false)}/>
                <Backdrop open={showReportModal} onClose={()=>setShowReportModal(false)}/></div>
            </div>
        </div>
    )
}

export default PatientProfile;