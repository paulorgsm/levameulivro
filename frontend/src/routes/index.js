import { Route, Switch } from "react-router-dom";

import Busca from "../pages/Busca";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Mensageria from "../pages/Mensageria";
import MeuSaldo from "../pages/MeuSaldo";
import Pedidos from "../pages/Pedidos";
import Produtos from "../pages/Produtos";
import Trocas from "../pages/Trocas";

export default function Routes() {
  return (
    <Switch>
      <Route path="/busca" component={Busca} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/mensageria" component={Mensageria} />
      <Route path="/meu-saldo" component={MeuSaldo} />
      <Route path="/pedidos" component={Pedidos} />
      <Route path="/livros" component={Produtos} />
      <Route path="/trocas" component={Trocas} />
    </Switch>
  );
}
