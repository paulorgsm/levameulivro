import { StyledCadastroLivro } from "./StyledCadastroLivro";
import imgIconLivro from "../../assets/img/icon-livro.svg"
import imgPlus from "../../assets/img/imgPlus.svg"
import imgCadLivro from "../../assets/img/imgCadLivro.svg"
import imgEditar from "../../assets/img/editar.svg"
import imgLixeira from "../../assets/img/lixeira.svg"
import imgSetaPag from "../../assets/img/seta-pag.svg"
import api from "../../services/api";
import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function CadastroLivros(){
    const [ISBN, setISBN] = useState("");
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [editora, setEditora] = useState("");
    const [anoPublicacao, setAnoPublicacao] = useState("");
    const [numeroPaginas, setNumeroPaginas] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [idioma, setIdioma] = useState("");
    const [conservacao, setConservacao] = useState("");
    const [materia, setMateria] = useState("");
    const [nivel, setNivel] = useState("");
    const [estadoLivro, setEstadoLivro] = useState("");
    const [imgLivro, setImgLivro] = useState("")

    async function inserirDadosLivros(event) {
        event.preventDefault()
        var data = new FormData();
        const token = sessionStorage.getItem('token')
        data.append('autor', autor)
        data.append('nome_livro', titulo)
        data.append('editora', editora)
        data.append('ano_pub', anoPublicacao)
        data.append('idioma', idioma)
        data.append('num_paginas', numeroPaginas)
        data.append('estado_livro', estadoLivro)
        data.append('conservacao', conservacao)
        data.append('nivel', nivel)
        data.append('isbn', ISBN)
        data.append('sinopse', sinopse)
        data.append('foto_livro', imgLivro)
        data.append('materia', materia)
        await api.post("/livros/", data,
    {
        headers: {authorization: `Bearer ${token}`}
    }
    )
    }

    return (
      <StyledCadastroLivro>
        <main>
          <section className="meuPerfil">
                <div className="meuPerfilGeral">
                      <p>Aeee! Seja Bem-Vindx ao Nosso Clube!</p>
                </div>
              
              <div className="cadLivro">
                  <img src={imgIconLivro} alt="Ícone Livro"/>
                  <h1>Cadastrar Meus Livros</h1>
              </div>
              <div className="botoes">
                  <button type="submit" className="btn-incluir">
                      <img src={imgPlus} alt=""/>
                      Incluir Novo Livro</button>
                  <label htmlFor="organizar"></label>
                  <select name="organizar" id="organizar" className="btn-filtro">
                      <option value="mais-novos" className="btn-org">Mais Novos</option>
                      <option value="mais-antigos" className="btn-org">Mais Antigos</option>
                      <option value="livros-novos" className="btn-org">Livros Novos</option>
                      <option value="livros-usados" className="btn-org">Livros Usados</option>
                  </select>
              </div>
              <table className="cadTabela">
                  <thead>
                      <tr>
                          <th>Imagem:</th>
                          <th>Título:</th>
                          <th>Autor:</th>
                          <th>Ano:</th>
                          <th>Mensagens:</th>
                          <th>Ação:</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                              <img src={imgCadLivro} alt=""/>
                          </td>
                          <td>Harry Potter e a Pedra Filosofal</td>
                          <td>J.K. Rowling</td>
                          <td>2000</td>
                          <td><Link to="/mensageria" className="link-msg">02 para responder</Link></td>
                          <td>
                              <div className="bg-acao">
                                <button>
                                    <img src={imgEditar} alt=""/>
                                    <span>editar</span>
                                </button>

                                <button>
                                    <img src={imgLixeira} alt=""/>
                                    <span>apagar</span>
                                </button>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
              <div className="paginacao">
                  <div className="pag-nav">
                      <img src={imgSetaPag} alt=""/>
                  </div>
                  <div className="pag-nav-numb">
                      <p>1</p>
                  </div>
                  <div className="pag-nav"></div>
              </div>
              <h2>PREENCHA AS INFORMAÇÕES A SEGUIR:</h2>
                <section className="cadInfos">
                  <div className="total">
                    <form className="parte1" onSubmit={(event) => inserirDadosLivros(event)}>
                          <div className="camposform">
                              <div className="isbn">
                                  <label htmlFor="ISBN">Cadastrar ISBN ou ISSN:</label>
                                  <input 
                                  type="text" 
                                  name="ISBN" 
                                  id="ISBN" 
                                  placeholder="Digite o ISBN ou ISSN..."
                                  value = {ISBN}
                                  onChange={(event) => setISBN(event.target.value)}
                                  />
                              </div>
                              <div className="titulo">
                                  <label htmlFor="titulo">Título do Livro:</label>
                                  <input 
                                  type="text" 
                                  name="titulo" 
                                  id="titulo" 
                                  placeholder="Digite o Nome do Livro..."
                                  value = {titulo}
                                  onChange={(event) => setTitulo(event.target.value)}
                                  />
                              </div>
                              <div className="autor">
                                  <label htmlFor="autor">Autor(a) / Autores:</label>
                                  <input 
                                  type="text" 
                                  name="autor" 
                                  id="autor" 
                                  placeholder="Digite os Autores do Livro..."
                                  value = {autor}
                                  onChange={(event) => setAutor(event.target.value)}/>
                              </div>
                              <div className="elDuplo">
                                  <div className="divEnsino">
                                      <label htmlFor="ensino">Nível de Ensino</label>
                                      <select 
                                      name="ensino"
                                      className="nivelEnsino" 
                                      placeholder="Selecione uma opção..."
                                      value ={nivel}
                                      onChange={(event) => setNivel(event.target.value)}>
                                          <option value="ensinofund1">Ensino Fundamental I</option>
                                          <option value="ensinofund2">Ensino Fundamental II</option>
                                          <option value="ensinomedio">Ensino Médio</option>
                                          <option value="ensinosup">Ensino Superior</option>
                                      </select>
                                  </div>
                                  <div className="divCurso">
                                      <label htmlFor="curso">Matéria ou Curso:</label>
                                      <select name="curso" 
                                      className="campoCurso" 
                                      placeholder="Selecione uma opção..."
                                      value ={materia}
                                      onChange={(event) => setMateria(event.target.value)}>
                                          <option value="portugues">Português</option>
                                          <option value="redacao">Redação</option>
                                          <option value="matematica">Matemática</option>
                                          <option value="historia">História</option>
                                          <option value="geografia">Geografia</option>
                                          <option value="quimica">Química</option>
                                          <option value="fisica">Física</option>
                                          <option value="ciencias">Ciências</option>
                                          <option value="artes">Artes</option>
                                          <option value="ingles">Inglês</option>
                                          <option value="admin">Administração</option>
                                          <option value="agronomia">Agronomia</option>
                                          <option value="arqueologia">Arqueologia</option>
                                          <option value="arquitetura">Arquitetura e Urbanismo</option>
                                          <option value="artes">Artes Visuais</option>
                                          <option value="biblio">Biblioteconomia</option>
                                          <option value="biomedicina">Biomedicina</option>
                                          <option value="computacao">Ciência da Computação</option>
                                          <option value="biologicas">Ciências Biológicas</option>
                                          <option value="contabilidade">Contabiliddade</option>
                                          <option value="cinema">Cinema e Audiovisual</option>
                                          <option value="danca">Dança</option>
                                          <option value="design">Design</option>
                                          <option value="direito">Direito</option>
                                          <option value="edufisica">Educação Física</option>
                                          <option value="enfermagem">Enfermagem</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="editora">
                                  <label htmlFor="editora">Editora:</label>
                                  <input 
                                  type="text" 
                                  name="editora" 
                                  id="editora" 
                                  placeholder="Escreva o nome da Editora..."
                                  value = {editora}
                                  onChange={(event) => setEditora(event.target.value)}/>
                              </div>
                              <div className="elDuplo">
                                  <div className="ano">
                                      <label htmlFor="ano">Ano da Publicação:</label>
                                      <input 
                                      type="text" 
                                      name="ano" 
                                      id="ano" 
                                      placeholder="Inclua o Ano.."
                                      value = {anoPublicacao}
                                      onChange={(event) => setAnoPublicacao(event.target.value)}/>
                                  </div>
                                  <div className="paginas">
                                      <label htmlFor="paginas">Nº de Páginas:</label>
                                      <input 
                                      type="text" 
                                      name="paginas" 
                                      id="paginas" 
                                      placeholder="Digite o Nº de Páginas..."
                                      value = {numeroPaginas}
                                      onChange={(event) => setNumeroPaginas(event.target.value)}/>
                                  </div>
                              </div>
                              <div className="elDuplo">
                                      <div className="divEstado">
                                          <label htmlFor="estado">Estado do Livro:</label>
                                          <select
                                           name="estado" 
                                           className="campoEstado" 
                                           placeholder="Selecione uma opção..."
                                           value ={estadoLivro}
                                           onChange={(event) => setEstadoLivro(event.target.value)}>
                                              <option value="novo">Novo</option>
                                              <option value="semi">Semi-Novo</option>
                                              <option value="usado">Usado</option>
                                          </select>
                                      </div>
                                      <div className="divIdioma">
                                          <label htmlFor="idioma">Idioma:</label>
                                          <select name="idioma" 
                                            className="campoIdioma"
                                            placeholder="Selecione uma opção..."
                                            value = {idioma}
                                            onChange={(event) => setIdioma(event.target.value)}>
                                              <option value="portuguesbr">Português Brasil</option>
                                              <option value="ingles">Inglês</option>
                                              <option value="espanhol">Espanhol</option>
                                              <option value="mandarim">Mandarim Chinês</option>
                                              <option value="portuguespt">Português Portugal</option>
                                              <option value="russo">Russo</option>
                                              <option value="japones">Japonês</option>
                                              <option value="alemao">Alemão</option>
                                              <option value="frances">Francês</option>
                                              <option value="coreano">Coreano</option>
                                              <option value="italiano">Italiano</option>
                                              <option value="grego">Grego</option>
                                              <option value="hindi">Hindi</option>
                                          </select>
                                      </div>
                              </div>
                          </div>
                          <div className="parte2">
                              <div className="conservacao">
                                  <label htmlFor="conservacao">Conservação do Livro:</label>
                                  <textarea 
                                  name="conservacao" 
                                  id="conservacao"
                                   value ={conservacao}
                                  onChange={(event) => setConservacao(event.target.value)}
                                  placeholder={"Escreva como está o livro: conte se há rasuras, rabiscos, marcas, se falta alguma página, se está com marca-texto... sinta-se livre para descrever, e seja sincero!"}>
                                  </textarea>
                              </div>
                              <div className="sinopse">
                                  <label htmlFor="sinopse">Sinopse / Descrição do Livro:</label>
                                  <textarea 
                                  name="sinopse" 
                                  id="sinopse"
                                  value ={sinopse}
                                  onChange={(event) => setSinopse(event.target.value)}
                                  placeholder={"Pegue da internet, do que está no livro, ou conte com suas próprias palavras do que se trata este livro..."}
                                  >
                                  </textarea>
                              </div>
                              <div className="enviaImg">
                                  <label>Cadastrar Imagens:</label>
                                  <input 
                                  type="file" 
                                  name="imglivro" 
                                  accept=".png, .jpg, .jpeg" multiple
                                 onChange={(event) => setImgLivro(event.target.files[0])}/>
                              </div>
                              <div>
                                  <button type="submit" className="btn-enviar">SALVAR DADOS</button>
                              </div>
                          </div>
                    </form>
                    </div>
                </section>
          </section>
        </main>
      </StyledCadastroLivro>
    );
};
