import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <header class="header">
     <div className="conteudoHeader">
        <div>
        <img src= {logo} className="logo" alt="logo" />
        </div>
        <div className="divInput">
            <input class="buscar" type="text"  placeholder="Busque por livro, autor,tag" />
            <div className="container">
             <input type="checkbox"
                    class="checkmark" placeholder= "Apenas disponíveis" />
            </div>
            <button type="submit" class="submit"><i class="fa fa-search"></i></button>  
        </div>
        <div className="login">
            <div className="campoLogin">
                 <span>Oi, Seja Bem-vindx!</span>
                 <span>ENTRE / REGISTRE-SE</span>
            </div> 
            <img  src="../assets/img/login.svg" alt=""></img>     
        </div>
     </div>
     <div class="infoHeader">
            <nav>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">QUEM SOMOS</a></li>
                    <li><a id="comprarLi" href="">COMPRAR PONTOS</a></li>
                    <li><a href="">QUEM SOMOS</a></li>
                    <li><a href="">FALE CONOSCO</a></li>
                    <li><a href="">DOE/APOIE</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
  ); 
}

export default App;