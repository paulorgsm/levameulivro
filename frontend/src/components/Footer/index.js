import facebook from "../../assets/img/facebook.svg";
import redesSociais from "../../assets/img/redesSociais.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="descricaoSobre">
        <h2>
          SOBRE <strong>LEVA MEU LIVRO</strong>
        </h2>
        <span>
          Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis
          porris, paradis. Per aumento de cachacis, eu reclamis. Vehicula non.
          Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
          Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo
          pose.
        </span>
        <span>
          <a className="leiaMais" href="#">
            LEIA MAIS
          </a>
        </span>
      </div>

      <div className="redesSociais">
        <h2>
          REDES<strong>SOCIAIS</strong>
        </h2>
        <span>
          <img src={facebook} alt="não encontrada" />
          <img src={redesSociais} alt="não encontrada" />
        </span>
      </div>
      <div className="footer2">
        <div className="direitos">
          {" "}
          LEVA MEU LIVRO © | 2021 - Todos os direitos reservados{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
