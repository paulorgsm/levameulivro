import logo from "../../assets/img/logo.svg";
import imgLogin from "../../assets/img/login.svg";
import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";
import { getName, getPhoto, logout, isAuthenticated} from "../../services/auth"
import { useEffect, useState } from "react";

function Header() {
  const [ nome, setNome ] = useState(null)
  const [ foto, setFoto ] = useState(null)

  function handleSession() {
    logout()
    setNome(null)
    setFoto(null)
    window.location.href = "/login"
  }

  useEffect(() => {
    setNome(getName())
    setFoto(getPhoto())
  },[])

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
              placeholder="Busque por livro, autor, matéria, curso e etc..."
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
              {isAuthenticated() ? 
                (
                  <span style={{width: 150 + "px"}}>Oi, {nome} <span>Seja Bem-vindo(a)!</span> <button className = ".sair" onClick={() => handleSession()}>Sair</button></span>
                ): 
                (
                  <>
                    <span>Oi, Seja Bem-vindx!</span>
                    <Link to="/login"><span>ENTRE / REGISTRE-SE</span></Link>
                  </>
                )
              }
            </div>
            {isAuthenticated() ? 
              (
                <Link to="/meu-perfil">
                  <img 
                    style={{borderRadius: 50 + "%", maxWidth: 50 + "px", maxHeight: 50 + "px"}} 
                    src={foto ? foto: imgLogin} 
                    alt="" 
                />
                </Link>
              ): 
              ( 
                <Link to="/login">
                  <img 
                    src={imgLogin} 
                    alt=""
                  />
                </Link>
              ) 
            }
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
