import React, { useState, useEffect } from "react";
import classes from "./PatientDashboard.module.css";
// import { FaUserEdit } from 'react-icons/fa'
import { Button } from "@material-ui/core";
import EditModal from "../components/modal/EditModal/EditModal";
import ReportModal from "../components/modal/ReportModal/ReportModal";
import Backdrop from "../components/modal/Backdrop/Backdrop";
import NavbarPatient from "../components/navbar/NavbarPatient";
import { useParams } from "react-router-dom";
import Axios from "axios";

const PatientDashboard = () => {
	const [showEditModal, setShowEditModal] = useState(false);
	const [showReportModal, setShowReportModal] = useState(false);
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [bloodGroup, setBloodGroup] = useState("");
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [gender, setGender] = useState("");
	const [age, setAge] = useState("");
	const [phone, setPhone] = useState("");

	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		// const url = "http://localhost:8000/api/patient/"+id;
		const url = "";
		console.log("Checking id", id);
		Axios.get(url)
			.then(res => {
				console.log(res.data.data.fname);
				setFname(res.data.data.fname);
				setLname(res.data.data.lname);
				setBloodGroup(res.data.data.bloodGroup);
				setAge(res.data.data.age);
				setHeight(res.data.data.height);
				setWeight(res.data.data.weight);
				setGender(res.data.data.gender);
				setPhone(res.data.data.phone);
				if (res.status !== 200) alert("Wrong id");
			})
			.catch(err => {
				alert(err);
			});
	}, []);

	return (
		<div>
			<NavbarPatient />
			<div className={classes.container}>
				<div className={classes.up}>
					<div className={classes.common}>
						<div className={classes.img}>
							<img src="https://newassets.apollo247.com/images/no_photo.png" alt="" />
							<div className="fname">{fname}</div>
							<div className="lname">{lname}</div>
						</div>
						<div className={classes.info1}>
							<div className="bldgrp">Blood Group: {bloodGroup}</div>
							<div className="age">Age: {age}</div>
							<div className="height">Height: {height}</div>
							<div className="weight">Weight: {weight}</div>
							<div className="gender">Gender: {gender}</div>
							<div className="number">Phone Number: {phone}</div>
							<div className="id">UHID: {id}</div>
						</div>
						{/* <div className='icon-cont'>
                    <FaUserEdit size='2em' className={classes.icon} onClick={null}/>
                </div> */}
					</div>
					<Button
						className={(classes.apointmentButton, classes.btn)}
						gutterBottom
						variant="contained"
						color="primary"
						onClick={() => setShowEditModal(true)}
					>
						Edit
					</Button>
					<EditModal
						open={showEditModal}
						onClose={() => setShowEditModal(false)}
						fname={fname}
						setFname={setFname}
						lname={lname}
						setLname={setLname}
						bloodGroup={bloodGroup}
						setBloodGroup={setBloodGroup}
						age={age}
						setAge={setAge}
						height={height}
						setHeight={setHeight}
						weight={weight}
						setWeight={setWeight}
						gender={gender}
						setGender={setGender}
						phone={phone}
						setPhone={setPhone}
						id={id}
					/>
					<Backdrop open={showEditModal} onClose={() => setShowEditModal(false)} />
				</div>
				<div className={classes.below}>
					<div className={classes.appointment}>
						<div className={classes.heading}>
							<h1>Recent Appointments</h1>
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
							className={(classes.pastReports, classes.btn)}
							gutterBottom
							variant="contained"
							color="primary"
							onClick={() => setShowReportModal(true)}
						>
							Past Reports
						</Button>
						<ReportModal open={showReportModal} onClose={() => setShowReportModal(false)} />
						<Backdrop open={showReportModal} onClose={() => setShowReportModal(false)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PatientDashboard;
