import { StyledLogin } from "./StyledLogin";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api"
import { login } from "../../services/auth"

function Login() {
  const [nome, setNome] = useState('');
  const [logEmail, setLogEmail] = useState('');
  const [logSenha, setLogSenha] = useState('');
  const [cadEmail, setCadEmail] = useState('');
  const [cadSenha, setCadSenha] = useState('');
  const [cadSenha2, setCadSenha2] = useState('');
  const history = useHistory();

  async function EnviaCad (event) {
    event.preventDefault();
    const { data, status } = await api.post('/usuarios/criar-conta', {nome: nome, email: cadEmail, senha: cadSenha})
    if (status == 200) {
      login(data)
      history.push("/cadastro")
      window.location.reload();
    }
    
  }

  async function Login (event){
    event.preventDefault();
    const { data, status } = await api.post('/usuarios/login', {email: logEmail, senha: logSenha})
    if (status == 200) {
      login(data)
      history.push("/meu-perfil")
      window.location.reload();
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
