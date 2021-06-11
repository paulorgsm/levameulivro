const path = require("path");
const viewCadastro = path.join(__dirname, "../views/cadastro.html");
const usuarioService = require("../services/usuarioService");
const enderecoService = require("../services/enderecoService");

const CadastroController = {
  index: (req, res) => {
    res.sendFile(viewCadastro);
  },
  criarConta: async (req, res) => {
    const { nome, email, senha } = req.body;

    if (senha[0] != senha[1]) {
      res.send("As senhas não são iguais!");
    }

    const { id } = await usuarioService.criarUsuario(nome, email, senha[0]);

    req.session.teste = id;

    res.redirect("/cadastro");
  },
  adicionarDadosPessoais: async (req, res) => {
    const { sobrenome, cpf, contato, nascimento, genero } = req.body;

    const { id } = req.session.teste;

    await usuarioService.adicionarOutrosDados(
      id,
      sobrenome,
      cpf,
      contato,
      nascimento,
      genero
    );

    res.redirect("/cadastro");
  },
  adicionarEndereco: async (req, res) => {
    const { cep, logradouro, num, bairro, complemento, cidade, estados } =
      req.body;

    const { id } = req.session.teste;

    await enderecoService.criarEndereco(
      cep,
      logradouro,
      num,
      bairro,
      complemento,
      cidade,
      estados,
      id
    );

    res.redirect("/cadastro");
  },
};

module.exports = CadastroController;
