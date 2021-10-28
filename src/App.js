import Homepage from "./pages/Homepage";
import FAQ from "./components/faq/FAQ";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import TopSection from "./components/topSection/TopSection";
import Login from "./pages/Login";

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
        {/* <Homepage></Homepage>
        <TopSection />
        <FAQ /> */}
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
