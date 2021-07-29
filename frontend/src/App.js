import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";
import { getName, getPhoto} from "./services/auth";

function App() {
  const nome = getName()
  const foto = getPhoto()
  
  return (
    <BrowserRouter>
        <Header title={nome} foto={foto}/>
        <Routes />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
