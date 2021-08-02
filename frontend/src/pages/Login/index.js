import { StyledLogin } from "./StyledLogin";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api"
import { login } from "../../services/auth"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

function Login() {
  const [nome, setNome] = useState('');
  const [logEmail, setLogEmail] = useState('');
  const [logSenha, setLogSenha] = useState('');
  const [cadEmail, setCadEmail] = useState('');
  const [cadSenha, setCadSenha] = useState('');
  const [cadSenha2, setCadSenha2] = useState('');
  const history = useHistory();
  const MySwal = withReactContent(Swal);

  async function EnviaCad (event) {
    event.preventDefault();
    const response = await api.post('/usuarios/criar-conta', {nome: nome, email: cadEmail, senha: cadSenha})
    if(response?.status == null){
      MySwal.fire({
        icon: "error",
        title: '<span style="font-family: sans-serif;"> Ops, deu ruim... </span>',
        text: 'A conta já existe.',
        backdrop: "rgba(66, 133, 244, 0.45)",
      })
    } else {
      login(response.data)
      history.push("/cadastro")
      window.location.reload()
    }
  }

  async function Login (event){
    event.preventDefault();
    const { data, status } = await api.post('/usuarios/login', { email: logEmail, senha: logSenha })
    if(status == null){
      MySwal.fire({
        icon: "error",
        title: '<span style="font-family: sans-serif;"> Ops, deu ruim... </span>',
        text: 'Ocorreu um erro. Verifique os dados.',
        backdrop: "rgba(66, 133, 244, 0.45)",
      })
    } else if (status != 200) {
      MySwal.fire({
        icon: "error",
        title: '<span style="font-family: sans-serif;"> Ops, deu ruim... </span>',
        text: 'Ocorreu um erro. Verifique os dados.',
        backdrop: "rgba(66, 133, 244, 0.45)",
      })
    } else {
      login(data)
      history.push("/meu-perfil")
      MySwal.fire({
        icon: "success",
        title: '<span style="font-family: sans-serif;"> Aí sim! </span>',
        text: 'Bem-vindo de volta!',
        backdrop: "rgba(66, 133, 244, 0.45)",
      })
      window.location.reload()
    }
  }
  
  return (
    <StyledLogin>
      <main>
        <div>
          <h2 className="entrar-no-time">
            Pronto para entrar no time? Então...
          </h2>
        </div>
        <section className="form">
            <div>
            <div className="login">
              <h1>Faça Seu Login</h1>
              <h2>se já tiver se cadastro antes</h2>
            </div>
              <form onSubmit ={(event)=> Login(event)}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Digite seu e-mail..."
                  value={logEmail}
                  onChange={(e) => setLogEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Digite sua senha..."
                  value={logSenha}
                  onChange={(e) => setLogSenha(e.target.value)}
                />
                <div className="opcoes">
                  <div className="lembrarsenha">
                      <input id="checkbox" type="checkbox" name="lembrar login" />
                    <div>
                      <label htmlFor="lembrar login">Lembrar de mim</label>
                      <a href="#">Esqueci minha senha</a>
                    </div>
                  </div>
                </div>
                <div className="entrar">
                  <button type="submit">ENTRAR</button>
                </div>
              </form>
            </div>
            <div className="ou">
              <h2>ou</h2>
            </div>
            <div>
              <div className="cadastro">
                <h1>Crie Sua Conta</h1>
                <h2>se ainda não tiver cadastro</h2>
              </div>
              <div>
                <form onSubmit={(event) => EnviaCad(event)}>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Digite seu primeiro nome..."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu e-mail..."
                    value={cadEmail}
                    onChange={(e) => setCadEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Agora crie uma senha..."
                    value={cadSenha}
                    onChange={(e) => setCadSenha(e.target.value)}
                  />
                  <input
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Confirme sua senha..."
                    value={cadSenha2}
                    onChange={(e) => setCadSenha2(e.target.value)}
                  />
                  <div className="opcoes">
                    <div className="opcoes-termos">
                      <div className="termosite">
                        <input
                          className="inputQuadrado"
                          type="checkbox"
                          name="termos do site"
                        />
                        <label htmlFor="termos do site">Li e concordo com os</label>
                        <a href="#">Termos do Site</a>
                      </div>
                    </div>
                  </div>
                  <div className="cadastrar">
                    <button type="submit">CADASTRAR</button>
                  </div>
                </form>
              </div>
            </div>
        </section>
      </main>
    </StyledLogin>
  );
}
export default Login;
