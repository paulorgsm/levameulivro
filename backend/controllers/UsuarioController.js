const usuarioService = require("../services/usuarioService");

const UsuarioController = {
  criar: async (req, res) => {
    const { nome, email, senha } = req.body;

    if (senha[0] != senha[1]) {
      res.send("As senhas não são iguais!");
    }

    const { id } = await usuarioService.criarUsuario(nome, email, senha[0]);

    req.session.id_usuario = id;

    console.log(req.session.id_usuario);

    res.redirect("/cadastro");
  },
  adicionarDadosPessoais: async (req, res) => {
    const { sobrenome, cpf, contato, nascimento, genero } = req.body;

    const { id_usuario } = req.session;

    await usuarioService.adicionarOutrosDados(
      id_usuario,
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
