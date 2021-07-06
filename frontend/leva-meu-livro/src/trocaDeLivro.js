import logo from './logo.svg';
import './troca-de-livro.css';

function App() {
  return (
    <main>
      <div class="prosseguir-pedido">PROSSEGUIR COM O PEDIDO:</div>

      <div class="passos">
        <div class="passo-um">
            <h1>Passo 1: CONFIRME SEU ENDEREÇO DE ENTREGA:</h1>
            <input type="checkbox"/>
            <label for=""><strong> Endereço: </strong>Estr. dos Bandeirantes, 6700, Bairro Jacarepaguá. Rio de Janeiro - RJ.CEP: 22780-086</label>
            <span class="btns-endereco">
              <button type="submit" class="btn-editar">
                <span class="material-icons">edit_note</span> editar
              </button>
              <button type="reset" class="btn-apagar">
                <span class="material-icons">delete</span> apagar
              </button>
              <button type="submit" class="btn-incluir">
                <span class="material-icons">add_circle</span> Incluir Novo Endereço
             </button>
            </span>
        </div>
        <div class="passo-dois">
          <h1>Passo 2: FINALIZAR:</h1>
          <h3>Está tudo certo? Agora é só trocar!</h3>
          <button type="submit" class="btn-solicitar-troca">SOLICITAR TROCA</button>
        </div>
      </div>
      <div class="pessoalmente">
        <div class="btn-pessoalmente">
          <input type="checkbox" class="btn-liga-desliga" />
          <label for="">Combinei para receber o livro pessoalmente</label>
        </div>
      </div>
      <section class="container">
      <form action="">
        <fieldset class="cep-checkbox">
          <div class="cep">
           <label for="">Digite seu CEP:</label>
           <input type="text" placeholder="Informe o CEP..."/>
          </div>
          <div class="checkbox">
            <input type="checkbox"/>
            <label for="">Endereço Padrão?</label>
          </div>
        </fieldset>
        <fieldset class="logradouro-numero">
          <div class="logradouro">
            <label for="">Logradouro:</label>
            <input type="text" placeholder="Por exemplo: Rua João da Silva..."/>
          </div>
          <div class="numero">
            <label for="">Número:</label>
            <input type="text" placeholder="Digite aqui..."/>
          </div>
          <div class="checkbox-dois">
            <input type="checkbox"/>
            <label for="">Sem número</label>
          </div>
        </fieldset>
        <fieldset class="complemento-bairro">
          <div class="complemento">
            <label for="">Complemento:</label>
            <input type="text" placeholder="Por exemplo: Apartamento 121 Bloco D..."/>
          </div>
          <div class="bairro">
            <label for="">Bairro:</label>
            <input type="text" placeholder="Por exemplo: Bairro Copacabana..."/>
          </div>
        </fieldset>
        <fieldset class="cidade-estado">
          <div class="cidade">
            <label for="">Cidade:</label>
            <input type="text" placeholder="Digite sua Cidade..."/>
          </div>
          <div class="estado">
            <label for="">Estado:</label>
            <select name="estado" id="" class="estado">
              <option value="" selected disabled>Selecione uma opção...</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
            </select>
          </div>
        </fieldset>
        <div class="btn-salvar-endereco">
          <button type="submit">SALVAR ENDEREÇO</button>
        </div>
      </form>
      </section>
    </main>
  );
}

export default App;