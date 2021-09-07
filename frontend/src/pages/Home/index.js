import { StyledHome } from "./StyledHome";
import img1 from "../../assets/img/img1.svg";
import img2 from "../../assets/img/img2.svg";
import img3 from "../../assets/img/img3.svg";
import img4 from "../../assets/img/img4.svg";
import imgSalvar from "../../assets/img/salvar.svg";
import imgRelatar from "../../assets/img/relarUmPro.svg";
import card1 from "../../assets/img/card1.svg";
import card2 from "../../assets/img/card2.svg";
import card3 from "../../assets/img/card3.jpg";
import card4 from "../../assets/img/card4.jpg";
import card5 from "../../assets/img/card5.jpg";
import card6 from "../../assets/img/card6.jpg";
import card7 from "../../assets/img/card7.jpg";
import card8 from "../../assets/img/card8.jpg";
import card9 from "../../assets/img/card9.jpg";
import card10 from "../../assets/img/card10.jpg";
import card11 from "../../assets/img/card11.jpg";
import card12 from "../../assets/img/card12.jpg";
import capa1 from "../../assets/img/capa1.png"
import capa2 from "../../assets/img/capa2.png"
import capa3 from "../../assets/img/capa3.png"
import capa4 from "../../assets/img/capa4.png"
import vector from "../../assets/img/vector.svg";


function Home() {
  return (
    <StyledHome>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <img src={capa1} className="capa1"/>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <img src={capa2} className="capa2"/>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <img src={capa3} className="capa3"/>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
            <img src={capa4} className="capa4"/>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide3"
                className="carousel__navigation-button"
              >
                Go to slide 3 
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide4"
                className="carousel__navigation-button"
              >
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>

      <section className="img-card">
        <div className="card-1">
          <img className="img_1" src={img1} alt="" />
          <p>
            Encontre livros acadêmicos e troque com alguém sem utilizar dinheiro!
          </p>
        </div>
        <div className="card-2">
          <img className="img_2" src={img2} alt="" />
          <p>
            É de graça se você trocar com alguém, ou compre a um preço módico.
          </p>
        </div>
        <div className="card-3">
          <img className="img_3" src={img3} alt="" />
          <p>
            Cada livro cadastrado e enviado à alguém você recebe 1 ponto.
          </p>
        </div>
        <div className="card-4">
          <img className="img_4" src={img4} alt="" />
          <p>
            Navegue no site e utilize seus pontos para trocar por outro livro.
          </p>
        </div>
      </section>

      <div className="trocas-livros">
        <p>
          LIVROS DISPONÍVEIS PARA TROCAS | <a href="#">ver todos</a>
        </p>
      </div>

      <section className="section1">
      <div>
          <img src={card1} alt="" />

          <div className="texto">
            <p className="mat">GERAL</p>
            <p>EU GOSTO MAIS</p>
          </div>

          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="img-assets">
            <p>DISPONÍVEL</p>
            <img src={imgSalvar} alt="" />
            <img src={imgRelatar} alt="" />
          </div>
        </div> 

        <div>
          <img src={card3} alt="" />
          <div className="texto">
            <p className="mat">REDAÇÃO</p>
            <p>TORTO ARADO</p> 
          </div>
          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="nao-dispo">
            <p>NÃO</p>
            <p>DISPONÍVEL</p>
          </div>
          <div className="img">
            <img className="img-3" src={imgSalvar} alt="" />
            <img className="img-4" src={imgRelatar} alt="" />
          </div>
        </div>

        <div>
          <img src={card4} alt="" />

          <div className="texto">
            <p className="mat">COMPUTAÇÃO</p>
            <p>ALGORITMOS</p>
          </div>

          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="img-assets">
            <p>DISPONÍVEL</p>
            <img src={imgSalvar} alt="" />
            <img src={imgRelatar} alt="" />
          </div>
        </div>

        <div>
          <img src={card2} alt="" />
          <div className="texto">
            <p className="mat">DIREITO</p>
            <p>VADE MECUM</p>
            
          </div>
          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="nao-dispo">
            <p>NÃO</p>
            <p>DISPONÍVEL</p>
          </div>
          <div className="img">
            <img className="img-3" src={imgSalvar} alt="" />
            <img className="img-4" src={imgRelatar} alt="" />
          </div>
        </div>

        <div>
          <img src={card5} alt="" />
          <div className="texto">
            <p className="mat">MATEMÁTICA</p>
            <p>MARCHA CRIANÇA 4º ANO</p>
            
          </div>
          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="nao-dispo">
            <p>NÃO</p>
            <p>DISPONÍVEL</p>
          </div>
          <div className="img">
            <img className="img-3" src={imgSalvar} alt="" />
            <img className="img-4" src={imgRelatar} alt="" />
          </div>
        </div>

        <div>
          <img src={card6} alt="" />

          <div className="texto">
            <p className="mat">LITERARTURA</p>
            <p>LITERARTURA BRASILEIRA</p>
          </div>

          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="img-assets">
            <p>DISPONÍVEL</p>
            <img src={imgSalvar} alt="" />
            <img src={imgRelatar} alt="" />
          </div>
        </div>

        <div>
          <img src={card7} alt="" />
          <div className="texto">
            <p className="mat">GEOGRAFIA</p>
            <p>APRENDER JUNTOS</p>
          </div>
          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="nao-dispo">
            <p>NÃO</p>
            <p>DISPONÍVEL</p>
          </div>
          <div className="img">
            <img className="img-3" src={imgSalvar} alt="" />
            <img className="img-4" src={imgRelatar} alt="" />
          </div>
        </div>

        <div>
          <img src={card8} alt="" />

          <div className="texto">
            <p className="mat">GEOGRAFIA</p>
            <p>CIDADES INVISÍVEIS</p>
          </div>

          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="img-assets">
            <p>DISPONÍVEL</p>
            <img src={imgSalvar} alt="" />
            <img src={imgRelatar} alt="" />
          </div>
        </div>
      </section>

      <section className="vector">
        <div>
          <img src={vector} alt="" />
        </div>
        <div>
          <h2 className="vectorh2">É CARO ENVIAR UM LIVRO?</h2>
          <p className="vectorP">
            NÃO! Basta postar seu livro nos CORREIOS como CARTA REGISTRADA
            MÓDICA. Assim, o seu despacho sai baratinho..
          </p>
          <p className="vectorP">
            Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
            conhecidiss, que um alcoolatra anonimis.
          </p>

          <div className="vectorUl">
            <ul className="linkul">
              <li>
                <a className="link" href="#">
                  LEIA MAIS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img src={vector} alt="" />
        </div>
        <div>
          <h2 className="h2">VOCÊ PODE CONTRIBUIR?</h2>
          <p className="vectorP">
            Se você é uma escola, editora, instituição de ensino, biblioteca ou
            qualquer entidade que possua livros didáticos e que possa doar, você
            pode nos enviar e ajudar a quem precisa.
          </p>
          <p className="vectorP">
            Mas há muitas outras formas de contribuir com este projeto além{" "}
          </p>
          <div className="vectorUl">
            <ul className="linkul">
              <li>
                <a className="link" href="#">
                  LEIA MAIS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="desejados">
        <div>
          <p>LIVROS MAIS DESEJADOS</p>
        </div>
      </section>

      <section className="section1">
        <div>
          <img src={card9} alt="" />

          <div className="texto">
            <p className="mat">FICÇÃO</p>
            <p>FRANK PAYNE:</p>
            <p>E A CARVERNA</p>
            <p>MISTERIOSA</p>
          </div>

          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="img-assets">
            <p>DISPONÍVEL</p>
            <img src={imgSalvar} alt="" />
            <img src={imgRelatar} alt="" />
          </div>
        </div>

        <div>
          <img src={card10} alt="" />
          <div className="texto">
            <p className="mat">CIÊNCIA</p>
            <p>IDEIAS PARA</p>
            <p>ADIAR O FIM</p>
            <p>DO MUNDO</p>
          </div>
          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="nao-dispo">
            <p>NÃO</p>
            <p>DISPONÍVEL</p>
          </div>
          <div className="img">
            <img className="img-3" src={imgSalvar} alt="" />
            <img className="img-4" src={imgRelatar} alt="" />
          </div>
        </div>

        <div>
          <img src={card11} alt="" />

          <div className="texto">
            <p className="mat">MEDICINA</p>
            <p>A MORTE É</p>
            <p>UM DIA QUE VALE</p>
            <p>A PENA VIVER</p>
          </div>

          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="img-assets">
            <p>DISPONÍVEL</p>
            <img src={imgSalvar} alt="" />
            <img src={imgRelatar} alt="" />
          </div>
        </div>

        <div>
          <img src={card12} alt="" />
          <div className="texto">
            <p className="mat">MATEMÁTICA</p>
            <p>FUDAMENTOS DA</p>
            <p>MATEMÁTICA ELEMENTAR</p>
            <p>TRIGONOMETRIA</p>
          </div>
          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input className="btn2" type="button" value="+DETALHES" />
          </div>

          <div className="nao-dispo">
            <p>NÃO</p>
            <p>DISPONÍVEL</p>
          </div>
          <div className="img">
            <img className="img-3" src={imgSalvar} alt="" />
            <img className="img-4" src={imgRelatar} alt="" />
          </div>
        </div>
      </section>
    </StyledHome>
  );
}

export default Home;
