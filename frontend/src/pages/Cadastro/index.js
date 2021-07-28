import { StyledCadastro } from "./StyledCadastro";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { getToken } from "../../services/auth"
import { useHistory } from "react-router-dom"

function Cadastro() {
  const [mustShow, setMustShow] = useState(true);
  
  // dados pessoais
  const [ nome, setNome ] = useState("")
  const [ email, setEmail ] = useState("")
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [contato, setContato] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [genero, setGenero] = useState("");
  

  //endereço
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const history = useHistory()

  function formatarData(data_nasc) {
    return data_nasc.split("/")[2] + "/" + data_nasc.split("/")[1] + "/" + data_nasc.split("/")[0]
  }

  async function trazerDadosDoCadastro() {
    const token = getToken()
    const { data } = await api.get("/usuarios", {
      headers: { authorization: `Bearer ${token}` }
    })
    setNome(data.nome)
    setEmail(data.email)
  }

  async function incluirDadosPessoais(event) {
    event.preventDefault()
    const token = getToken()
    await api.post("/usuarios/adicionar-dados-pessoais", { 
      sobrenome: sobrenome, 
      cpf: cpf, 
      celular: contato, 
      data_nasc: formatarData(nascimento),
      sexo: genero
    }, 
    {
      headers: { authorization: `Bearer ${token}` }
    }
    )
  }

  async function incluirEndereco(event) {
    event.preventDefault()
    const token = getToken()
    await api.post("/enderecos", { 
      cep: cep, 
      logradouro: logradouro, 
      numero: numero, 
      bairro: bairro, 
      complemento: complemento, 
      cidade: cidade, 
      estado: estado
    }, 
    {
      headers: { authorization: `Bearer ${token}` }
    }
    )
  }

  function onClickHide (){
    setMustShow(!mustShow);
  }

  function voltarParaHome() {
    history.push("/")
  }

  useEffect(() => trazerDadosDoCadastro(), [])

  return (
    <StyledCadastro>
      <main>
        <section className="cadChamada">
          <div className="cadastroChamada">
            <p>Aeee! Seja Bem-Vindx ao Nosso Clube!</p>
          </div>
          <div className="cads">
            <div className="finalizeCad">
              <h2>Finalize seu Cadastro</h2>
              <p>se não quiser terminar agora, tudo bem, mas será</p>
              <p> obrigatório na hora de pegar um livro...</p>
              <button type="button" onClick ={onClickHide}>TERMINAR AGORA</button>
            </div>
            <div className="finalizeDepois">
              <h2>Prefiro fazer isso depois...</h2>
              <button type="button" onClick={voltarParaHome}>
                <a className = "voltarHome">VOLTAR PARA HOME</a>
              </button>
            </div>
          </div>
        </section>
        {!mustShow && (
        <section className="formsCadastros">
          <h2>Finalizando Cadastro</h2>
          <div className="forms">
            <div>
              <p> Passo 1: INCLUIR DADOS PESSOAIS</p>
            </div>
            <div className="form1">
              <form onSubmit={(event) => incluirDadosPessoais(event)}>
                <div className="agregadorInput">
                  <div className="agregadorLabelInput">
                    <label for="primeiroNome">Primeiro Nome:</label>
                    <input
                      type="text"
                      name="primeiroNome"
                      id="primeiroNome"
                      value={nome}
                      disabled
                    />
                  </div>
                  <div className="agregadorLabelInput">
                    <label for="sobrenome">Sobrenome:</label>
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
                <div className="agregadorLabelInput">
                  <label for="email">E-mail:</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    disabled
                  />
                </div>
                <div className="agregadorInput">
                  <div className="agregadorLabelInput">
                    <label for="cpf">CPF:</label>
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
                    <label for="contato">Celular/telefone:</label>
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
                    <label for="nascimento">Data de nascimento:</label>
                    <input
                      type="text"
                      name="nascimento"
                      id="contato"
                      placeholder="DD/MM/AAAA"
                      value={nascimento}
                      onChange={(e) => setNascimento(e.target.value)}
                    />
                  </div>
                  <div className="agregadorLabelInput">
                    <label for="genero">Gênero:</label>
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
                      <option value="femt">Mulher Transgênero</option>
                      <option value="masct">Homem Transgênero</option>
                      <option value="null">
                        Prefiro não responder
                      </option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button type="submit">SALVAR DADOS</button>
                </div>
              </form>
            </div>
            <div className="form2">
              <div>
                <p> Passo 2: INCLUIR ENDEREÇO</p>
              </div>
              <form onSubmit={(event) => incluirEndereco(event)}>
                <div className="agregadorLabelInput">
                  <label for="cep">Digite seu CEP:</label>
                  <input
                    type="text"
                    name="cep"
                    id="cep"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </div>
                <div className="agregadorLabelInput">
                  <label for="logradouro">Logradouro:</label>
                  <input
                    type="text"
                    name="logradouro"
                    id="logradouro"
                    placeholder="Por exemplo: Rua João Da Silva"
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                  />
                </div>
                <div className="agregadorLabelInput">
                  <label for="num">Número:</label>
                  <input
                    type="text"
                    name="num"
                    id="num"
                    placeholder="Digite aqui"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                  />
                </div>
                <div className="agregadorLabelInput">
                  <label for="bairro">Bairro:</label>
                  <input
                    type="text"
                    name="bairro"
                    id="bairro"
                    placeholder="Por exemplo: Bairro Copacabana"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </div>
                <div className="agregadorLabelInput">
                  <label for="complemento">Complemento:</label>
                  <input
                    type="text"
                    name="complemento"
                    id="complemento"
                    placeholder="Por exemplo: Apartamento 121 Bloco D"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                  />
                </div>
                <div className="agregadorInput">
                  <div className="agregadorLabelInput">
                    <label for="cidade">Cidade:</label>
                    <input
                      type="text"
                      name="cidade"
                      id="cidade"
                      placeholder="Digite sua cidade"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                    />
                  </div>
                  <div className="agregadorLabelInput">
                    <label for="estados">Estado:</label>
                    <input
                      type="text"
                      name="estados"
                      id="estados"
                      placeholder="Digite seu Estado"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button type="submit">SALVAR ENDEREÇO</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        )}
      </main>
    </StyledCadastro>
  );
}

export default Cadastro;
