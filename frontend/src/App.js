import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
<<<<<<< HEAD
=======
import { StyledGlobal } from "./StyledGlobal";
>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Header />
      <Routes />
      <Footer />
=======
      <StyledGlobal>
        <Header />
        <Routes />
        <Footer />
      </StyledGlobal>
>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66
    </Router>
  );
}

export default App;
