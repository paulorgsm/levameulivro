import React, { useEffect, useState } from 'react';
import { StyledTroca } from "./StyledTroca";
import card from "../../assets/img/card1.svg";
import flexaVermelha from "../../assets/img/flexa-vermelha.svg";
import flexaVerde from "../../assets/img/flexa-verde.svg";
import { FaHeart, FaBan, FaUserCircle, FaStar, FaRegEdit, FaTrashAlt, FaPlusCircle, FaRegCheckCircle } from 'react-icons/fa';
import api from '../../services/api';
import { useParams } from "react-router-dom"
import { getToken } from '../../services/auth';

function TrocaDeLivro() {
  //dados do livro
  const [ autor, setAutor ] = useState("");
  const [ nome_livro, setNome_livro ] = useState("");
  const [ editora, setEditora ] = useState("");
  const [ ano_pub, setAno_pub ] = useState("");
  const [ idioma, setIdioma ] = useState("");
  const [ estado_livro , setEstado_livro ] = useState("");
  const [ conservacao, setConservacao ] = useState("");
  const [ isbn, setIsbn ] = useState("");
  const [ foto_livro, setFoto_livro ] = useState("");
  const [ num_paginas, setNum_paginas ] = useState("");
  const { id } = useParams()
  
  
  // dados do dono livro
  const [ usuario, setUsuario ] = useState("")
  const [ cidade, setCidade ] = useState("")
  const [ estado, setEstado ] = useState("")
  const [ foto_usuario, setFoto_usuario] = useState("")

  //endereco do usuario
  const [ meuCep, setMeuCep ] = useState("")
  const [ minhaCidade, setMinhaCidade] = useState("")
  const [ meuEstado, setMeuEstado ] = useState("")
  const [ meuLogradouro, setMeuLogradouro ] = useState("")
  const [ meuNumero, setMeuNumero ] = useState("")
  const [ meuBairro, setMeuBairro ] = useState("")
  const [ meuComplemento, setMeuComplemento ] = useState("")

  async function buscarLivroById(){
    const { data } = await api.get(`/livros/${id}/usuarios/enderecos`)
    setAutor(data.autor);
    setNome_livro(data.nome_livro);
    setIdioma(data.idioma);
    setEditora(data.editora)
    setAno_pub(data.ano_pub)
    setEstado_livro(data.estado_livro);
    setConservacao(data.conservacao);
    setIsbn(data.isbn);
    setFoto_livro(data.foto_livro1);
    setNum_paginas(data.num_paginas);
    setUsuario(data.usuarios.nome)
    setCidade(data.usuarios.enderecos[0]?.cidade)
    setEstado(data.usuarios.enderecos[0]?.estado)
    setFoto_usuario(data.usuarios.foto_usuario)
  }

  async function buscarMeuEndereco(){
    const token = getToken()
    const { data } = await api.get("/usuarios/enderecos", 
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    setMeuCep(data.enderecos[0].cep)
    setMeuNumero(data.enderecos[0].numero)
    setMeuLogradouro(data.enderecos[0].logradouro)
    setMeuBairro(data.enderecos[0].bairro)
    setMinhaCidade(data.enderecos[0].cidade)
    setMeuEstado(data.enderecos[0].estado)
    setMeuComplemento(data.enderecos[0].complemento)
  }

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    buscarLivroById()
    buscarMeuEndereco()
  }, [])

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
            <img src={foto_livro} />
            <div className="icons">
              <button className="salvar"><FaHeart className="heart" /> salvar</button>
              <button className="problema"><FaBan className="ban" /> relatar problema</button>
            </div>
            <p>DISPONIBILIDADE: <span>SIM</span></p>
          </div>
          <div className="dados-pedido">
            <h3>DADOS DO LIVRO:</h3>
            <p><strong>Livro:</strong> {nome_livro} <br />
              <strong>Autores:</strong> {autor}
              <br />
              <strong>Ano de Publicação:</strong> {ano_pub}<br />
              <strong>Editora:</strong> {editora}
              <br />
              <strong>Idioma:</strong> {idioma}
              <br />
              <strong>Nº de Páginas:</strong> {num_paginas}<br />
              <strong>ISBN:</strong> {isbn}<br />
              <strong>Estado do Livro:</strong>{estado_livro}<br />
              <strong>Conservação:</strong> {conservacao}
            </p>
          </div>
          <div className="dados-dono-livro">
            <h3>DE QUEM É O LIVRO?</h3>
            <div className="dados-dono">
              <div className="dono">
                <p><strong>Dono(a):</strong> {usuario} <br />
                  <strong>Cidade:</strong> {cidade}<br />
                  <strong>Estado:</strong> {estado}<br />
                  <strong>Reputação do Dono(a):</strong></p>
              </div>
              <div className="icons-dados">
                <div className="icon-user">
                  { foto_usuario ? (<img src={foto_usuario} className="foto_dono"/>): (<FaUserCircle className="user" />)}
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
              <strong> Endereço: </strong> {meuLogradouro}, {meuNumero}, 
              Bairro: {meuBairro}. {minhaCidade} - {meuEstado}. CEP: {meuCep}
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
