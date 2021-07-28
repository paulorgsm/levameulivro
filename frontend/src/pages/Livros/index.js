import livroProduto from "../../assets/img/livroProduto.svg";
import imgMostruarioLivro from "../../assets/img/imgMostruarioLivro.svg";
import coracao from "../../assets/img/coracao.svg";
import problema from "../../assets/img/problema.svg";
import login1 from "../../assets/img/login.svg";
import estrela from "../../assets/img/estrela.svg";
import perguntas from "../../assets/img/perguntas.svg";
import { StyledProdutos } from "./StyledProdutos";
import {useParams} from "react-router-dom"
import { useState , useEffect} from "react";
import api from "../../services/api";


function Produtos() {
  const [materia, setMateria] = useState("");
  const [autor, setAutor] = useState("");
  const [ nome_livro, setNome_livro] = useState("");
  const [ editora, setEditora] = useState("");
  const [ ano_pub, setAno_pub] = useState("");
  const [ idioma, setIdioma] = useState("");
  const [ estado_livro , setEstado_livro] = useState("");
  const [ conservacao, setConservacao] = useState("");
  const [ isbn, setIsbn] = useState("");
  const [ nivel, setNivel] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [foto_livro, setFoto_livro] = useState("");
  const [id_livro , setId_livro] = useState("");
  const[ pergunta, setPergunta]= useState("");
 
  const [num_paginas, setNum_paginas] = useState("");


  const {id } = useParams();
  async function BuscarLivroById(){
    const {data} = await api.get(`/livros/${id}`)
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
    setId_livro(data.id_livro);
    setPergunta(data.pergunta)
  }

  useEffect(() => 
    BuscarLivroById()
  )

  return (
    <StyledProdutos>

      <main>
        <section className="sessao">
          <a className="negrito" href="">
            {materia} - {nivel} 
          </a>
          <div className="mostrarInfoLivro">
            <div>
              <img className="produtoFoto" src={foto_livro}></img>
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
                    className="imgsIcones"
                    src={login1}
                    alt=""
                  ></img>
                  <div className="txtInfoDono">
                    <p>Dono(a): Mussum da Silva</p>
                    <p>Cidade: São Paulo | Estado: SP</p>
                  </div>
                </div>
                <div>
                  <p className="centralizar">reputação</p>
                  <img src={estrela} alt=""></img>
                </div>
              </div>
              <div className="infosLivros">
                <p className="negrito"> Autor/Autores:</p>{" "}
                <p>
                  {autor}
                  
                </p>
              </div>

              <div className="infosLivros">
                <p className="negrito">Ano de Publicação: </p> <p>{ano_pub}</p>
              </div>
              <div className="infosLivros">
                <p className="negrito">Editora:</p>{" "}
                <p>
                  {editora}
                </p>
              </div>

              <div className="infosLivros">
                <p className="negrito">Coleção:</p>{" "}
                <p>
                  Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois
                  divoltis porris
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
                  <button className="btn btnLaranja" type="submit">
                    QUERO TROCAR!
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
        <div class="border"></div>
        <section class="sessao">
          <h2 class="centralizar txtAzul">DESCRIÇÃO / RESUMO DO LIVRO</h2>
          <div>
            <p class="txt">
             {sinopse}
            </p>
            {/* <p class="txt">
              {" "}
              Quem num gosta di mim que vai caçá sua turmis! Si u mundo tá muito
              paradis? Toma um mé que o mundo vai girarzis! Copo furadis é
              disculpa de bebadis, arcu quam euismod magna. Em pé sem cair,
              deitado sem dormir, sentado sem cochilar e fazendo pose.
            </p>
            <p class="txt">
              Quem num gosta di mim que vai caçá sua turmis! Si u mundo tá muito
              paradis? Toma um mé que o mundo vai girarzis! Copo furadis é
              disculpa de bebadis, arcu quam euismod magna. Em pé sem cair,
              deitado sem dormir, sentado sem cochilar e fazendo pose.{" "}
            </p>
            <p class="txt">
              {" "}
              num gosta di mim que vai caçá sua turmis! Si u mundo tá muito
              paradis? Toma um mé que o mundo vai girarzis! Copo furadis é
              disculpa de bebadis, arcu quam euismod magna. Em pé sem cair,
              deitado sem dormir, sentado sem cochilar e fazendo pose.
            </p>
            <p class="txt">
              {" "}
              libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit
              amet nisi. Mauris nec dolor in eros commodo tempor. Aenean aliquam
              molestie leo, vitae iaculis nisl. Quem manda na minha terra sou
              euzis! Mais vale um bebadis conhecidiss, que um alcoolatra
              anonimis.
            </p>
            <p class="txt">
              {" "}
              faiz malandris se pirulitá. Detraxit consequat et quo num tendi
              nada. Interessantiss quisso pudia ce receita de bolis, mais bolis
              eu num gostis. Viva Forevis aptent taciti sociosqu ad litora
              torquent.
            </p>
            <p class="txt">
              Manduma pindureta quium dia nois paga. Mé faiz elementum girarzis,
              nisi eros vermeio. Não sou faixa preta cumpadi, sou preto
              inteiris, inteiris. Suco de cevadiss deixa as pessoas mais
              interessantis.
            </p>
            <p class="txt">
              Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
              Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis,
              aguis e fermentis. Vehicula non. Ut sed ex eros. Vivamus sit amet
              nibh non tellus tristique interdum. Aenean aliquam molestie leo,
              vitae iaculis nisl.
            </p> */}
          </div>
          <div class="border"></div>
        </section>
        <section class="sessao">
          <h2 class="centralizar txtAzul">FALE COM DONO(A) DO LIVRO</h2>
          <form class="form" action="" method="POST">
            <label for="contato"></label>
            <textarea 
                 name="contato" 
                 id="contato"
                 cols="40"
                 rows="5"
                 placeholder="    Escreva aqui sua pergunta para o dono(a) do livro...">  
                </textarea>
          </form>
          <button class="btn btnAzul" type="submit">
            {" "}
            ENVIAR MENSAGEM!
          </button>
        </section>
        <div class="border"></div>
        <section class="sessao">
          <h2 class="centralizar txtAzul">
            PERGUNTAS E RESPOSTAS JÁ REALIZADAS
          </h2>
          <div id="contato">
            <p class="negrito perguntas">
              {pergunta}
            </p>
            <p class="perguntasSub">Pergunta de: Didi Mocó dos Santos</p>
            <div class="infosLivros">
              <img
                class="perguntasSub"
                src={perguntas}
                alt=""
              ></img>
              <p class="negrito resposta ">
                Resposta: Se pedir até o meio-dia, consigo sim!
              </p>
            </div>
          </div>
        </section>
      </main>
    </StyledProdutos>
  );
}

export default Produtos;
