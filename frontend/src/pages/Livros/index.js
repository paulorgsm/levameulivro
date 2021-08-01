import livroProduto from "../../assets/img/livroProduto.svg";
import imgMostruarioLivro from "../../assets/img/imgMostruarioLivro.svg";
import coracao from "../../assets/img/coracao.svg";
import problema from "../../assets/img/problema.svg";
import login1 from "../../assets/img/login.svg";
import estrela from "../../assets/img/estrela.svg";
import perguntas from "../../assets/img/perguntas.svg";
import { StyledProdutos } from "./StyledProdutos";
import { useParams } from "react-router-dom"
import { useState , useEffect} from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";



function Livros() {
  const [ materia, setMateria ] = useState("");
  const [ autor, setAutor ] = useState("");
  const [ nome_livro, setNome_livro ] = useState("");
  const [ editora, setEditora ] = useState("");
  const [ ano_pub, setAno_pub ] = useState("");
  const [ idioma, setIdioma ] = useState("");
  const [ estado_livro , setEstado_livro ] = useState("");
  const [ conservacao, setConservacao ] = useState("");
  const [ isbn, setIsbn ] = useState("");
  const [ nivel, setNivel ] = useState("");
  const [ sinopse, setSinopse ] = useState("");
  const [ foto_livro, setFoto_livro ] = useState("");
  const [ num_paginas, setNum_paginas ] = useState("");
  const [ pergunta, setPergunta ]= useState("");
  const [ usuario, setUsuario ] = useState("")
  const [ cidade, setCidade ] = useState("")
  const [ estado, setEstado ] = useState("")
  const [ foto_usuario, setFoto_usuario] = useState("")
  const { id } = useParams();
 
  async function BuscarLivroById(){
    const { data } = await api.get(`/livros/${id}/usuarios/enderecos`)
    setAutor(data.autor);
    setNome_livro(data.nome_livro);
    setIdioma(data.idioma);
    setEditora(data.editora)
    setAno_pub(data.ano_pub)
    setEstado_livro(data.estado_livro);
    setConservacao(data.conservacao);
    setIsbn(data.isbn);
    setNivel(data.nivel);
    setSinopse(data.sinopse);
    setFoto_livro(data.foto_livro1);
    setMateria(data.materia);
    setNum_paginas(data.num_paginas);
    setPergunta(data.pergunta)
    setUsuario(data.usuarios.nome)
    setCidade(data.usuarios.enderecos[0]?.cidade)
    setEstado(data.usuarios.enderecos[0]?.estado)
    setFoto_usuario(data.usuarios.foto_usuario)
  }

  useEffect(() => {
    BuscarLivroById()
  }, [])

  return (
    <StyledProdutos>
      <main>
        <section className="sessao">
          <h1 className="negrito" href="">
            {materia} - {nivel} 
          </h1>
          <div className="mostrarInfoLivro">
            <div>
              <img className="produtoFoto" src={foto_livro ? foto_livro: livroProduto}></img>
              <div className="fotosMostruario">
                <img src={imgMostruarioLivro} alt=""></img>
                <img src={imgMostruarioLivro}  alt=""></img>
                <img src= {imgMostruarioLivro}  alt=""></img>
              </div>
            </div>
            <div className="informacoesLivro">
              <h1 className="centralizar negrito">
              {nome_livro}
              </h1>
              <div className="infosIcones">
                <div className="infosLivros">
                  <img
                    className="imgsIcones"
                    src= {coracao}
                    alt=""
                  ></img>
                  <p id="alinhaSalvar">salvar</p>
                </div>
                <div className="infosLivros">
                  <img
                    className="imgsIcones"
                    src={problema}
                    alt=""
                  ></img>
                  <div className="txtInfoDono">
                    <p>relatar</p>
                    <p>problema</p>
                  </div>
                </div>
                <div className="infosLivros">
                  <img
                    className="foto"
                    src={foto_usuario ? foto_usuario: login1}
                    alt=""
                  ></img>
                  <div className="txtInfoDono">
                    <p>Dono(a): {usuario}</p>
                    <p>Cidade: {cidade} | Estado: {estado}</p>
                  </div>
                </div>
                <div>
                  <p className="centralizar">reputação</p>
                  <img src={estrela} alt=""></img>
                </div>
              </div>
              <div className="infosLivros">
                <p className="negrito"> Autor/Autores:</p>
                <p>
                  {autor}
                </p>
              </div>
              <div className="infosLivros">
                <p className="negrito">Ano de Publicação: </p> <p>{ano_pub}</p>
              </div>
              <div className="infosLivros">
                <p className="negrito">Editora:</p>
                <p>
                  {editora}
                </p>
              </div>
              <div className="infosLivros">
                <p className="negrito">Idioma:</p>
                <p>
                  {idioma}
                </p>
              </div>
              <div className="infosLivros">
                <p className="negrito">Nº de Páginas:</p> <p> {num_paginas}</p>
              </div>
              <div className="infosLivros">
                <p className="negrito">Estado do Livro:</p>
                <p>
                  {estado_livro}
                </p>
              </div>
              <div className="infosLivros">
                <p className="negrito">Conservação: </p>
                <p>
                  {conservacao}
                </p>
              </div>
              <div className="infosLivros marginInfoLivro ">
                <div className="infosLivros marginInfoLivro2">
                  <p className="negrito">DISPONIBILIDADE:</p>
                  <p className="txtVerde">SIM</p>
                </div>
                <div className="infosLivros ">
                  <p className="negrito ">ISBN:</p>
                  <p>{isbn}</p>
                </div>
              </div>
              <div className="infosLivros">
                <div className="infosLivros">
                  <button className="btn btnLaranja" type="submit" >
                  <Link  className="btn btnLaranja" to="/trocas">QUERO TROCAR!</Link>
                    
                  </button>
                </div>
                <div className="infosLivros">
                  <button className="btn btnRosa" type="submit">
                    QUERO COMPRAR PONTOS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="border"></div>
        <section className="sessao">
          <h2 className="txtAzul">DESCRIÇÃO / RESUMO DO LIVRO</h2>
          <div>
            <p className="txt">
             {sinopse}
            </p>
          </div>
          <div className="border"></div>
        </section>
        <section className="sessao">
          <h2 className="txtAzul">FALE COM DONO(A) DO LIVRO</h2>
          <form className="form">
            <label for="contato"></label>
            <textarea 
                 name="contato" 
                 id="contato"
                 cols="40"
                 rows="5"
                 placeholder="Escreva aqui sua pergunta para o dono(a) do livro...">  
                </textarea>
          </form>
          <button className="btn btnAzul" type="submit">
            ENVIAR MENSAGEM!
          </button>
        </section>
        <div className="border"></div>
        <section className="sessao">
          <h2 className="txtAzul">
            PERGUNTAS E RESPOSTAS JÁ REALIZADAS
          </h2>
          <div id="contato">
            <p className="negrito perguntas">
              {pergunta}
            </p>
            <p className="perguntasSub">Pergunta de: Didi Mocó dos Santos</p>
            <div className="infosLivros">
              <img
                className="perguntasSub"
                src={perguntas}
                alt=""
              ></img>
              <p className="negrito resposta">
                Resposta: Se pedir até o meio-dia, consigo sim!
              </p>
            </div>
          </div>
        </section>
      </main>
    </StyledProdutos>
  );
}

export default Livros;
