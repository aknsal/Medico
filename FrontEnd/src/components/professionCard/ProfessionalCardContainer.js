import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProfessionalCard from "./ProfessionCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} lg={3}>
          <ProfessionalCard title="Doctor" body="Book an Appointment" />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <ProfessionalCard title="Consult" body="With Top Doctors" />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <ProfessionalCard title="Pharmacy" body="Medicine Products" />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <ProfessionalCard title="Diagnostics" body="Tests & Checkups" />
        </Grid>
      </Grid>
    </div>
  );
}
