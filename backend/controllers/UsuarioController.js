const usuarioService = require("../services/usuarioService");

const UsuarioController = {
  indexAll: async (req, res) => {
    const usuarioList = await usuarioService.getAllUsuario();

    return res.json(usuarioList);
  },
  indexById: async (req, res) => {
    const { id } = req.params;

    const usuario = await usuarioService.getUsuarioById(id);

    return res.json(usuario);
  },
  create: async (req, res) => {
    const { nome, email, senha } = req.body;

    if (senha[0] != senha[1]) {
      res.status(400).send("As senhas não são iguais!");
      return;
    }

    const usuario = await usuarioService.createUsuario(nome, email, senha[0]);

    return res.json(usuario);
  },
  addDadosPessoais: async (req, res) => {
    const { id_usuario, sobrenome, cpf, celular, data_nasc, sexo } = req.body;

    const usuario = await usuarioService.addOutrosDados(
      id_usuario,
      sobrenome,
      cpf,
      celular,
      data_nasc,
      sexo
    );

    return res.json(usuario);
  },
  update: async (req, res) => {
    const { nome, senha, email, sobrenome, cpf, celular, data_nasc, sexo } =
      req.body;

    const { id } = req.params;

    const usuario = await usuarioService.updateUsuario(
      id,
      nome,
      senha,
      email,
      sobrenome,
      cpf,
      celular,
      data_nasc,
      sexo
    );

    return res.json(usuario);
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    const usuario = await usuarioService.destroyUsuario(id);

    return res.json(usuario);
  },
};

module.exports = UsuarioController;
