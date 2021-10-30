import Homepage from "./pages/Homepage";
import FAQ from "./components/faq/FAQ";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import TopSection from "./components/topSection/TopSection";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import DoctorProfile from "./pages/DoctorProfile";
import PatientDashboard from "./pages/PatientDashboard";
import PatientProfile from "./pages/PatientProfile";
import DoctorDashboard from './pages/DoctorDashboard'

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
	return (
		<ThemeProvider theme={theme}>
			<div>
				<PatientDashboard></PatientDashboard>
				<DoctorDashboard/>
			</div>
		</ThemeProvider>
	);
}

export default App;
