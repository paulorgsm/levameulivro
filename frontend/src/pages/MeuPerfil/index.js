//import imgSaldo from "../../assets/img/saldo.svg";
import { StyledMeuPerfil } from "./StyledMeuPerfil";
import imgMeusDados from "../../assets/img/imgMeusDados.svg"
import imgSaldo from "../../assets/img/imgSaldo.svg"
import imgLivros from "../../assets/img/imgLivros.svg"
import imgTroca from "../../assets/img/imgTroca.svg"
import {Link} from "react-router-dom"

function MeuPerfil(){
    return(
        <StyledMeuPerfil>
            <main>
                <section className="meuPerfil">
                    <div className="meuPerfilGeral">
                        <p>Aeee! Seja Bem-Vindx ao Nosso Clube!</p>
                    </div>
                    <div className="perfilGeral">
                        <div className="meusDados">
                            <div className="imgId">
                                <img src={imgMeusDados} alt="Ícone Identidade"/>
                            </div>
                            <h2>Meus Dados</h2>
                            <p>Aqui é o Seu Espaço Para Alterar Suas Informações Pessoais Previamente Cadastradas.</p>
                            <button type="button">Acessar</button>
                        </div>
        
                        <div className="meuSaldo">
                            <div className="imgSaldo">
                                <img src={imgSaldo} alt="Ícone Saldo"/>
                            </div>
                            <h2>Meu Saldo</h2>
                            <p>Veja qual é o crédito que você possui disponível para trocar por novos livros e/ou descubra como conseguir.</p>
                            <button type="button"><Link className="btn-saldo" to="/saldo">Acessar</Link></button>
                        </div>
        
                        <div className="cadastrarLivro">
                            <div className="imgLivros">
                                <img src={imgLivros} alt="Ícone Cadastrar Livro"/>
                            </div>
                            <h2>Cadastrar </h2>
                            <h2>Meus Livros</h2>
                            <p>Cadastre os livros que está disposto a trocar para receber créditos. Responda dúvidas de outros usuários.</p>
                            <button type="button">Acessar</button>
                        </div>
        
                        <div className="pedidoTroca">
                            <div className="imgTroca">
                                <img src={imgTroca} alt="Ícone Pedidos de Troca"/>
                            </div>
                            <h2>Pedidos </h2>
                            <h2>de Troca</h2>
                            <p>Visualize aqui quem pediu os livros que você cadastrou e também acompanhe os seus pedidos de troca.</p>
                            <button type="button">Acessar</button>
                        </div>
        
                    </div>
                </section>
            </main>
            
        </StyledMeuPerfil>
    );
};

export default MeuPerfil;