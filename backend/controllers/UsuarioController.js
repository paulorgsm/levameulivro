const usuarioService = require("../services/usuarioService");

const UsuarioController = {
  criar: async (req, res) => {
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
};

module.exports = UsuarioController;
