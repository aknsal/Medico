import React , { useState , useEffect } from 'react'
import classes from './DoctorDashboard.module.css'
import { Button } from "@material-ui/core";
import Modal from '../components/modal/doctormodal/Modal' 
import Backdrop from '../components/modal/Backdrop/Backdrop'
import NavbarDoctor from '../components/navbar/NavbarDoctor';
import Axios from 'axios'
import { useParams } from "react-router-dom";

const DoctorDashboard = () => {

    const [showModal , setShowModal] = useState(false);

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [gender,setGender] = useState("");
    const [phone,setPhone] = useState("");
    const [speciality,setSpeciality] = useState("");
    const [text,setText] = useState("");

    const { id } = useParams();
     console.log(id);

     useEffect(() => {
        // const url = "http://localhost:8000/api/patient/"+id;
        const url="";
        console.log("Checking id",id);
        Axios.get(url).then(res => {
            console.log(res.data.data.fname);
            setFname(res.data.data.fname)
            setLname(res.data.data.lname)
            setGender(res.data.data.gender)
            setPhone(res.data.data.phone)
            setSpeciality(res.data.data.speciality)
            setText(res.data.data.text)
           if(res.status !== 200)
             alert('Wrong id')
         }).catch(err=>{
           alert(err)
         })
    },[]);

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
                            <div className="name">First Name: {fname}</div>
                            <div className="name">Last Name: {lname}</div>
                            <div className="speciality">Speciality: {speciality}</div>
                            <div className="gender">Gender: {gender}</div>
                            <div className="phn">Phone Number: {phone}</div>
                        </div>
                    </div>
                    <div className="text">
                        {text}
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
                    <Modal 
                        open={showModal} 
                        onClose={()=>setShowModal(false)}
                        fname={fname} 
                        setFname={setFname} 
                        lname={lname} 
                        setLname={setLname}
                        gender={gender} 
                        setGender={setGender}
                        phone={phone} 
                        setPhone={setPhone}
                        speciality={speciality}
                        setSpeciality={setSpeciality}
                        text={text} 
                        setText={setText}
                    />
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
