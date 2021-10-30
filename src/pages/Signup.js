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
import GenderRadio from "./GenderRadio";
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Medico
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
  radio:{
      margin:30,
  },
  nameContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      flexWrap:"wrap"
  },
  detailsContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    flexWrap:"wrap"
  },
  detailsContainer1:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
  }
}));

export default function Login() {
  const classes = useStyles();

  const history = useHistory();

  const [user,setUser] = React.useState({
    fname: "",
    lname: "",
    age: "",
    username: "",
    email: "",
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
  const url = "";

  function handleSubmit(e) {
    e.preventDefault();

    const fname = user.fname;
    const lname = user.lname;
    const age = user.age;
    const username = user.username;
    const email = user.email;
    const password = user.password;
    console.log(fname , lname, age, username, email, password);

    Axios.post(url, {
      fname: fname,
      lname: lname,
      age: age,
      username: username,
      email: email,
      password: password
    }).then(res => {
      if(res.status != 200)
        alert('Wrong Username or Password!!!')
      else {
        history.push('/login')
      }
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
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>

              <div className={classes.nameContainer}>
              <TextField
              variant="outlined"
              className={classes.textField}
              margin="normal"
              required
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="fname"
              autoFocus
              value={user.fname}
              onChange={handleInput}
            />
            

            <TextField
              variant="outlined"
              margin="normal"
              required
              id="lname"
              label="Last Name"
              name="lname"
              autoComplete="lname"
              value={user.lname}
              onChange={handleInput}
            />
              </div>


            <div className={classes.detailsContainer1}>

                
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
              value={user.age}
              onChange={handleInput}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={user.username}
              onChange={handleInput}
            />
                 </div>
                 
                 

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={user.email}
              onChange={handleInput}
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
              autoComplete="current-password"
              value={user.password}
              onChange={handleInput}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Already Have an account? Login Now
                </Link>
              </Grid>
              
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      {/* </div> */}
    </Grid>
  );
}
