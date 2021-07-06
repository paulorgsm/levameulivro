import logo from './logo.svg';
import './pedidod-de-troca.css';

function App() {
  return (
    <main>
      <div class="welcome">
        <h3>Aeee! Seja Bem-Vindx ao Nosso Clube!</h3>
    </div>
    <section class="new-order">
        <div class="order-header">
            <i class="fas fa-exchange-alt fa-4x"></i>
            <h1>Pedidos De Troca</h1>
        </div>
        <div class="include-see-orders">
            <button type="submit"><i class="fas fa-plus-circle"></i> Incluir Novo Livro</button>
            <select name="pedidos-antigos" id="pedidos-antigos" class="select-btn-green">
                <option value="" selected disabled>Mais Antigos</option>
                <option value="essa-semana">Essa semana</option>
                <option value="esse-mes">Esse mês</option>
                <option value="ultimos-seis-meses">Últimos seis meses</option>
                <option value="esse-ano">Esse ano</option>
                <option value="ano-passado">Ano passado</option>
            </select>
        </div>
    </section>

    
    <section class="orders">
        <div class="order-header">
            <i class="fas fa-book fa-4x"></i>
            <h1>Quem pediu meus livros:</h1>
        </div>
        <div class="full-table">
            <table>
                <tr class="header-table">
                    <th class="image">Imagem:</th>
                    <th class="title">Título:</th>
                    <th class="people">Solicitante:</th>
                    <th class="date">Data:</th>
                    <th class="status">Status:</th>
                    <th class="code">Código de Rastreio:</th>
                    <th class="acion">Ação:</th>
                </tr>
                <tr class="table">
                    <td><a href="#" class="capa-livro"></a></td>
                    <td>Harry Potter e a Pedra Filosofal</td>
                    <td><i class="fas fa-user-circle fa-2x"></i> Didi Mocó da Silva José Gardenal
                        <button class="more-details"><i class="fas fa-plus-circle"></i> Mais Detalhes</button>
                    </td>
                    <td>16/05/2021</td>
                    <td>Aguardando Sua Análise</td>
                    <td> </td>
                    <td>
                        <button class="btn-green">ACEITAR PEDIDO</button>
                        <button class="btn-red">REJEITAR PEDIDO</button>
                    </td>
                </tr>
            </table>

            
            <div id="details-orders" class="details">
                <div class="order-details">
                    <h3>Detalhes do Pedido:</h3>
                    <p><b>Solicitante:</b> Didi Mocó da Silva José Gardenal</p>
                    <p><b>Endereço do Solicitante:</b> Estr. dos Bandeirantes, 6700</p>
                    <p> Bairro Jacarepaguá. Rio de Janeiro / RJ</p>
                    <p>    CEP: 22780-086</p>
                    <p><b>Título do Livro:</b> Harry Potter e a Pedra Filosofal</p>
                    <p><b>Data do Pedido:</b> 16/05/2021 às 10:23:34</p>
                    <p><b>Status do Pedido:</b> <a href="#">Aguardando Sua Análise</a></p>
                    <p><b>Mensagens:</b> <a href="#">02 para Responder (Clique Aqui)</a></p>
                </div>
                <div class="order-historic">
                    <div class="order-historic-one">
                        <h4>Histórico do Pedido / Orientações:</h4>
                        <p>Data: 16/05/2021 às 10: 23: 34 | Status: Aguardando Sua Análise</p>
                        <button class="btn-green">ACEITAR PEDIDO</button>
                        <button class="btn-red">REJEITAR PEDIDO</button>
                    </div>
                    <div class="order-historic-two">
                        <label for="">Código de Rastreio:</label>
                        <input type="text" placeholder="Digite o código aqui..."/>
                        <button class="btn-green">INSERIR</button>
                        <button class="btn-edit"><i class="fas fa-edit"></i>editar</button>
                    </div>
                </div>
            </div>
            <div class="btn-change-page">
                <button></button>
                <button>1</button>
                <button> </button>
            </div>
        </div>
    </section>
    <section class="wishes">
        <div class="wishes-header">
            <i class="fas fa-book fa-4x"></i>
            <h1>Livros que eu pedi:</h1>
        </div>
        <div class="full-table">
            <table>
                <tr class="header-table">
                    <th class="image">Imagem:</th>
                    <th class="title">Título:</th>
                    <th class="person">Dono(a) do Livro:</th>
                    <th class="date">Data:</th>
                    <th class="status">Status:</th>
                    <th class="code">Código de Rastreio:</th>
                    <th class="acion">Ação:</th>
                </tr>
                <tr class="table">
                    <td><a href="#" class="capa-livro"></a></td>
                    <td>Pensamento Crítico: O Poder da Lógica e da Argumentação</td>
                    <td><i class="fas fa-user-circle fa-2x"></i> Zacarias dos Trapalhões e Companhia
                        <button class="more-details"><i class="fas fa-plus-circle"></i>Mais Detalhes</button>
                    </td>
                    <td>11/01/2021</td>
                    <td>Ag. Sua Confirmação</td>
                    <td><a href="#">OM699999611BR</a></td>
                    <td>
                        <button class="btn-green">LIVRO CHEGOU</button>
                        <button class="btn-red">TIVE PROBLEMAS</button>
                    </td>
                </tr>
            </table>

            <div id="details-wishes" class="details">
                <div class="order-details">
                    <h3>Detalhes do Pedido:</h3>
                    <p><b>Proprietário(a):</b> Zacarias dos Trapalhões e Companhia</p>
                    <p><b>Localização:</b> Rio de Janeiro / RJ</p>
                    <p><b>Título do Livro:</b> Pensamento Crítico: O poder da Lógica e da argumentação</p>
                    <p><b>Data do Pedido:</b> 16/05/2021 às 10:23:34</p>
                    <p><b>Status do Pedido:</b><a href="#"> Aguardando Sua Confirmação</a></p>
                    <p><b>Código de Rastreio:</b> OM699999611BR</p>
                    <p><b>Mensagens:</b> <a href="#">Sem mensagens para responder (Clique Aqui)</a></p>
                </div>
                <div class="order-historic">
                    <div class="order-historic-one">
                        <h4>Histórico do Pedido / Orientações:</h4>
                        <p><b>Data:</b> 16/05/2021 às 11:54:13 | Status: Pedido de Troca Confirmado</p>
                        <p><b>Data:</b> 20/05/2021 às 18:45:12 | Status: Código de Rastreio Inserido - Aguardando
                            Sua
                            Confirmação</p>
                        <button class="btn-green">LIVRO CHEGOU</button>
                        <button class="btn-red">TIVE PROBLEMAS</button>
                    </div>
                </div>
            </div>
            <div class="btn-change-page">
                <button></button>
                <button>1</button>
                <button>  </button>
            </div>
        </div>
    </section>


    <div class="modal">
        <div class="modal-orders accept-order">
            <i class="fas fa-exclamation-circle fa-7x"></i>
            <h3>Tem certeza?</h3>
            <p>Você não poderá desfazer esta ação.</p>
            <div class="button">
                <button class="btn-red">Cancelar</button>
                <button class="btn-green">Confirmar</button>
            </div>
        </div>
    </div>

    <div class="modal">
        <div class="modal-orders reject-order">
            <i class="fas fa-exclamation-circle fa-7x"></i>
            <h3>Tem certeza?</h3>
            <p>Você não poderá desfazer esta ação.</p>
             <p>   Rejeitar pedidos pode afetar sua reputação.</p>
            <div class="select">
                <label for="">Selecione um motivo para rejeição:</label>
                <select name="" id="">
                    <option value="" selected disabled>Selecione uma opção...</option>
                </select>
            </div>
            <div class="button">
                <button class="btn-red">Desistir</button>
                <button class="btn-green">Confirmar Rejeição</button>
            </div>
        </div>
    </div>


    <div class="modal">
        <div class="modal-orders confirmed-order">
            <i class="far fa-check-circle fa-7x"></i>
            <h3>Pedido Confirmado!</h3>
            <p>Você tem até o dia <span class="date">20/05/2021</span></p>
            <p>  para informar o código de rastreio do livro.</p>
        </div>
    </div>

    <div class="modal">
        <div class="modal-orders confirmed-reject">
            <i class="far fa-check-circle fa-7x"></i>
            <h3>Rejeição Confirmada!</h3>
            <p>Rejeitar pedidos pode afetar sua reputação.</p>
        </div>
    </div>


    <div class="modal">
        <div class="modal-orders book-arrived">
            <i class="fas fa-exclamation-circle fa-7x"></i>
            <h3>O livro chegou?</h3>
            <p>Por favor, confirme para finalizarmos esta troca e liberarmos o </p>
            <p>   crédito para ex-proprietário(a) do livro.</p>
            <div class="button">
                <button class="btn-red">Cancelar</button>
                <button class="btn-green">Confirmar</button>
            </div>
        </div>
    </div>

    <div class="modal">
        <div class="modal-orders book-problem">
            <i class="fas fa-exclamation-circle fa-7x"></i>
            <h3>Está com Problemas?</h3>
            <p>Por favor, nos confirme.</p>
            <p>   O sistema irá incluir um alerta no pedido e tentaremos ajudar.</p>
            <p>   Não se esqueça de avisar o proprietário(a) também.</p>
            <div class="button">
                <button class="btn-red">Cancelar</button>
                <button class="btn-green">Confirmar</button>
            </div>
        </div>
    </div>

    <div class="modal">
        <div class="modal-orders exchange-completed">
            <i class="far fa-check-circle fa-7x"></i>
            <h3>Troca Finalizada!</h3>
            <p>Obrigado por confirmar! Continue trocando</p>
               <p>livros para ter sempre uma estante renovada.</p>
        </div>
    </div>

    <div class="modal">
        <div class="modal-orders confirmed-problem">
            <i class="far fa-check-circle fa-7x"></i>
            <h3>Ok, confirmado!</h3>
            <p>Veja o que mais pode deve fazer:</p>
            <div class="button">
                <button class="btn-blue">Avise a gente!</button>
                <button class="btn-rose">Avise o dono(a) do livro</button>
            </div>
        </div>
    </div>


    </main>
  );
}

export default App;
