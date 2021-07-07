import logo from './logo.svg';
import './cadastro.css';

function App() {
  return (
    <main>
        <section className ="cadChamada">
            <div className ="cadastroChamada">
                <p>Aeee! Seja Bem-Vindx ao Nosso Clube!</p>
            </div>

            <div className ="cads">
                <div className ="finalizeCad">
                    <h2>Finalize seu Cadastro</h2>
                    <p>se não quiser terminar agora, tudo bem, mas será</p>
                    <p> obrigatório na hora de pegar um livro...</p>
                    <button type="submit">TERMINAR AGORA</button>
                </div>
                <div className ="finalizeDepois">
                    <h2>Prefiro fazer isso depois...</h2>
                    <button type="submit">VOLTAR PARA HOME</button>
                </div>
            </div>
        </section>
        <section className ="formsCadastros">
            <h2>Finalizando Cadastro</h2>
            <div className ="forms">
                <div>
                    <p> Passo 1: INCLUIR DADOS PESSOAIS</p> 
                </div>
                <div className ="form1">
                <form action="/cadastro" method="POST">
                    <div className ="agregadorInput">
                        <div className = "agregadorLabelInput">
                            <label for="primeiroNome">Primeiro Nome</label>
                            <input type="text" name="primeiroNome" id="primeiroNome" placeholder="Digite seu nome"/>
                        </div>
                        <div className ="agregadorLabelInput">
                            <label for="sobrenome">Sobrenome</label>
                            <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite seu sobrenome"/>
                        </div> 
                    </div>
                    <div className ="agregadorLabelInput">
                        <label for="email">E-mail</label>
                        <input type="text" name="email"  id="email" placeholder="levameulivro@gmail.com"/>
                    </div>
                    <div className ="agregadorInput">
                        <div className ="agregadorLabelInput">
                            <label for="cpf">CPF</label>
                            <input type="text" name="cpf" id="cpf" placeholder="Digite seu cpf"/>
                        </div>
                        <div className ="agregadorLabelInput">
                            <label for="contato">Celular/telefone</label>
                            <input type="text" name="contato" id="contato"placeholder="Não esqueça do DDD"/>
                        </div>  
                    </div>
                    <div className ="agregadorInput">
                        <div className ="agregadorLabelInput">
                            <label for="nascimento">Data de nascimento</label>
                            <input type="text" name="nascimento" id="contato"placeholder="DD/MM/AAAA"/>
                        </div>
                        <div className ="agregadorLabelInput">
                            <label for="genero">Gênero</label>
                            <select name="genero" id="genero" placeholder="Escolha uma opção"> <option value="fem">Mulher cisgênero</option>
                            <option value="masc">Homen cisgênero</option>
                            <option value="mulherTrans">Mulher Transgênero</option>
                            <option value="homenTrans">Homen Transgênero</option>
                            <option value="naoResponder">Prefiro não responder</option>
                            <option value="outros">Outros</option></select>
                        </div>                         
                    </div>  
                    <div>
                        <button type="submit" >SALVAR DADOS</button>
                    </div>
                </form>
                </div>
                <div className ="form2"> 
                    <div>
                        <p> Passo 1: INCLUIR ENDEREÇO</p> 
                    </div>
                    <form action="/cadastro" method="POST">
                        <div className ="agregadorLabelInput">
                            <label for="cep">Digite seu CEP</label>
                            <input type="text" name="cep" id="cep" placeholder="Digite seu CEP"/>
                        </div>
                        <div className ="agregadorLabelInput">
                            <label for="logradouro">Logradouro</label>
                            <input type="text" name="logradouro" id="logradouro" placeholder="Por exemplo: Rua João Da Silva"/>
                        </div> 
                        <div className ="agregadorLabelInput">
                            <label for="num">Número</label>
                            <input type="text" name="num" id="num" placeholder="Digite aqui"/>
                        </div> 
                        <div className ="agregadorLabelInput">
                            <label for="bairro">Bairro</label>
                            <input type="text" name="bairro" id="bairro" placeholder="Por exemplo: Bairro Copacabana"/>
                        </div>  
                        <div className ="agregadorLabelInput">
                            <label for="complemento">Complemento</label>
                            <input type="text" name="complemento" id="complemento" placeholder="Por exemplo: Apartamento 121 Bloco D"/>
                        </div> 
                        <div className ="agregadorInput">
                            <div className ="agregadorLabelInput">
                                <label for="cidade">Cidade</label>
                                <input type="text" name="cidade" id="cidade" placeholder="Digite sua cidade"/>
                            </div>
                            <div className ="agregadorLabelInput">
                                <label for="estados">Estados</label>
                                <input  type="text" name="estados" id="estados"placeholder="Digite seu Estado"/>
                            </div>
                        </div>
                        <div>
                            <button type="submit" >SALVAR ENDEREÇO</button>
                        </div>
                    </form>
                </div>
            </div>
       </section>
    </main>
  );
}

export default App;
