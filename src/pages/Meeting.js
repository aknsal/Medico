import React, { useState ,useEffect } from 'react';
import Calendar from 'react-calendar';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import 'react-calendar/dist/Calendar.css';
import {useParams} from "react-router-dom";
import Axios from 'axios'


export default function Meeting() {

    const [slotRadio, setRadio] = React.useState('Slot 1');
    const [doctorEmail, setDoctorEmail] = React.useState("");
    const [patientName, setPatientName] = React.useState("");
    const [patientLName , setPatientLName] = React.useState("");
    const [patientEmail, setPatientEmail] = React.useState("");
    const { doctorid, patientid } = useParams();


     useEffect(() => {
        const urlp = "http://localhost:8000/api/patient/"+patientid;
        // const url="";
        Axios.get(urlp).then(res => {
            console.log(res.data.data.fname);
            setPatientEmail(res.data.data.email)
            setPatientName(res.data.data.fname)
            setPatientLName(res.data.data.lname)
           if(res.status !== 200)
             alert('Wrong id of patient')
         }).catch(err=>{
           alert(err)
         })
         const urld = "http://localhost:8000/api/doctor/"+doctorid;
         Axios.get(urld).then(res => {
            setDoctorEmail(res.data.doctorData.email)
           if(res.status !== 200)
             alert('Wrong id of doctor')
         }).catch(err=>{
           alert(err)
         })
    },[]);

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
    console.log("2021-11-01 "+slotRadio.substring(0,8));
  };
  const [value, onChange] = useState(new Date());
  function handleClick(e) {
    //   onChange();
      console.log(e.target);
  }

  function handleButtonClick(){
    const url="https://webexapis.com/v1/meetings";
    Axios.post(url, {
        "enabledAutoRecordMeeting": false,
  "allowAnyUserToBeCoHost": false,
  "enabledJoinBeforeHost": false,
  "enableConnectAudioBeforeHost": false,
  "excludePassword": false,
  "publicMeeting": false,
  "enableAutomaticLock": false,
  "allowFirstUserToBeCoHost": false,
  "allowAuthenticatedDevices": false,
  "timezone": "Asia/Kolkata",
  "sendEmail": true,
  "title": "New Appointment "+slotRadio.substring(16,22),
  "start": "2021-11-01 "+slotRadio.substring(0,8),
  "end": "2021-11-01 "+slotRadio.substring(8,16),
  "invitees": [
    {
        "email": patientEmail,
        "displayName": patientName,
        "coHost": false
    },
],
  "hostEmail": doctorEmail
    },{
        headers: {
            Authorization: "Bearer " + "YzZjZGM3NzEtMDdjZi00NzA1LWFjYjUtYzVhYTY1NjE5ZWFlOWI4MjMxMjQtNjVh_P0A1_caaa8419-6ffd-4ddb-8fb5-d89f059408c4"
          }
    }).then(res => {
      if(res.status !== 200)
        alert('Something is wrong')
      else {
          alert("Meeting created check your email")
      }
    }).catch(err=>{
      alert(err)
    })
  }

  

  return (
    <div>
      <Calendar
        onChange={handleClick}
        value={value}
      />
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={slotRadio} onChange={handleRadioChange}>
        <FormControlLabel value="09:00:0010:00:00Slot 1" disabled control={<Radio />} label="Slot 1 (9am - 11 am)" />
        <FormControlLabel value="10:00:0011:00:00Slot 2" control={<Radio />} label="Slot 2 (10am - 11 am)" />
        <FormControlLabel value="11:00:0012:00:00Slot 3" control={<Radio />} label="Slot 3 (11am - 12 pm)" />
        <FormControlLabel value="16:00:0017:00:00Slot 4" control={<Radio />} label="Slot 4 (16pm - 17 pm)" />
        <FormControlLabel value="17:00:0018:00:00Slot 5" control={<Radio />} label="Slot 5 (17pm - 18 pm)" />
        
      </RadioGroup>
    </FormControl>
      <Button onClick={handleButtonClick} >New Meet </Button>
    </div>
  );
}