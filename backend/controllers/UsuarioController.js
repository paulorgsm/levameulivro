require("dotenv").config();
const UsuarioService = require("../services/UsuarioService");
const jwt = require("jsonwebtoken");

const UsuarioController = {
  criarConta: async (req, res) => {
    const { nome, email, senha } = req.body;

    const exist = await UsuarioService.existUsuario(email);

    if (exist) {
      return res
        .status(401)
        .send({ mensage: "O usuario já existe no banco de dados" });
    }

    const token = await UsuarioService.createUsuario(nome, email, senha[0]);

    return res
      .status(200)
      .send({ mensagem: "Usuario criado com sucesso", token: token });
  },
  addDadosPessoais: async (req, res) => {
    const { sobrenome, cpf, celular, data_nasc, sexo } = req.body;

    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const id_usuario = decoded.id;

    const numero = await UsuarioService.addOutrosDados(
      id_usuario,
      sobrenome,
      cpf,
      celular,
      data_nasc,
      sexo
    );

    if (numero == 1) {
      return res
        .status(200)
        .send({ mensagem: "Dados pessoais adicionados com sucesso" });
    }

    return res.status(401).send({ mensagem: "Erro na autenticação" });
  },
  atualizarDados: async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const id_usuario = decoded.id;

    const { filename } = req.file;

    const { nome, senha, email, sobrenome, cpf, celular, data_nasc, sexo } =
      req.body;

    const foto_usuario = `${process.env.HOST_URL}/uploads/usuarios/${filename}`;

    const numero = await UsuarioService.updateUsuario(
      id_usuario,
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

    if (numero == 1) {
      return res
        .status(200)
        .send({ mensagem: "Usuario atualizado com sucesso" });
    }

    return res.status(401).send({ mensagem: "Erro na autenticação" });
  },
  deletarConta: async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const id_usuario = decoded.id;

    const numero = await UsuarioService.destroyUsuario(id_usuario);

    if (numero == 1) {
      return res.status(200).send({ mensagem: "Usuario deletado com sucesso" });
    }

    return res.status(401).send({ mensagem: "Erro ao deletar usuario" });
  },
  fazerLogin: async (req, res) => {
    const { email, senha } = req.body;

    const token = await UsuarioService.authUsuario(email, senha);

    if (token == null) {
      return res.status(401).send({ mensagem: "Dados inválidos" });
    }

    return res
      .status(200)
      .send({ mensagem: "Usuario autenticado com sucesso", token: token });
  },
};

module.exports = UsuarioController;
