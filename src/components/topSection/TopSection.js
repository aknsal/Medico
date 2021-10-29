import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import doctorLaptop from "../../images/doctorLaptop.jpg";
import React, { useState }  from "react";
import ProfessionalCardContainer from "../professionCard/ProfessionalCardContainer";
import Grid from "@material-ui/core/Grid";
import BookAppointmentModal from '../modal/BookAppointmentModal/BookAppointmentModal';
import Backdrop from '../modal/Backdrop/Backdrop';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#a7daf2",
    borderRadius: 2,
    padding: 30,
  },
  root: {
    maxWidth: 1000,
  },
  topSectionHeading: {
    ...theme.typography.poppins,
    fontSize: 70,
    fontWeight: 600,
    color: "#034e70",

    ["@media (max-width:500px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: 50,
      fontWeight: 500,
      color: "#034e70",
    },
  },
  subtext: {
    ...theme.typography.roboto,
    fontSize: 20,
    color: "#557280",
    ["@media (max-width:500px)"]: {
      // eslint-disable-line no-useless-computed-key
      textAlign: "left",
    },
  },
  apointmentButton: {
    fontSize: 30,
    margin: 20,
    ["@media (max-width:500px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: 20,
      fontWeight: 300,
    },
  },
  doctorLaptopImg: {
    borderRadius: 10,
    margin: 20,
    ["@media (max-width:850px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },
  buttonImageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    flexWrap: "wrap",
  },
  minicontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: 600,
  },
  tagline: {
    ...theme.typography.poppins,
    fontSize: 40,
    fontWeight: 400,
    color: "#034e70",
    margin: 20,
    ["@media (max-width:500px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: 30,
      fontWeight: 300,
      color: "#034e70",
    },
  },
}));

export default function TopSection() {
   const [showBookAppointmentModal , setShowBookAppointmentModal] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography gutterBottom className={classes.topSectionHeading}>
        Get Professional Consultation
      </Typography>

      <Typography gutterBottom className={classes.subtext}>
        24/7 Video Consultations. Private Consultations + Audio Call
      </Typography>
      <Typography gutterBottom className={classes.subtext}>
        With Certified Professionals
      </Typography>

      <div className={classes.buttonImageContainer}>
        <div className={classes.minicontainer}>
          <Typography gutterBottom className={classes.tagline}>
            A Heritage in Care Reputation in Excellence
          </Typography>
          <Button
            className={classes.apointmentButton}
            gutterBottom
            variant="contained"
            color="primary"
             onClick={()=>setShowBookAppointmentModal(true)}
          >
            Book an Appointment
          </Button>
          <BookAppointmentModal open={showBookAppointmentModal} onClose={()=>setShowBookAppointmentModal(false)}/>
                <Backdrop open={showBookAppointmentModal} onClose={()=>setShowBookAppointmentModal(false)}/>
        </div>
        <img src={doctorLaptop} className={classes.doctorLaptopImg} />
      </div>
      <Typography gutterBottom className={classes.subtext}>
        Are You Looking For:
      </Typography>
      <ProfessionalCardContainer />
    </div>
  );
}
