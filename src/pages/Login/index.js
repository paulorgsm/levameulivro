import { StyledLogin } from "./StyledLogin";
import { useState } from "react";
import axios from 'axios';

function Login() {

  const [logEmail, setLogEmail] = useState('');
  const [cadEmail, setCadEmail] = useState('');
  const [nome, setNome] = useState('');
  const [logSenha, setLogSenha] = useState('');
  const [cadSenha, setCadSenha] = useState('');
  const [cadSenha2, setCadSenha2] = useState('');

  function enviaCad (event) {

event.preventDefault();
//req.headers.authorization
//axios.post(url[, data[, config]])

const config = {
    url: 'http://localhost:3000/usuarios/criar-conta',
    data: {
        nome: nome,
        email: cadEmail,
        senha: cadSenha
      }
    }
  
    axios.post(config.url, config.data)

  }


/*   axios.post(`http://localhost:3000/usuarios/criar-conta`, { nome: nome, email: cadEmail, senha: cadSenha }, {headers:'Access-Control-Allow-Origin'})
  .then(res => {
    console.log(res);
    console.log(res.data);
  } */
  


/*   const config = {
    method: 'post',
    url: 'http://localhost:3000/usuarios/criar-conta',
    headers: 'Access-Control-Allow-Origin: *',
    data: {
        nome: nome,
        email: cadEmail,
        senha: cadSenha
    }
}

   axios(config).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
 */

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
              <form action="/login"
              method="POST">
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
                      <label for="lembrar login">Lembrar de mim</label>
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
                <form onSubmit={(event) => enviaCad(event)}>
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
                        <label for="termos do site">Li e concordo com os</label>
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
