import logo from './logo.svg';
import './mensageria.css';

function App() {
  return (
    <main>
        <div class="saudacao">
            <p>Aeee! Seja Bem-vindx ao nosso clube!</p>
        </div>
        <div class="mensageria">
            <img  src="../assets/img/mensageria1.svg" alt="" width= "60px" style="margin-right: 5px"/>
             <p>Mensageria</p>
        </div>
        <div class="perguntaTitulo">
            <img  src="../assets/img/mensageria2.svg" alt="" width= "40px" style="margin-right: 5px"/> 
            <p>Quem está perguntando?</p>
        </div>
        <div class="perguntaBox">
            <div class="tituloImagem">Imagem:
            </div> 
            <div class="tituloLivro">Título:
            </div>
            <div class="tituloSolicitante">Solicitante:
            </div>
            <div class="tituloPedido">Pedido?
            </div>
            <div class="tituloMensagens">Mensagens:
            </div>
            <div class="conteudoImagem">
                <img  src="../assets/img/livro.svg" alt="" width= "80px"/>
            </div>
            <div class="conteudoLivro">Harry Potter e a Pedra Filosofal</div>
            <div class="conteudoSolicitante">
                <div class="fotoSolicitante"><img  src="../assets/img/icon.svg" alt="" width= "40px"/></div>
                 <div class="nomeSolicitante">Didi Mocó da Silva José Gardenal</div>   
            </div>      
            
            <div class="conteudoPedido">
                <div class="conteudoPedido2">SIM</div>
                 <p><a href="">
                        <img  src="../assets/img/verpedido.svg" alt="" width= "150px" class="center"/>
                 </a></p>
            </div>
             <div class="conteudoMensagens">
                <p><a href="">
                  <img  src="../assets/img/mensagens.svg" alt="" width= "170px" href="" class="center2"/>
                </a></p>
             </div>
            <div class="mensagens"><div class="faleSolicitante">FALE COM O SOLICITANTE:</div>
                    <p><textarea name="Text1" class="input" cols="40" rows="5" placeholder="Escreva aqui sua pergunta para o interessado no livro..."></textarea></p>
                    <p><button type="button" class="botao">ENVIAR MENSAGEM</button></p>
            </div>
             <div class="perguntasRespostas">PERGUNTAS E RESPOSTAS JÁ REALIZADAS</div>
            <div class="conversa"><h2>Você consegue postar o livro nos Correios ainda hoje se eu solicitar a troca?</h2>
                 <p>Pergunta de: Didi Mocó dos Santos | Data 12/03/2021 às 13:45:19</p>
             <div class="conversaResposta"><img  src="../assets/img/hook.svg" width="30px"/><h2>Sua Resposta: Se pedir até o meio-dia, consigo sim! </h2> | Data: 12/03/2021 às 13:50:55 </div>
            </div>
        </div>
        <div class="paginas">
            <div class="box">
                <div class="botaoPag"><img src="../assets/img/setaLado.svg"/></div>
                <div class="botaoPag">1</div>
                <div class="botaoPag"> </div>
            </div>
        </div>  
        <div class="perguntaFeitas">
            <img  src="../assets/img/mensageria3.svg" alt="" width= "40px" style="margin-right: 5px"/> <p>Perguntas que fiz:</p>
        </div>
        <div class="perguntaBox">
        <div class="tituloImagem">Imagem:</div> 
            <div class="tituloLivro">Título:</div>
            <div class="tituloSolicitante">Solicitante:</div>
            <div class="tituloPedido">Pedido?</div>
            <div class="tituloMensagens">Mensagens:</div>
            <div class="conteudoImagem"><img  src="../assets/img/livro2.svg" alt="" width= "80px"/></div>
            <div class="conteudoLivro">Pensamento Crítico: O poder da Lógica e da argumentação</div>
            <div class="conteudoSolicitante">
                <div class="fotoSolicitante"><img  src="../assets/img/icon.svg" alt="" width= "40px"/></div>
                <div class="nomeSolicitante">Zacarias dos Trapalhões e Companhia</div>     
            </div>
            <div class="conteudoPedido">
                <div class="conteudoPedido2">NÃO</div>
            </div>
            <div class="conteudoMensagens">
                <p><a href=""><img  src="../assets/img/mensagensVerde.svg" alt="" width= "170px" href="" class="center2"/></a></p>
            </div>
            <div class="mensagens"><div class="faleSolicitante">FALE COM O DONO(A) DO LIVRO:</div>
                <p><textarea name="Text1" class="input" cols="40" rows="5" placeholder="Escreva aqui sua pergunta para o dono(a) do livro..."></textarea></p>
                <p><button type="button" class="botao">ENVIAR MENSAGEM</button></p>
                <div class="perguntasRespostasVerde">PERGUNTAS E RESPOSTAS JÁ REALIZADAS</div>
                <div class="conversaVerde"><h2>Você consegue postar o livro nos Correios ainda hoje se eu solicitar a troca?</h2>
                    <p>Pergunta de: Você | Data 12/03/2021 às 13:45:19</p>
                    <div class="conversaResposta">
                        <img  src="../assets/img/hook.svg" width="30px"/><h2>Resposta de Zacarias: Se pedir até o meio-dia, consigo sim! </h2> | Data: 12/03/2021 às 13:50:55
                    </div>
                </div>  
            </div>
        </div>
        <div class="paginas">
            <div class="box">
                <div class="botaoPag"><img src="../assets/img/setaLado.svg"/></div>
                <div class="botaoPag">1</div>
                <div class="botaoPag"> </div>
            </div>
        </div>
    </main>
  );
}
