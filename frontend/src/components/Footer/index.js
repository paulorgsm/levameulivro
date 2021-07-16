import facebook from "../../assets/img/facebook.svg";
import redesSociais from "../../assets/img/redesSociais.svg";
import { StyledFooter } from "./StyledFooter";
<<<<<<< HEAD
=======
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import {Link} from "react-router-dom";

>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66

function Footer() {
  return (
    <StyledFooter>
      <footer className="footer">
<<<<<<< HEAD
        <div className="descricaoSobre">
          <h2>
            SOBRE O <strong>LEVA MEU LIVRO</strong>
          </h2>
          <span>
            Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis
            porris, paradis. Per aumento de cachacis, eu reclamis. Vehicula non.
            Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo
            pose.
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
          <span>
            <img src={facebook} alt="não encontrada" />
            <img src={redesSociais} alt="não encontrada" />
          </span>
        </div>
      </footer>
      <footer className="footer2">
        <div className="direitos">
          {" "}
          LEVA MEU LIVRO © | 2021 - Todos os direitos reservados{" "}
        </div>
      </footer>
=======

          <div className="descricaoSobre">
            <h2>
              SOBRE O <strong>LEVA MEU LIVRO</strong>
            </h2>
            <span>
              Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis
              porris, paradis. Per aumento de cachacis, eu reclamis. Vehicula non.
              Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
              Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo
              pose.
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
>>>>>>> 36f82578ed1694b7182749c6a1b847ee042c6c66
    </StyledFooter>
  );
}

export default Footer;
