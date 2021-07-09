import "./styleMeuSaldo.css";
import imgSaldo from "../../assets/img/saldo.svg";

function MeuSaldo() {
  return (
    <main>
      <div className="saudacao">
        <p>Aeee! Seja Bem-vindx ao nosso clube!</p>
      </div>
      <div className="meuSaldo">
        <img src={imgSaldo} alt="" width="50px" style="margin-right: 5px" />
        Meu Saldo
      </div>
      <div className="info">
        <div className="infobox">
          <div className="titulo">SALDO DE SUA CONTA:</div>
          <div className="conteudo">
            No momento você possui <strong>02</strong> pontos para troca.
          </div>

          <div className="titulo">PEDIDOS DE TROCA QUE ATENDI:</div>
          <div className="conteudoPedidos">
            #1111 - Didi Mocó | Em: 07/07/2020
            <p>#1121 - Didi Mocó | Em: 08/08/2020</p>
            <p>#1131 - Didi Mocó | Em: 09/09/2020</p>
            <p>#21918 - Compra Aprovada | Em: 10/10/2020</p>
            <p>#1151 - Didi Mocó | Em: 11/11/2020</p>
            <p>#1161 - Didi Mocó | Em: 12/12/2020</p>
          </div>
          <div className="total">
            TOTAL DE TROCAS QUE ATENDI: <strong>06</strong>
          </div>
        </div>
        <div className="infobox2">
          <div className="botoes">
            {" "}
            <button type="button" className="botaoVerde">
              PRECISO OBTER PONTOS
            </button>
            <button type="button" className="botaoRosa">
              QUERO COMPRAR PONTOS
            </button>
          </div>
          <div className="titulo">PEDIDOS DE TROCA QUE FIZ:</div>
          <div className="conteudoPedidos">
            #1211 - Dedé | Em: 09/07/2020
            <p>#1221 - Zacarias | Em: 10/08/2020</p>
            <p>#1231 - Didi Mocó | Em: 11/09/2020</p>
            <p>1241 - Zacarias | Em: 12/10/2020</p>
          </div>
          <div className="total">
            TOTAL DE TROCAS QUE SOLICITEI: <strong>06</strong>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MeuSaldo;
