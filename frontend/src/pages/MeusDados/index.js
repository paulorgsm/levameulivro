import { StyledMeusDados } from "./StyledMeuDados";
import { FaRegEdit , FaTrash } from "react-icons/fa";
import {  BsPlusCircleFill} from "react-icons/bs";
import { getPhoto, getToken } from "../../services/auth"
import { useEffect, useState } from 'react'
import meusDadosImg from "../../assets/img/meusDados.svg"
import carregarFotoImg from "../../assets/img/carregarFoto.svg"
import api from "../../services/api"

function MeusDados() {
  const [ nome, setNome ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ contato, setContato ] = useState("")
  const [ senha, setSenha ] = useState("")
  const [ nascimento, setNascimento ] = useState("")
  const [ cpf, setCpf ] = useState("")
  const [ genero, setGenero ] = useState("")
  const [ foto, setFoto ] = useState(getPhoto())
  const [ sobrenome, setSobrenome ] = useState("")
  
  useEffect(() => {
    trazerDadosPredefinidos()
  }, [])
  
  async function trazerDadosPredefinidos() {
    const token = getToken()
    const { data } = await api.get("/usuarios", {
      headers: { authorization: `Bearer ${token}` }
    })
    setNome(data.nome)
    setEmail(data.email)
    setSobrenome(data.sobrenome)
    setCpf(data.cpf)
    data.data_nasc ? setNascimento(converterData(data.data_nasc)): setNascimento("")
    setContato(data.celular)
    setGenero(data.sexo)
  }
  
  function formatarData(data_nasc) {
    return data_nasc.split("/")[2] + "/" + data_nasc.split("/")[1] + "/" + data_nasc.split("/")[0]
  }

  function converterData(data_nasc) {
    return data_nasc.split("-")[2] + "/" + data_nasc.split("-")[1] + "/" + data_nasc.split("-")[0]
  }
  
  async function alterarDados(event){
    event.preventDefault()
    var data = new FormData();
    const token = getToken()
    data.append('nome', nome)
    data.append('email', email)
    data.append('sobrenome', sobrenome)
    data.append('cpf', cpf)
    data.append('celular', contato)
    data.append('data_nasc', formatarData(nascimento))
    data.append('sexo', genero)
    data.append('foto_usuario', foto)
    data.append('senha', senha)
    await api.put("/usuarios", data, 
    {
      headers: { authorization: `Bearer ${token}`}
    }
    )
  }

  return (
    <StyledMeusDados>
      <main>
        <section className="secao">
          <div className="paragrafo">
            <p>Aeee! Seja Bem-Vindx ao Nosso Clube!</p>
          </div>
          <div className="meusDados">
            <img src={meusDadosImg} alt="" />
            <h2>Meus Dados</h2>
          </div>
          <div className="meusDadosPrincipal">
            <div className="forms">
              <div>
                <p>ALTERAR DADOS PESSOAIS</p>
              </div>
              <form onSubmit={alterarDados}>
                <div className="agregadorInput">
                  <div className="agregadorLabelInput">
                    <label for="primeiroNome">Primeiro Nome</label>
                    <input
                      type="text"
                      name="primeiroNome"
                      id="primeiroNome"
                      placeholder="Digite seu nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="agregadorLabelInput">
                    <label for="sobrenome">Sobrenome</label>
                    <input
                      type="text"
                      name="sobrenome"
                      id="sobrenome"
                      placeholder="Digite seu sobrenome"
                      value={sobrenome}
                      onChange={(e) => setSobrenome(e.target.value)}
                    />
                  </div>
                </div>
                <div className="agregadorInput">
                  <div className="agregadorLabelInput">
                    <label for="email">E-mail</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="levameulivro@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="agregadorLabelInput">
                    <label for="senha">senha</label>
                    <input
                      type="password"
                      name="senha"
                      id="senha"
                      placeholder="Digite uma nova senha..."
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </div>
                </div>
                <div className="agregadorInput">
                  <div className="agregadorLabelInput">
                    <label for="cpf">CPF</label>
                    <input
                      type="text"
                      name="cpf"
                      id="cpf"
                      placeholder="Digite seu cpf"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                    />
                  </div>
                  <div className="agregadorLabelInput">
                    <label for="contato">Celular/telefone</label>
                    <input
                      type="text"
                      name="contato"
                      id="contato"
                      placeholder="Não esqueça do DDD"
                      value={contato}
                      onChange={(e) => setContato(e.target.value)}
                    />
                  </div>
                </div>
                <div className="agregadorInput">
                  <div className="agregadorLabelInput">
                    <label for="nascimento">Data de nascimento</label>
                    <input
                      type="text"
                      name="nascimento"
                      id="nascimento"
                      placeholder="DD/MM/AAAA"
                      value={nascimento}
                      onChange={(e) => setNascimento(e.target.value)}
                    />
                  </div>
                  <div className="agregadorLabelInput">
                    <label for="genero">Gênero</label>
                    <select
                      name="genero"
                      id="genero"
                      placeholder="Escolha uma opção"
                      value={genero}
                      onChange={(e) => setGenero(e.target.value)}
                    >
                      {" "}
                      <option value="fem">Mulher cisgênero</option>
                      <option value="masc">Homem cisgênero</option>
                      <option value="femT">Mulher Transgênero</option>
                      <option value="mascT">Homem Transgênero</option>
                      <option value="null">
                        Prefiro não responder
                      </option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>
                <div className="carregarFoto">
                  <label for="foto"><img src={carregarFotoImg} alt="" /></label>
                  <input id="foto"
                    type="file" 
                    name="arquivos" 
                    accept="image/png, image/jpeg"
                    onChange={(e) => setFoto(e.target.files[0])}
                  />
                  <div>
                    <p>Incluir/Mudar minha foto</p>
                  </div>
                </div>
                <div>
                  <button className="button1" type="submit">
                    SALVAR DADOS
                  </button>
                </div>
              </form>
              <div>
                <div className="forms padding">
                  <p>ALTERAR INCLUIR ENDEREÇO:</p>
                  <div className="retangulo">
                    <div className="check">
                      <input type="checkbox" />
                    </div>
                    <div className="endereco">
                      <p>
                        <strong>Endereço:</strong> Estr. dos Bandeirantes, 6700,{" "}
                      </p>
                      <p> Bairro Jacarepaguá. Rio de Janeiro - RJ. </p>
                      <p> CEP: 22780-086 </p>
                      <span className="btns-endereco">
                        <button type="submit" className="btn-editar">
                          <span className="material-icons">
                           < FaRegEdit size={20} />
                            delete</span>
                          <span className="material-icons">
                          < FaTrash size={20} />
                            apagar</span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <button type="submit" className="btn-incluir">
                    <span className=" material-icons1">
                    < BsPlusCircleFill size={20} />
                    </span>
                    <span className="material-icons2">Incluir Novo Endereço</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </StyledMeusDados>
  );
}

export default MeusDados;
