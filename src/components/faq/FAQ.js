import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F6F7FB"
  },
  root: {
    maxWidth: 1000,
    padding: 20,
    marginTop: 20,
  },
  faqHeading: {
    ...theme.typography.roboto,
    fontWeight: 400,
  },
}));

export default function FAQ() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Typography gutterBottom className={classes.faqHeading} variant="h3">
          FAQ's
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" className={classes.qHeading}>
            What is an online doctor consultation or online medical consultation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            When you speak to a doctor about your health concerns through an audio/video/ chat, it is known as an online doctor consultation or online medical consultation. This is a good alternative for times when you cannot visit a doctor physically at the clinic or hospital. An online doctor consultation works the same way as a physical consultation where you get a prescription after the consultation is complete. Some of the benefits of an online medical consultation at Apollo 24/7 are that you can consult a doctor at the convenience of your home and can order the prescribed medicines by using the ‘Order Medicines’ option. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" className={classes.heading}>
            How do I consult a doctor online now?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

            
              You can book an online consultation either on the website
              <ul>
                <li>
                  Click on the ‘Book An Appointment’ button on the homepage of the website/app, select a specialty or type the name of the doctor directly. Once you select a doctor, you can click on the “Consult Now’ button to start the online consultation.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" className={classes.heading}>
            Where is my prescription for the online doctor consultation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The prescription will be received by the doctor either in the form of image or virtually.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" className={classes.heading}>
            What is the minimum fee for online doctor consultation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The fees depends from doctor to doctor but in general it won't be that high.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" className={classes.heading}>
            Is the prescription generated by the doctor during online consultation valid?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes. The prescription generated during the online consultation is as good as a physical prescription and will be valid for 6 months from the date of issue (as per government regulations). 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" className={classes.heading}>
            When should you consult a specialist doctor?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            If your health concern is complex and your physician feels that it needs the attention of a specialised doctor, you will be referred to one. You can also consult a specialist doctor if you aren’t satisfied with the treatment/results of your primary doctor, you are struggling with a condition that is not improving, you have been diagnosed with a complex chronic condition, etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" className={classes.heading}>
              How do I book an online appointment with a specialist doctor in advance for tomorrow or later?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            To book an online appointment with a specialist doctor, you can select the speciality from the displayed list or type in the name of the speciality. Once you select the speciality, you will be shown a list of doctors and their availability. If you wish to book an online appointment for a later time, you can choose the doctors that have ‘Consult Tomorrow’ or ‘Consult in 2 days’, ‘Consult in 3 days,’ etc. You can also choose the ‘Schedule for Later’ option after selecting the doctor and clicking on the ‘Consult Now’ button. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" className={classes.heading}>
            For how long can I speak to the doctor?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It will be dependent on the respective doctor. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" className={classes.heading}>
            Can I share prescriptions/test reports during my consultation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. You have an option to share your prescriptions and test reports with the doctor during an online consultation. You can do so by clicking on the plus sign (+) present on the bottom left of the screen. 
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
