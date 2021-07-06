import logo from './logo.svg';
import './meusDados.css';

function App() {
  return (
  <main>
      <section class="secao">
        <div class="paragrafo">
          <p>Aeee! Seja Bem-Vindx ao Nosso Clube!</p>
        </div>
        <div class="meusDados">
          <img src="../assets/img/meusDados.svg" alt=""/>
          <h2>Meus Dados</h2>                    
        </div>
        <div class="meusDadosPrincipal">
          <div class="forms">
            <div>
              <p>ALTERAR DADOS PESSOAIS</p>
            </div>
            <form>
              <div class="agregadorInput">
                <div class= "agregadorLabelInput">
                  <label for="primeiroNome">Primeiro Nome</label>
                  <input type="text" name="primeiroNome" id="primeiroNome" placeholder="Digite seu nome"/>
                </div>
                <div class="agregadorLabelInput">
                  <label for="sobrenome">Sobrenome</label>
                  <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite seu sobrenome"/>
                </div> 
              </div> 
              <div class="agregadorInput">
                  <div class="agregadorLabelInput">
                    <label for="email">E-mail</label>
                    <input type="text" name="email" id="email" placeholder="levameulivro@gmail.com"/>
                  </div>  
                  <div class="agregadorLabelInput">
                   <label for="sobrenome">senha</label>
                   <input type="text" name="sobrenome" id="sobrenome" placeholder="********"/>
                  </div> 
              </div> 
              <div class="agregadorInput">
                <div class="agregadorLabelInput">
                    <label for="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf" placeholder="Digite seu cpf"/>
                 </div>
                 <div class="agregadorLabelInput">
                    <label for="contato">Celular/telefone</label>
                    <input type="text" name="contato" id="contato"placeholder="Não esqueça do DDD"/>
                 </div>
              </div>
              <div class="agregadorInput">
                <div class="agregadorLabelInput">
                 <label for="nascimento">Data de nascimento</label>
                 <input type="text" name="nascimento" id="contato"placeholder="DD/MM/AAAA"/>
                </div>
                <div class="agregadorLabelInput">
                  <label for="genero">Gênero</label>
                  <select name="genero" id="genero" placeholder="Escolha uma opção"> <option value="fem">Mulher cisgênero</option>
                  <option value="masc">Homen cisgênero</option>
                  <option value="mulherTrans">Mulher Transgênero</option>
                  <option value="homenTrans">Homen Transgênero</option>
                  <option value="naoResponder">Prefiro não responder</option>
                  <option value="outros">Outros</option></select>
                </div>                         
              </div> 
              <div class="carregarFoto">
                <img src="../assets/img/carregarFoto.svg" alt=""/>
                <div>
                  <p>Incluir/Mudar minha foto</p>
                </div>
              </div>
              <div>
                <button class="button1" type="submit" >SALVAR DADOS</button>
              </div>    
            </form>
            <div>
              <div class="forms padding">
                <p>ALTERAR INCLUIR ENDEREÇO:</p>
                <div class="retangulo">
                  <div class="check">
                    <input  type="checkbox"/>
                  </div>
                  <div class="endereco">
                    <p><strong>Endereço:</strong> Estr. dos Bandeirantes, 6700, </p>
                    <p > Bairro Jacarepaguá. Rio de Janeiro - RJ. </p>
                    <p> CEP: 22780-086 </p>
                    <span class="btns-endereco">
                      <button type="submit" class="btn-editar">
                        <span class="material-icons">delete</span>
                        <span>apagar</span>
                      </button>
                    </span>
                  </div>
                </div>
                <button type="submit" class="btn-incluir">
                  <span class="material-icons material-icons1">add_circle  </span> 
                  <span>Incluir Novo Endereço</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
   </main>
  );
}

export default App;