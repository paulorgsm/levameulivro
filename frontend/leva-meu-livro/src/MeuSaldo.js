import logo from './logo.svg';
import './reset.css';
import './meusaldo.css';

function App() {
  return (
    <main>
        <div class="saudacao">
            <p>Aeee! Seja Bem-vindx ao nosso clube!</p>
        </div>
        <div class="meuSaldo">
            <img  src="../assets/img/saldo.svg" alt="" width= "50px" style="margin-right: 5px"/> 
            Meu Saldo
        </div>
        <div class="info">
            <div class="infobox">
                <div class="titulo">SALDO DE SUA CONTA:</div>
                <div class="conteudo">No momento você possui <strong>02</strong> pontos para troca.</div>

                <div class="titulo">PEDIDOS DE TROCA QUE ATENDI:</div>
                <div class="conteudoPedidos">#1111 - Didi Mocó | Em: 07/07/2020
                    <p>#1121 - Didi Mocó | Em: 08/08/2020</p>
                    <p>#1131 - Didi Mocó | Em: 09/09/2020</p>
                    <p>#21918 - Compra Aprovada | Em: 10/10/2020</p>
                    <p>#1151 - Didi Mocó | Em: 11/11/2020</p>
                    <p>#1161 - Didi Mocó | Em: 12/12/2020</p>
                </div>
                <div class="total">TOTAL DE TROCAS QUE ATENDI: <strong>06</strong></div>
            </div> 
            <div class="infobox2">
                    <div class="botoes"> <button type="button" class="botaoVerde">PRECISO OBTER PONTOS</button> 
                        <button type="button" class="botaoRosa">QUERO COMPRAR PONTOS</button></div>
                    <div class="titulo">PEDIDOS DE TROCA QUE FIZ:</div>
                    <div class="conteudoPedidos">
                        #1211 - Dedé | Em: 09/07/2020
                        <p>#1221 - Zacarias | Em: 10/08/2020</p>
                        <p>#1231 - Didi Mocó | Em: 11/09/2020</p>
                        <p>1241 - Zacarias | Em: 12/10/2020</p>
                    </div>
                    <div class="total">TOTAL DE TROCAS QUE SOLICITEI: <strong>06</strong></div>
            </div>
        </div>
    </main>
  );
}