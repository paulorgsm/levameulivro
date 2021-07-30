import facebook from "../../assets/img/pic-rodape-face-levameulivro.png";

import redesSociais from "../../assets/img/redesSociais.svg";
import { StyledFooter } from "./StyledFooter";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import {Link} from "react-router-dom";


function Footer() {
  return (
    <StyledFooter>
      <footer className="footer">

          <div className="descricaoSobre">
            <h2>
              SOBRE O <strong>LEVA MEU LIVRO</strong>
            </h2>
            <span>
              O projeto Leva Meu Livro tem por objetivo fomentar a educação nacional. Entendemos que enquanto houver pessoas com livros acadêmicos, ainda que usados, estes podem ser reaproveitados por outras pessoas sem condições de compra. Queremos montar uma corrente do bem em que quem possui um livro acadêmico pode compartilhar com outra pessoa que não tem, e ainda, conseguir um outro livro acadêmico em troca da ajuda.
            </span>
            <span>
              <a className="leiaMais" href="">
                LEIA MAIS
              </a>
            </span>
          </div>

          <div className="redesSociais">
            <h2>
              REDES <strong>SOCIAIS</strong>
            </h2>
            <div className="social-face">
              <a href="https://facebook.com" target="_blank"><img src={facebook} alt="plugin facebook" /></a>
              {/* <img src={FaInstagramSquare} alt="não encontrada" /> */}
            </div>

            <div className="social-icons">
                <div /* className="social-1" */>
                  <a href="https://instagram.com" target="_blank"><FaInstagramSquare size={40} className="icon"/></a>
                  <a href="https://twitter.com" target="_blank"><FaTwitterSquare size={40} className="icon" /></a>
                </div>

                <div /* className="social-2" */>
                    <a href="https://whatsapp.com" target="_blank"> <FaWhatsappSquare size={40} className="icon"/> </a>
                    <a href="https://telegram.org" target="_blank"> <FaTelegram size={40} className="icon"/> </a>
                </div>
            </div>


          </div>
          
 
          </footer>

          <footer className="footer2">
          <div className="direitos">
            {" "}
            LEVA MEU LIVRO © | 2021 - Todos os direitos reservados{" "}
          </div>
 
    </footer>
    </StyledFooter>
  );
}

export default Footer;
