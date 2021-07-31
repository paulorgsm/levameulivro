import React, { useState } from 'react';
import { StyledTroca } from "./StyledTroca";
import card from "../../assets/img/card1.svg";
import flexaVermelha from "../../assets/img/flexa-vermelha.svg";
import flexaVerde from "../../assets/img/flexa-verde.svg";
import { FaHeart, FaBan, FaUserCircle, FaStar, FaRegEdit, FaTrashAlt, FaPlusCircle, FaRegCheckCircle } from 'react-icons/fa';

function TrocaDeLivro() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (

    <StyledTroca>
      <main>
        <div className="header-page">
          <div>
            <img src={flexaVermelha} />
          </div>
          <div className="confirmar-informacoes">
            <h2>Oba! Chegou a hora que você esperava!</h2>
            <h3>Confirme todas as informações para prosseguir com a troca.</h3>
          </div>
          <div>
            <img src={flexaVerde} />
          </div>
        </div>
        <div className="resumo-pedido">
          <h2>RESUMO DO SEU PEDIDO:</h2>
        </div>
        <div className="pedido">
          <div className="img">
            <img src={card} />
            <div className="icons">
              <button className="salvar"><FaHeart className="heart" /> salvar</button>
              <button className="problema"><FaBan className="ban" /> relatar problema</button>
            </div>
            <p>DISPONIBILIDADE: <span>SIM</span></p>
          </div>
          <div className="dados-pedido">
            <h3>DADOS DO LIVRO:</h3>
            <p><strong>Livro:</strong> Mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltis porris <br />
              <strong>Autores:</strong> Mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltis porris
              <br />
              <strong>Ano de Publicação:</strong> 2020 <br />
              <strong>Editora:</strong> Mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltis porris
              <br />
              <strong>Idioma:</strong> Mussum Ipsum, cacilds vidis litro abertis. Pra lá, depois divoltis porris
              <br />
              <strong>Nº de Páginas:</strong> 300 <br />
              <strong>ISBN:</strong> 109283092183982 <br />
              <strong>Estado do Livro:</strong> Usado <br />
              <strong>Conservação:</strong> Há marcas de lápis, mesmo após as páginas estarem apagadas. Mas o livro
              está completo, não falta nenhuma página.
            </p>
          </div>
          <div className="dados-dono-livro">
            <h3>DE QUEM É O LIVRO?</h3>
            <div className="dados-dono">
              <div className="dono">
                <p><strong>Dono(a):</strong> Mussum da Silva <br />
                  <strong>Cidade:</strong> São Paulo<br />
                  <strong>Estado:</strong> SP<br />
                  <strong>Reputação do Dono(a):</strong></p>
              </div>
              <div className="icons-dados">
                <div className="icon-user">
                  <FaUserCircle className="user" />
                </div>
                <div className="icon-star">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
              </div>
            </div>
            <div className="saldo">
              <table>
                <tr>
                  <th>SALDO DE SUA CONTA:</th>
                </tr>
                <tr>
                  <td>No momento você possui <span>100000000</span> pontos <br />
                    para troca.</td>
                </tr>
              </table>
            </div>
            <div className="button-pontos">
              <button className="obter-pontos">PRECISO OBTER PONTOS</button>
              <button className="comprar-pontos">QUERO COMPRAR PONTOS</button>
            </div>
          </div>
        </div>
        <div className="prosseguir-pedido">PROSSEGUIR COM O PEDIDO:</div>
        <div className="passos">
          <div className="passo-um">
            <h1>Passo 1: CONFIRME SEU ENDEREÇO DE ENTREGA:</h1>
            <input type="checkbox" id="endereco-padrao" name="endereco-padrao" checked />
            <label for="endereco-padrao">
              <strong> Endereço: </strong>Estr. dos Bandeirantes, 6700, Bairro
              Jacarepaguá. Rio de Janeiro - RJ. CEP: 22780-086
            </label>



            <span className="btns-endereco">
              <button type="submit" className="btn-editar"><FaRegEdit /> editar </button>
              <button type="reset" className="btn-apagar"><FaTrashAlt /> apagar </button>
              <button type="submit" className="btn-incluir" onClick={handleClick} ><FaPlusCircle size="1.2em" />
              <span>Incluir Novo Endereço</span>
              </button>
            </span>
          </div>
          <div className="passo-dois">
            <h1>Passo 2: FINALIZAR:</h1>
            <span>Está tudo certo? Agora é só trocar!</span>
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

        <section className="container" className={click ? 'container' : 'container hide'}>
          <form action="">
            <fieldset className="cep-checkbox">
              <div className="cep">
                <label for="">Digite seu CEP:</label>
                <input type="text" placeholder="Informe o CEP..." />
              </div>
              <div className="checkbox">
                <input type="checkbox" checked />
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
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RR">Roraima</option>
                  <option value="RO">Rondônia</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
            </fieldset>
            <div className="btn-salvar-endereco">
              <button type="submit">SALVAR ENDEREÇO</button>
            </div>
          </form>
        </section>

        <div className="modal hide">
          <div className="modal-orders exchange-completed">
            <FaRegCheckCircle className="check" size="7em" />
            <h3>Seu pedido de troca foi feito!</h3>
            <p>Agora, vamos aguardar a validação do lado do dono(a) do livro.</p>
            <p>Ele tem até 3 dias corridos para confirmação.</p>
          </div>
        </div>
      </main>
    </StyledTroca >
  );
}

export default TrocaDeLivro;
