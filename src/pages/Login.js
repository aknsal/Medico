import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@mui/material/Radio';
import Axios from 'axios'
import { useHistory } from 'react-router-dom';

function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    // maxWidth: 1000,
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login({setPatient, setDoctor}) {

  let history = useHistory();

  const classes = useStyles();

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  
  const [user , setUser] = React.useState({
    username: "",
    password: ""
  });
  
  let name , value;
  function handleInput(e) {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
  }
  
  // console.log(user);
  const url = "http://localhost:8000/api/patientlogin";
  function handleSubmit(e) {
    e.preventDefault();

    const username = user.username;
    const password = user.password;
    console.log(username , password);

    Axios.post(url, {
      username: username,
      password: password,
    }).then(res => {
      if(res.status !== 200)
        alert('Wrong Username or Password!!!')
      else {
        history.push('/patientdashboard')
      }
    }).catch(err=>{
      
      alert("Invalid Username or password        " + err)
    })

  }

  return (

  
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <div className={classes.container}> */}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            
          <Radio
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
            label="Doctor"
            name="Doctor"
            autoComplete="Doctor"
            onClick={()=>{
              setDoctor(true);
              setPatient(false);
            }}
          />Doctor
          <Radio
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
            label="Patient"
            onClick={()=>{
              setPatient(true);
              setDoctor(false);
            }}
          />Patient

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              value={user.username}
              onChange={handleInput}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={user.password}
              onChange={handleInput}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
