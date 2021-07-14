import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { StyledGlobal } from "./StyledGlobal";

function App() {
  return (
    <Router>
      <StyledGlobal>
        <Header />
        <Routes />
        <Footer />
      </StyledGlobal>
    </Router>
  );
}

export default App;
