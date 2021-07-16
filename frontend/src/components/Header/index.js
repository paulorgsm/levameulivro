import logo from "../../assets/img/logo.svg";
import imgLogin from "../../assets/img/login.svg";
import { StyledHeader } from "./StyledHeader";
<<<<<<< HEAD
=======
import {Link} from "react-router-dom";
>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66

function Header() {
  return (
    <StyledHeader>
      <header className="header">
        <div className="conteudoHeader">
          <div>
<<<<<<< HEAD
            <img className="logo" src={logo} alt="Logo-Tipo" />
=======
            <Link to="/"><img className="logo" src={logo} alt="Logo-Tipo" /></Link>
>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66
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
              <span>Oi, Seja Bem-vindx!</span>

<<<<<<< HEAD
              <span>ENTRE / REGISTRE-SE</span>
=======
              <Link to="/login"><span>ENTRE / REGISTRE-SE</span></Link>
>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66
            </div>
            <img src={imgLogin} alt="" />
          </div>
        </div>
        <div className="infoHeader">
          <nav>
            <ul>
              <li>
<<<<<<< HEAD
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="">QUEM SOMOS</a>
=======
                <Link to="/">HOME</Link>
              </li>
              <li>
                <a href="">COMO FUNCIONA</a>
>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66
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
