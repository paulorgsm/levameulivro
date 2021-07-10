import { StyledTroca } from "./StyledTroca";

function TrocaDeLivro() {
  return (
    <StyledTroca>
      <main>
        <div className="prosseguir-pedido">PROSSEGUIR COM O PEDIDO:</div>

        <div className="passos">
          <div className="passo-um">
            <h1>Passo 1: CONFIRME SEU ENDEREÇO DE ENTREGA:</h1>
            <input type="checkbox" />
            <label for="">
              <strong> Endereço: </strong>Estr. dos Bandeirantes, 6700, Bairro
              Jacarepaguá. Rio de Janeiro - RJ.CEP: 22780-086
            </label>
            <span className="btns-endereco">
              <button type="submit" className="btn-editar">
                <span className="material-icons">edit_note</span> editar
              </button>
              <button type="reset" className="btn-apagar">
                <span className="material-icons">delete</span> apagar
              </button>
              <button type="submit" className="btn-incluir">
                <span className="material-icons">add_circle</span> Incluir Novo
                Endereço
              </button>
            </span>
          </div>
          <div className="passo-dois">
            <h1>Passo 2: FINALIZAR:</h1>
            <h3>Está tudo certo? Agora é só trocar!</h3>
            <button type="submit" className="btn-solicitar-troca">
              SOLICITAR TROCA
            </button>
          </div>
        </div>
        <div className="pessoalmente">
          <div className="btn-pessoalmente">
            <input type="checkbox" className="btn-liga-desliga" />
            <label for="">Combinei para receber o livro pessoalmente</label>
          </div>
        </div>
        <section className="container">
          <form action="">
            <fieldset className="cep-checkbox">
              <div className="cep">
                <label for="">Digite seu CEP:</label>
                <input type="text" placeholder="Informe o CEP..." />
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <label for="">Endereço Padrão?</label>
              </div>
            </fieldset>
            <fieldset className="logradouro-numero">
              <div className="logradouro">
                <label for="">Logradouro:</label>
                <input
                  type="text"
                  placeholder="Por exemplo: Rua João da Silva..."
                />
              </div>
              <div className="numero">
                <label for="">Número:</label>
                <input type="text" placeholder="Digite aqui..." />
              </div>
              <div className="checkbox-dois">
                <input type="checkbox" />
                <label for="">Sem número</label>
              </div>
            </fieldset>
            <fieldset className="complemento-bairro">
              <div className="complemento">
                <label for="">Complemento:</label>
                <input
                  type="text"
                  placeholder="Por exemplo: Apartamento 121 Bloco D..."
                />
              </div>
              <div className="bairro">
                <label for="">Bairro:</label>
                <input
                  type="text"
                  placeholder="Por exemplo: Bairro Copacabana..."
                />
              </div>
            </fieldset>
            <fieldset className="cidade-estado">
              <div className="cidade">
                <label for="">Cidade:</label>
                <input type="text" placeholder="Digite sua Cidade..." />
              </div>
              <div className="estado">
                <label for="">Estado:</label>
                <select name="estado" id="" className="estado">
                  <option value="" selected disabled>
                    Selecione uma opção...
                  </option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                </select>
              </div>
            </fieldset>
            <div className="btn-salvar-endereco">
              <button type="submit">SALVAR ENDEREÇO</button>
            </div>
          </form>
        </section>
      </main>
    </StyledTroca>
  );
}

export default TrocaDeLivro;
