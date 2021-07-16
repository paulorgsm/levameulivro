import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Busca from "../pages/Busca";
import Mensageria from "../pages/Mensageria";
import Livros from "../pages/Produtos";
import Trocas from "../pages/Trocas";
import Pedidos from "../pages/Pedidos";
import Saldo from "../pages/MeuSaldo";
import MeusDados from "../pages/MeusDados";
<<<<<<< HEAD
=======
import MeuPerfil from "../pages/MeuPerfil";
import CadastroLivros from "../pages/CadastroLivros";
>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/busca" component={Busca} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/login" component={Login} />
      <Route path="/mensageria" component={Mensageria} />
      <Route path="/livros" component={Livros} />
      <Route path="/trocas" component={Trocas} />
      <Route path="/pedidos" component={Pedidos} />
      <Route path="/saldo" component={Saldo} />
      <Route path="/meus-dados" component={MeusDados} />
<<<<<<< HEAD
=======
      <Route path="/meu-perfil" component={MeuPerfil} />
      <Route path="/cadastrar-livro" component={CadastroLivros} />
>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66
    </Switch>
  );
}
