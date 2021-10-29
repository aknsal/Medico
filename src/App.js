import Homepage from "./pages/Homepage";
import FAQ from "./components/faq/FAQ";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import TopSection from "./components/topSection/TopSection";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import Search from './pages/SearchDoctors'
import DoctorProfile from "./pages/DoctorProfile";
import PatientDashboard from "./pages/PatientDashboard";
import Footer from './components/footer/footer'

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
				<DoctorProfile/>
			</div>
		</ThemeProvider>
	);
}

export default App;