import imgSalvar from "../../assets/img/salvar.svg";
import imgRelatar from "../../assets/img/relarUmPro.svg";
import card1 from "../../assets/img/card1.svg";
import imgLogin from "../../assets/img/login.svg";
import setaBaico from "../../assets/img/seta-baico.svg";
import { StyledBusca } from "./StyledBusca";
import {Link} from "react-router-dom";

function Busca() {
  return (
    <StyledBusca>

<div className="botoes">

<label htmlFor="organizar"></label>
<select name="organizar" id="organizar" className="btn-filtro">
    <option value="mais-novos" className="btn-org">Mais Novos</option>
    <option value="mais-antigos" className="btn-org">Mais Antigos</option>
    <option value="livros-novos" className="btn-org">Livros Novos</option>
    <option value="livros-usados" className="btn-org">Livros Usados</option>
</select>
</div>

      <main id="main-container">
        <section className="section-principal">
          <article>
            <p>matéria / curso</p>
          </article>

          <section className="container-checkbox">

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

              <div className="div-checkbox">
                <input type="checkbox" id="container" />
                <label for="container">testando..</label>
                <p><Link to="#">ver todos</Link></p>
              </div>
            <hr className="hr-linha" />
          </section>

          <section className="container-ensino">
            <article>
              <p>nível de ensino</p>
            </article>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>

            <div className="div-checkbox">
              <input type="checkbox" id="container" />
              <label for="container">testando..</label>
            </div>
          </section>
        </section>

        <div className="div-card">
          <div className="div-card1">
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

            <div className="div-login">
              <img src={imgLogin} />

              <div>
                <p>Dono(a): Mussum da Silva</p>
                <p>Cidade: São Paulo | Estado: SP</p>
              </div>
            </div>
          </div>

          <div className="div-card1">
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

            <div className="div-login">
              <img src={imgLogin} />

              <div>
                <p>Dono(a): Mussum da Silva</p>
                <p>Cidade: São Paulo | Estado: SP</p>
              </div>
            </div>
          </div>

          <div className="div-card1">
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

            <div className="div-login">
              <img src={imgLogin} />

              <div>
                <p>Dono(a): Mussum da Silva</p>
                <p>Cidade: São Paulo | Estado: SP</p>
              </div>
            </div>
          </div>
          <div className="div-card1">
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

            <div className="div-login">
              <img src={imgLogin} />

              <div>
                <p>Dono(a): Mussum da Silva</p>
                <p>Cidade: São Paulo | Estado: SP</p>
              </div>
            </div>
          </div>

          <div className="div-card1">
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

            <div className="div-login">
              <img src={imgLogin} />

              <div>
                <p>Dono(a): Mussum da Silva</p>
                <p>Cidade: São Paulo | Estado: SP</p>
              </div>
            </div>
          </div>

          <div className="div-card1">
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

            <div className="div-login">
              <img src={imgLogin} />

              <div>
                <p>Dono(a): Mussum da Silva</p>
                <p>Cidade: São Paulo | Estado: SP</p>
              </div>
            </div>
          </div>

              <div>
                <img src={setaBaico} alt="" />
              </div>
            </div>

      </main>
    </StyledBusca>
  );
}

export default Busca;
