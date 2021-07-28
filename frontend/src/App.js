import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";
import { getName, getPhoto, isAuthenticated, logout } from "./services/auth";

function App() {
  const oneHour = 6000 * 6000
  const nome = getName()
  const foto = getPhoto()
  function handleSession() {
    logout()
    window.alert("Sessão expirada, por favor logue novamente")
    window.location.reload();
  }

  if(isAuthenticated()) {
    setTimeout(handleSession, oneHour)
  }

  return (
    <BrowserRouter>
        <Header title={nome ? nome: null} foto={foto ? foto: null}/>
        <Routes />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
