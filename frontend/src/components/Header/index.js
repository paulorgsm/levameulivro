import logo from "../../assets/img/logo.svg";
import imgLogin from "../../assets/img/login.svg";
import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <StyledHeader>
      <header className="header">
        <div className="conteudoHeader">
          <div>
            <Link to="/"><img className="logo" src={logo} alt="Logo-Tipo" /></Link>
          </div>

          <div className="divInput">
            <input
              className="buscar"
              type="text"
              placeholder="Busque por livro, autor,tag"
            />
            <div className="containerHeader">
              <input type="checkbox" />
              Apenas disponíveis
            </div>
            <button type="submit" className="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="login">
            <div className="campoLogin">
              {props.title ? (
              <span style={{width: 150 + "px"}}>Oi, {props.title} <span>Seja Bem-vindo(a)!</span></span>
              ): (
                <>
                <span>Oi, Seja Bem-vindx!</span>
                <Link to="/login"><span>ENTRE / REGISTRE-SE</span></Link>
                </>
              )
            }
            </div>
            <img src={imgLogin} alt="" />
          </div>
        </div>
        <div className="infoHeader">
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <a href="">COMO FUNCIONA</a>
              </li>
              <li>
                <a id="comprarLi" href="">
                  COMPRAR PONTOS
                </a>
              </li>
              <li>
                <a href="">QUEM SOMOS</a>
              </li>
              <li>
                <a href="">FALE CONOSCO</a>
              </li>
              <li>
                <a href="">DOE/APOIE</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </StyledHeader>
  );
}

export default Header;
