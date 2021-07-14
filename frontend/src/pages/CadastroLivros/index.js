import { StyledCadastroLivro } from "./StyledCadastroLivro";
import imgIconLivro from "../../assets/img/icon-livro.svg"
import imgPlus from "../../assets/img/imgPlus.svg"
import imgCadLivro from "../../assets/img/imgCadLivro.svg"
import imgEditar from "../../assets/img/editar.svg"
import imgLixeira from "../../assets/img/lixeira.svg"
import imgSetaPag from "../../assets/img/seta-pag.svg"
//import {Link} from "react-router-dom"


export default function CadastroLivros(){
    return (
      <StyledCadastroLivro>
        <main>
          <section className="meuPerfil">
            <div className="meuPerfilGeral">
              <p>Aeee! Seja Bem-Vindx ao Nosso Clube!</p>
            </div>

            <div className="cadLivro">
              <img src={imgIconLivro} alt="Ícone Livro" />
              <h1>Cadastrar Meus Livros</h1>
            </div>

            <div className="botoes">
              <button type="submit" className="btn-incluir">
                <img src={imgPlus} alt="Incluir Novo Livro" />
                Incluir Novo Livro
              </button>

              <label for="organizar"></label>
              <select name="organizar" id="organizar" className="btn-filtro">
                <option value="mais-novos" className="btn-org">
                  Mais Novos
                </option>
                <option value="mais-antigos" className="btn-org">
                  Mais Antigos
                </option>
                <option value="livros-novos" className="btn-org">
                  Livros Novos
                </option>
                <option value="livros-usados" className="btn-org">
                  Livros Usados
                </option>
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
                    <img src={imgCadLivro} alt="" />
                  </td>
                  <td>Harry Potter e a Pedra Filosofal</td>
                  <td>J.K. Rowling</td>
                  <td>2000</td>
                  <td>
                    <a className="link-msg" href="#">
                      02 para responder
                    </a>
                  </td>
                  <td>
                    <div className="bg-acao">
                      <img src={imgEditar} alt="" />
                      <p>editar</p>
                      <img src={imgLixeira} alt="" />
                      <p>apagar</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="paginacao">
              <div className="pag-nav">
                <img src={imgSetaPag} alt="" />
              </div>
              <div className="pag-nav-numb">
                <p>1</p>
              </div>
              <div className="pag-nav"></div>
            </div>

            <section className="cadInfos">
              <div className="total">
                    <form className="parte1" action="" method="post">
                    <h2>PREENCHA AS INFORMAÇÕES A SEGUIR:</h2>

                    <div className="camposform">
                        <div className="isbn">
                        <label for="ISBN">Cadastrar ISBN ou ISSN:</label>
                        <input
                            type="text"
                            name="ISBN"
                            id="ISBN"
                            placeholder="Digite o ISBN ou ISSN..."
                        />
                        </div>

                        <div className="titulo">
                        <label for="titulo">Título do Livro:</label>
                        <input
                            type="text"
                            name="titulo"
                            id="titulo"
                            placeholder="Digite o Nome do Livro..."
                        />
                        </div>

                        <div className="autor">
                        <label for="autor">Autor(a) / Autores:</label>
                        <input
                            type="text"
                            name="autor"
                            id="autor"
                            placeholder="Digite os Autores do Livro..."
                        />
                        </div>

                        <div className="elDuplo">
                        <div className="divEnsino">
                            <label for="ensino">Nível de Ensino</label>
                            <select
                            name="ensino"
                            className="nivelEnsino"
                            placeholder="Selecione uma opção..."
                            >
                            <option value="Exemplo 1">Exemplo 1</option>
                            <option value="Exemplo 2">Exemplo 2</option>
                            <option value="Exemplo 3">Exemplo 3</option>
                            </select>
                        </div>

                        <div className="divCurso">
                            <label for="curso">Matéria ou Curso:</label>
                            <select
                            name="curso"
                            className="campoCurso"
                            placeholder="Selecione uma opção..."
                            >
                            <option value="Exemplo 1">Exemplo 1</option>
                            <option value="Exemplo 2">Exemplo 2</option>
                            <option value="Exemplo 3">Exemplo 3</option>
                            </select>
                        </div>
                        </div>

                        <div className="editora">
                        <label for="editora">Editora:</label>
                        <input
                            type="text"
                            name="editora"
                            id="editora"
                            placeholder="Escreva o nome da Editora..."
                        />
                        </div>

                        <div className="elDuplo">
                        <div className="ano">
                            <label for="ano">Ano da Publicação:</label>
                            <input
                            type="text"
                            name="ano"
                            id="ano"
                            placeholder="Inclua o Ano.."
                            />
                        </div>

                        <div className="paginas">
                            <label for="paginas">Nº de Páginas:</label>
                            <input
                            type="text"
                            name="paginas"
                            id="paginas"
                            placeholder="Digite o Nº de Páginas..."
                            />
                        </div>
                        </div>

                        <div className="elDuplo">
                        <div className="divEstado">
                            <label for="estado">Estado do Livro:</label>
                            <select
                            name="estado"
                            className="campoEstado"
                            placeholder="Selecione uma opção..."
                            >
                            <option value="Exemplo 1">Exemplo 1</option>
                            <option value="Exemplo 2">Exemplo 2</option>
                            <option value="Exemplo 3">Exemplo 3</option>
                            </select>
                        </div>

                        <div className="divIdioma">
                            <label for="idioma">Idioma:</label>
                            <select
                            name="idioma"
                            className="campoIdioma"
                            placeholder="Selecione uma opção..."
                            >
                            <option value="Exemplo 1">Exemplo 1</option>
                            <option value="Exemplo 2">Exemplo 2</option>
                            <option value="Exemplo 3">Exemplo 3</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    <div className="parte2">
                        <div className="conservacao">
                        <label for="conservacao">Conservação do Livro:</label>
                        <textarea name="conservacao" id="conservacao">
                            {" "}
                            Escreva como está o livro: conte se há rasuras,
                            rabiscos, marcas, se falta alguma página, se está com
                            marca-texto... sinta-se livre para descrever, e seja
                            sincero!
                        </textarea>
                        </div>

                        <div className="sinopse">
                        <label for="sinopse">Sinopse / Descrição do Livro:</label>
                        <textarea name="sinopse" id="sinopse">
                            Pegue da internet, do que está no livro, ou conte com
                            suas próprias palavras do que se trata este livro...
                        </textarea>
                        </div>

                            <div className="enviaImg">
                            <label>Cadastrar Imagens:</label>
                            <input
                                type="file"
                                name="imglivro"
                                accept=".png, .jpg, .jpeg"
                                multiple
                            />
                            </div>

                            <div>
                            <button type="submit" className="btn-enviar">
                                SALVAR DADOS
                            </button>
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

