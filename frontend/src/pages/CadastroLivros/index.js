import { StyledCadastroLivro } from "./StyledCadastroLivro";
import imgIconLivro from "../../assets/img/icon-livro.svg"
import imgPlus from "../../assets/img/imgPlus.svg"
import api from "../../services/api";
import { useEffect, useState } from "react";
import InfoMeuLivro from "../../components/InfoMeuLivro";
import Paginacao from "../../components/Paginacao/paginacao";


export default function CadastroLivros(){
    const [ ISBN, setISBN ] = useState("");
    const [ titulo, setTitulo ] = useState("");
    const [ autor, setAutor ] = useState("");
    const [ editora, setEditora ] = useState("");
    const [ anoPublicacao, setAnoPublicacao ] = useState("");
    const [ numeroPaginas, setNumeroPaginas ] = useState("");
    const [ sinopse, setSinopse ] = useState("");
    const [ idioma, setIdioma ] = useState("ingles");
    const [ conservacao, setConservacao ] = useState("");
    const [ materia, setMateria ] = useState("computacao");
    const [ nivel, setNivel ] = useState("ensinosup");
    const [ estadoLivro, setEstadoLivro]  = useState("novo");
    const [ imgLivro, setImgLivro ] = useState("");
    const [ livros, setLivros ] = useState([]);
    const [ mustShow, setMustShow ] = useState(true);
    const [ page, setPage ] = useState(1);

    async function buscarMeuLivro (){
        const token = sessionStorage.getItem('token')
        const { data } = await api.get(`/usuarios/livros`, 
            { 
                headers: { authorization: `Bearer ${token}` },
                params: { page, count: 2}
            },
        )
        setLivros( data.livros )
    }

    async function inserirDadosLivros(event) {
        event.preventDefault()
        const token = sessionStorage.getItem('token')
        var data = new FormData();
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
        await api.post("/livros/", data, { headers: { authorization: `Bearer ${token}` } })
        onClickHide()
        await buscarMeuLivro()
    }

    function onClickHide() {
        setMustShow(!mustShow);
    }

    async function onDeleteLivro() {
        await buscarMeuLivro()
    }

    useEffect(async () => {
        await buscarMeuLivro()
    }, [page])

    return (
      <StyledCadastroLivro>
        <main>
          <section className="meuPerfil">
                <div className="meuPerfilGeral">
                      <p>Aeee! Seja Bem-Vindx ao Nosso Clube!</p>
                </div>
              <div className="cadLivro">
                  <img src={imgIconLivro} alt="??cone Livro"/>
                  <h1>Cadastrar Meus Livros</h1>
              </div>
              <div className="botoes">
                  <button type="submit" className="btn-incluir" onClick={onClickHide}>
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
              { livros.map((livro) => (
                <InfoMeuLivro
                    id = { livro.id }
                    imagem={ livro.foto_livro1 } 
                    titulo={ livro.nome_livro } 
                    autor={ livro.autor }
                    ano={ livro.ano_pub }
                    onDeleteLivro = {onDeleteLivro}
                />
              ))}
              <Paginacao
                page = {page}
                onPageChange={(newPage) => setPage(newPage)}
              />
              {!mustShow && (
                  <>
                  <h2>PREENCHA AS INFORMA????ES A SEGUIR:</h2>
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
                                    <label htmlFor="titulo">T??tulo do Livro:</label>
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
                                        <label htmlFor="ensino">N??vel de Ensino</label>
                                        <select 
                                        name="ensino"
                                        className="nivelEnsino" 
                                        placeholder="Selecione uma op????o..."
                                        value ={nivel}
                                        onChange={(event) => setNivel(event.target.value)}>
                                            <option value="ensinofund1">Ensino Fundamental I</option>
                                            <option value="ensinofund2">Ensino Fundamental II</option>
                                            <option value="ensinomedio">Ensino M??dio</option>
                                            <option value="ensinosup">Ensino Superior</option>
                                        </select>
                                    </div>
                                    <div className="divCurso">
                                        <label htmlFor="curso">Mat??ria ou Curso:</label>
                                        <select name="curso" 
                                        className="campoCurso" 
                                        placeholder="Selecione uma op????o..."
                                        value ={materia}
                                        onChange={(event) => setMateria(event.target.value)}>
                                            <option value="portugues">Portugu??s</option>
                                            <option value="redacao">Reda????o</option>
                                            <option value="matematica">Matem??tica</option>
                                            <option value="historia">Hist??ria</option>
                                            <option value="geografia">Geografia</option>
                                            <option value="quimica">Qu??mica</option>
                                            <option value="fisica">F??sica</option>
                                            <option value="ciencias">Ci??ncias</option>
                                            <option value="artes">Artes</option>
                                            <option value="ingles">Ingl??s</option>
                                            <option value="admin">Administra????o</option>
                                            <option value="agronomia">Agronomia</option>
                                            <option value="arqueologia">Arqueologia</option>
                                            <option value="arquitetura">Arquitetura e Urbanismo</option>
                                            <option value="artes">Artes Visuais</option>
                                            <option value="biblio">Biblioteconomia</option>
                                            <option value="biomedicina">Biomedicina</option>
                                            <option value="computacao">Ci??ncia da Computa????o</option>
                                            <option value="biologicas">Ci??ncias Biol??gicas</option>
                                            <option value="contabilidade">Contabiliddade</option>
                                            <option value="cinema">Cinema e Audiovisual</option>
                                            <option value="danca">Dan??a</option>
                                            <option value="design">Design</option>
                                            <option value="direito">Direito</option>
                                            <option value="edufisica">Educa????o F??sica</option>
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
                                        <label htmlFor="ano">Ano da Publica????o:</label>
                                        <input 
                                        type="text" 
                                        name="ano" 
                                        id="ano" 
                                        placeholder="Inclua o Ano.."
                                        value = {anoPublicacao}
                                        onChange={(event) => setAnoPublicacao(event.target.value)}/>
                                    </div>
                                    <div className="paginas">
                                        <label htmlFor="paginas">N?? de P??ginas:</label>
                                        <input 
                                        type="text" 
                                        name="paginas" 
                                        id="paginas" 
                                        placeholder="Digite o N?? de P??ginas..."
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
                                             placeholder="Selecione uma op????o..."
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
                                              placeholder="Selecione uma op????o..."
                                              value = {idioma}
                                              onChange={(event) => setIdioma(event.target.value)}>
                                                <option value="portuguesbr">Portugu??s Brasil</option>
                                                <option value="ingles">Ingl??s</option>
                                                <option value="espanhol">Espanhol</option>
                                                <option value="mandarim">Mandarim Chin??s</option>
                                                <option value="portuguespt">Portugu??s Portugal</option>
                                                <option value="russo">Russo</option>
                                                <option value="japones">Japon??s</option>
                                                <option value="alemao">Alem??o</option>
                                                <option value="frances">Franc??s</option>
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
                                    <label htmlFor="conservacao">Conserva????o do Livro:</label>
                                    <textarea 
                                    name="conservacao" 
                                    id="conservacao"
                                     value ={conservacao}
                                    onChange={(event) => setConservacao(event.target.value)}
                                    placeholder={"Escreva como est?? o livro: conte se h?? rasuras, rabiscos, marcas, se falta alguma p??gina, se est?? com marca-texto... sinta-se livre para descrever, e seja sincero!"}>
                                    </textarea>
                                </div>
                                <div className="sinopse">
                                    <label htmlFor="sinopse">Sinopse / Descri????o do Livro:</label>
                                    <textarea 
                                    name="sinopse" 
                                    id="sinopse"
                                    value ={sinopse}
                                    onChange={(event) => setSinopse(event.target.value)}
                                    placeholder={"Pegue da internet, do que est?? no livro, ou conte com suas pr??prias palavras do que se trata este livro..."}
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
                  </>
              )}
          </section>
        </main>
      </StyledCadastroLivro>
    );
};
