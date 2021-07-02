const livroService = require("../services/LivroService");
const usuarioService = require("../services/UsuarioService");

const UsuarioController = {
  create: async (req, res) => {
    const { nome, email, senha } = req.body;

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
    const { id } = req.params;

    const { filename } = req.file;

    const { nome, senha, email, sobrenome, cpf, celular, data_nasc, sexo } =
      req.body;

    const foto_usuario = `http://localhost:3000/uploads/usuarios/${filename}`;

    const usuario = await usuarioService.updateUsuario(
      id,
      nome,
      senha,
      email,
      sobrenome,
      cpf,
      celular,
      data_nasc,
      sexo,
      foto_usuario
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
