import logo from "../../assets/img/logo.svg";
import imgLogin from "../../assets/img/login.svg";
import "./styleHeader.css";

function Header() {
  return (
    <header className="header">
      <div className="conteudoHeader">
        <div>
          <img className="logo" src={logo} alt="Logo-Tipo" />
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

            <span>ENTRE / REGISTRE-SE</span>
          </div>
          <img src={imgLogin} alt="" />
        </div>
      </div>
      <div className="infoHeader">
        <nav>
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">QUEM SOMOS</a>
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
  );
}

export default Header;
