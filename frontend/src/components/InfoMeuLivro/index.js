import imgEditar from "../../assets/img/editar.svg"
import imgLixeira from "../../assets/img/lixeira.svg"
import { StyledInfoMeuLivro } from "./StyledInfoMeuLivro";
import { Link } from "react-router-dom";
import api from "../../services/api"
import { getToken } from "../../services/auth"


function InfoMeuLivro(props) {
    async function deletarLivro(id) {
        const token = getToken()
        await api.delete(`/livros/${id}`, { headers: { authorization: `Bearer ${token}` }})
        props.onDeleteLivro()
    }
    
    return (
        <StyledInfoMeuLivro>
        <table className="cadTabela">
        <thead>
            <tr>
                <th>Imagem:</th>
                <th>Título:</th>
                <th>Autor:</th>
                <th>Ano:</th>
                <th>Mensagens:</th>
                <th>Ação:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <img src={props.imagem} className="imagem-livro" alt=""/>
                </td>
                <td>{props.titulo}</td>
                <td>{props.autor}</td>
                <td>{props.ano}</td>
                <td><Link to="/mensageria" className="link-msg">02 para responder</Link></td>
                <td>
                    <div className="bg-acao">
                      <button>
                          <img src={imgEditar} alt=""/>
                          <span>editar</span>
                      </button>
                      <button onClick={() => deletarLivro(props.id)}>
                          <img src={imgLixeira} alt=""/>
                          <span>apagar</span>
                      </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table> 

</StyledInfoMeuLivro>
);
}

export default InfoMeuLivro;