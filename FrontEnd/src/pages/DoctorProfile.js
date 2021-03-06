import React, { useState, useEffect } from "react";
import classes from "./DoctorProfile.module.css";
import { Button } from "@material-ui/core";
import BookAppointmentModal from "../components/modal/BookAppointmentModal/BookAppointmentModal";
import Backdrop from "../components/modal/Backdrop/Backdrop";
import { useParams } from "react-router-dom";
import Axios from "axios";
import NavbarPatient from "../components/navbar/NavbarPatient";

const DoctorProfile = () => {
	const [showBookAppointmentModal, setShowBookAppointmentModal] = useState(false);
    const [fname, setFname] = useState("");
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		const url = "http://localhost:8000/api/doctor/" + id;
		console.log("Checking id", id);
		Axios.get(url)
			.then(res => {
                setFname(res.data.doctorData.fname);
				console.log(res);
				if (res.status !== 200) alert("Wrong id");
			})
			.catch(err => {
				alert(err);
			});
	}, []);
	return (
		<div>
			<NavbarPatient />
			<div className={classes.main}>
				<div className={classes.mainimg}></div>
				<div className={classes.below}>
					<div className={classes.first}>
						<img
							className={classes.img}
							src="https://imgr.search.brave.com/hRz5-gSXl6Ex4HaOodVrM0p5m782bZof6FRWdv7Pr6M/fit/474/225/ce/1/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/LW5HeXFUNUF3RVM4/b3FwMzQ0ejRnSGFI/YSZwaWQ9QXBp"
							alt=""
						/>
						<h3>{fname}</h3>
						<div className="profession">Profession</div>
						<div className={classes.attributes}>
							<div className="attr">lorem</div>
							<div className="attr">lorem</div>
							<div className="attr">lorem</div>
						</div>
						<div className="text">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt suscipit reiciendis
							inventore, eum velit repudiandae explicabo odio ipsam a eveniet nemo voluptas necessitatibus.
							Unde modi ducimus vel ex sed voluptatibus. Maxime at consectetur earum iste. Dolorem consequatur
							itaque sunt tempora?
						</div>
					</div>
					<div className={classes.second}>
						<div className={classes.treatments}>
							<div className={classes.heading}>
								<p>Treatments</p>
							</div>
							<div className={classes.items}>
								<li className="item">
									<p>Lorem, ipsum.</p>
								</li>
								<li className="item">
									<p>Lorem, ipsum.</p>
								</li>
								<li className="item">
									<p>Lorem, ipsum.</p>
								</li>
								<li className="item">
									<p>Lorem, ipsum.</p>
								</li>
								<li className="item">
									<p>Lorem, ipsum.</p>
								</li>
								<li className="item">
									<p>Lorem, ipsum.</p>
								</li>
							</div>
						</div>
						<div className={classes.feedback}>
							<div className={classes.heading}>
								<p>Feedback</p>
							</div>
						</div>
					</div>
					<div className={classes.third}>
						<Button
							className={(classes.apointmentButton, classes.btn)}
							gutterBottom
							variant="contained"
							color="primary"
							onClick={() => setShowBookAppointmentModal(true)}
						>
							Book an Appointment
						</Button>
						<BookAppointmentModal
							open={showBookAppointmentModal}
							onClose={() => setShowBookAppointmentModal(false)}
						/>
						<Backdrop open={showBookAppointmentModal} onClose={() => setShowBookAppointmentModal(false)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoctorProfile;
