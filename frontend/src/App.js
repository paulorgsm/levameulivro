import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";
import { getName } from "./services/auth";

function App() {
  const nome = getName()
  return (
    <BrowserRouter>
        <Header title={nome ? nome: null}/>
        <Routes />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
