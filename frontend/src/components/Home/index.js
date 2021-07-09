import "./styleHome.css";
import img1 from "../../assets/img/img1.svg";
import img2 from "../../assets/img/img2.svg";
import img3 from "../../assets/img/img3.svg";
import img4 from "../../assets/img/img4.svg";
import imgSalvar from "../../assets/img/salvar.svg";
import imgRelatar from "../../assets/img/relarUmPro.svg";
import card1 from "../../assets/img/card1.svg";
import card2 from "../../assets/img/card2.svg";
import vector from "../../assets/img/vector.svg";

function Home() {
  return (
    <>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
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
            Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium
            dia nois paga.
          </p>
        </div>
        <div className="card-2">
          <img className="img_2" src={img2} alt="" />
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium
            dia nois paga.
          </p>
        </div>
        <div className="card-3">
          <img className="img_3" src={img3} alt="" />
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium
            dia nois paga.
          </p>
        </div>
        <div className="card-4">
          <img className="img_4" src={img4} alt="" />
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium
            dia nois paga.
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
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
          <img src={card1} alt="" />

          <div className="texto">
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
          </div>

          <div className="btn">
            <input className="btn1" type="button" value="QUERO ESTE!" />
            <input class="btn2" type="button" value="+DETALHES" />
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
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
          <img src={card2} alt="" />
          <div className="texto">
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
          <img src={card1} alt="" />

          <div className="texto">
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
          <img src={card1} alt="" />

          <div className="texto">
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
                <a class="link" href="#">
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
          <img src={card1} alt="" />

          <div className="texto">
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
          <img src={card1} alt="" />

          <div className="texto">
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
            <p className="mat">MATÉRIA</p>
            <p>NOME DO LIVRO</p>
            <p>COM ATÉ 3 LINHAS</p>
            <p>DE CARACTERES</p>
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
    </>
  );
}

export default Home;
