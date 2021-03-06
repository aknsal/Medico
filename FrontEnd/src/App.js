import React from "react";
import Homepage from "./pages/Homepage";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import DoctorProfile from "./pages/DoctorProfile";
import PatientDashboard from "./pages/PatientDashboard";
import PatientProfile from "./pages/PatientProfile";
import Meeting from "./pages/Meeting";
import DoctorSearch from './pages/SearchDoctors'
import DoctorDashboard from "./pages/DoctorDashboard";
import { Switch, Route } from "react-router-dom";
import SearchDoctors from "./pages/SearchDoctors";

const theme = createTheme({
	typography: {
		roboto: {
			fontFamily: "Roboto",
		},
		poppins: {
			fontFamily: "Poppins",
		},
	},
});

function App() {
	const [doctor, setDoctor] = React.useState(true);
	const [patient, setPatient] = React.useState(false);

	return (
		<>
			{/* <Navbar patient={patient} doctor={doctor}></Navbar> */}
			<ThemeProvider theme={theme}>
				<Switch>
					{/* <Route path="/" component={Home}></Route> */}
					<Route exact path="/" component={Homepage}></Route>
					<Route path="/login">
						<Login patient={patient} doctor={doctor} setDoctor={setDoctor} setPatient={setPatient}></Login>
					</Route>
					<Route path="/signup" component={Signup}></Route>
					<Route path="/doctorprofile/:id" component={DoctorProfile}></Route>
					<Route path="/doctorsearch" component={DoctorSearch}></Route>
					<Route path="/patientprofile/:id" component={PatientProfile}></Route>
					<Route path="/doctordashboard/:id" component={DoctorDashboard}></Route>
					<Route path="/patientdashboard/:id" component={PatientDashboard}></Route>
					<Route path="/newmeet/:doctorid/:patientid" component={Meeting}></Route>
					{/* <Route component={Error} /> */}
				</Switch>
				{/* {console.log(doctor , patient)} */}
			</ThemeProvider>
			<Footer></Footer>
		</>
	);
}

export default App;
