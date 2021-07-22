import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  const nome = sessionStorage.getItem('nome')
  return (
    <Router>
        <Header title={nome ? nome: null}/>
        <Routes />
        <Footer />
    </Router>
  );
}

export default App;
