import logo from './logo.svg';
import './mensageria.css';

function Mensageria() {
  return (
    <main>
        <div className ="saudacao">
            <p>Aeee! Seja Bem-vindx ao nosso clube!</p>
        </div>
        <div className ="mensageria">
            <img  src="../assets/img/mensageria1.svg" alt="" width= "60px" style="margin-right: 5px"/>
             <p>Mensageria</p>
        </div>
        <div className ="perguntaTitulo">
            <img  src="../assets/img/mensageria2.svg" alt="" width= "40px" style="margin-right: 5px"/> 
            <p>Quem está perguntando?</p>
        </div>
        <div className ="perguntaBox">
            <div className ="tituloImagem">Imagem:
            </div> 
            <div className ="tituloLivro">Título:
            </div>
            <div className ="tituloSolicitante">Solicitante:
            </div>
            <div className ="tituloPedido">Pedido?
            </div>
            <div className ="tituloMensagens">Mensagens:
            </div>
            <div className ="conteudoImagem">
                <img  src="../assets/img/livro.svg" alt="" width= "80px"/>
            </div>
            <div className ="conteudoLivro">Harry Potter e a Pedra Filosofal</div>
            <div className ="conteudoSolicitante">
                <div className ="fotoSolicitante"><img  src="../assets/img/icon.svg" alt="" width= "40px"/></div>
                 <div className ="nomeSolicitante">Didi Mocó da Silva José Gardenal</div>   
            </div>      
            
            <div className ="conteudoPedido">
                <div className ="conteudoPedido2">SIM</div>
                 <p><a href="">
                        <img  src="../assets/img/verpedido.svg" alt="" width= "150px" className ="center"/>
                 </a></p>
            </div>
             <div className ="conteudoMensagens">
                <p><a href="">
                  <img  src="../assets/img/mensagens.svg" alt="" width= "170px" href="" className ="center2"/>
                </a></p>
             </div>
            <div className ="mensagens"><div className ="faleSolicitante">FALE COM O SOLICITANTE:</div>
                    <p><textarea name="Text1" className ="input" cols="40" rows="5" placeholder="Escreva aqui sua pergunta para o interessado no livro..."></textarea></p>
                    <p><button type="button" className ="botao">ENVIAR MENSAGEM</button></p>
            </div>
             <div className ="perguntasRespostas">PERGUNTAS E RESPOSTAS JÁ REALIZADAS</div>
            <div className ="conversa"><h2>Você consegue postar o livro nos Correios ainda hoje se eu solicitar a troca?</h2>
                 <p>Pergunta de: Didi Mocó dos Santos | Data 12/03/2021 às 13:45:19</p>
             <div className ="conversaResposta"><img  src="../assets/img/hook.svg" width="30px"/><h2>Sua Resposta: Se pedir até o meio-dia, consigo sim! </h2> | Data: 12/03/2021 às 13:50:55 </div>
            </div>
        </div>
        <div className ="paginas">
            <div className ="box">
                <div className ="botaoPag"><img src="../assets/img/setaLado.svg"/></div>
                <div className ="botaoPag">1</div>
                <div className ="botaoPag"> </div>
            </div>
        </div>  
        <div className ="perguntaFeitas">
            <img  src="../assets/img/mensageria3.svg" alt="" width= "40px" style="margin-right: 5px"/> <p>Perguntas que fiz:</p>
        </div>
        <div className ="perguntaBox">
        <div className ="tituloImagem">Imagem:</div> 
            <div className ="tituloLivro">Título:</div>
            <div className ="tituloSolicitante">Solicitante:</div>
            <div className ="tituloPedido">Pedido?</div>
            <div className ="tituloMensagens">Mensagens:</div>
            <div className ="conteudoImagem"><img  src="../assets/img/livro2.svg" alt="" width= "80px"/></div>
            <div className ="conteudoLivro">Pensamento Crítico: O poder da Lógica e da argumentação</div>
            <div className ="conteudoSolicitante">
                <div className ="fotoSolicitante"><img  src="../assets/img/icon.svg" alt="" width= "40px"/></div>
                <div className ="nomeSolicitante">Zacarias dos Trapalhões e Companhia</div>     
            </div>
            <div className ="conteudoPedido">
                <div className ="conteudoPedido2">NÃO</div>
            </div>
            <div className ="conteudoMensagens">
                <p><a href=""><img  src="../assets/img/mensagensVerde.svg" alt="" width= "170px" href="" className ="center2"/></a></p>
            </div>
            <div className ="mensagens"><div className ="faleSolicitante">FALE COM O DONO(A) DO LIVRO:</div>
                <p><textarea name="Text1" className ="input" cols="40" rows="5" placeholder="Escreva aqui sua pergunta para o dono(a) do livro..."></textarea></p>
                <p><button type="button" className ="botao">ENVIAR MENSAGEM</button></p>
                <div className ="perguntasRespostasVerde">PERGUNTAS E RESPOSTAS JÁ REALIZADAS</div>
                <div className ="conversaVerde"><h2>Você consegue postar o livro nos Correios ainda hoje se eu solicitar a troca?</h2>
                    <p>Pergunta de: Você | Data 12/03/2021 às 13:45:19</p>
                    <div className ="conversaResposta">
                        <img  src="../assets/img/hook.svg" width="30px"/><h2>Resposta de Zacarias: Se pedir até o meio-dia, consigo sim! </h2> | Data: 12/03/2021 às 13:50:55
                    </div>
                </div>  
            </div>
        </div>
        <div className ="paginas">
            <div className ="box">
                <div className ="botaoPag"><img src="../assets/img/setaLado.svg"/></div>
                <div className ="botaoPag">1</div>
                <div className ="botaoPag"> </div>
            </div>
        </div>
    </main>
  );
}
export default Mensageria;