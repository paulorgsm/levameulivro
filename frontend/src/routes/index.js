import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Busca from "../pages/Busca";
import Mensageria from "../pages/Mensageria";
import Produtos from "../pages/Produtos";
import Trocas from "../pages/Trocas";
import Pedidos from "../pages/Pedidos";
import Saldo from "../pages/MeuSaldo";
import MeusDados from "../pages/MeusDados";
import MeuPerfil from "../pages/MeuPerfil";
import CadastroLivros from "../pages/CadastroLivros";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


function Routes() {
  return (
    <Switch>
      <PublicRoute path="/busca" component={Busca} />
      <PublicRoute path="/cadastro" component={Cadastro} />
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/mensageria" component={Mensageria} />
      <PublicRoute path="/livros" component={Produtos} />
      <PublicRoute path="/trocas" component={Trocas} /> {/* Página Quebrada */}
      <PrivateRoute path="/meus-pedidos" component={Pedidos} /> {/* Página Quebrada */}
      <PrivateRoute path="/meu-saldo" component={Saldo} />
      <PrivateRoute path="/meus-dados" component={MeusDados} /> {/* Precisa melhorar */}
      <PrivateRoute path="/meu-perfil" component={MeuPerfil} />
      <PrivateRoute path="/cadastrar-livro" component={CadastroLivros} />
      <PublicRoute path="/" component={Home} />
    </Switch>
  );
}

export default Routes;