import logo from './logo.svg';
import './login.css';

function Login() {
  return (
 
    <main>
        <div>
            <h2 className ="entrar-no-time">Pronto para entrar no time? Então...</h2>
        </div>
        <section className ="form">
            <div>
                <div className ="login">
                    <h1>Faça Seu Login</h1>
                    <h2>se já tiver se cadastro antes</h2>
                </div>

                <div>
                    <form action="/login" method="POST">
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail..."/>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha..."/>
                        <div className ="opcoes">
                            <div>
                                <div className ="inputQuadrado">
                                    <input  type="checkbox" name="lembrar login"/>
                                </div>
                                <div>
                                    <label for="lembrar login">Lembrar de mim</label>
                                </div>
                                <a href="#">Esqueci minha senha</a>
                            </div>
                        </div>
                        <div className ="entrar">
                            <button type="submit">ENTRAR</button>
                        </div>
                    </form>
                </div>
                <div className ="ou">
                    <h2>ou</h2>
                </div>
                <div>
                <div className ="cadastro">
                    <h1>Crie Sua Conta</h1>
                    <h2>se ainda não tiver cadastro</h2>
                </div> 
                <div>
                <form action="/login" method="POST">
                    <input type="text" name="nome" id="nome" placeholder="Digite seu primeiro nome..."/>
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail..."/>
                    <input type="password" name="senha" id="senha" placeholder="Agora crie uma senha..."/>
                    <input type="password" name="senha" id="senha" placeholder="Confirme sua senha..."/>
                        <div className ="opcoes">
                            <div className ="opcoes-termos">
                                <div>
                                    <input className ="inputQuadrado" type="checkbox" name="termos do site"/>
                                    <label for="termos do site">Li e concordo com os</label>
                                    <a href="#">Termos do Site</a>
                                </div>
                            </div>
                        </div>
                <div className ="cadastrar">
                    <button type="submit">CADASTRAR</button>
                </div>
            </form>
                </div>
                </div>
            </div>    
        </section>
    </main>
  );
}
export default Login;