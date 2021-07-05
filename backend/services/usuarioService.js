require("dotenv").config();
const bcrypt = require("bcrypt");
const db = require("../database/models");
const jwt = require("jsonwebtoken");

const UsuarioService = {
  createUsuario: async (nome, email, senha) => {
    const usuario = await db.Usuario.create({
      nome: nome,
      email: email,
      senha: bcrypt.hashSync(senha, 10),
      saldo: 0,
    });

    return jwt.sign({ id: usuario.id }, process.env.JWT_KEY, {
      expiresIn: "10min",
    });
  },
  addOutrosDados: async (id, sobrenome, cpf, celular, data_nasc, sexo) => {
    return await db.Usuario.update(
      {
        sobrenome: sobrenome,
        cpf: cpf,
        celular: celular,
        data_nasc: data_nasc,
        sexo: sexo,
      },
      {
        where: { id: id },
      }
    );
  },
  updateUsuario: async (
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
  ) => {
    return await db.Usuario.update(
      {
        nome: nome,
        senha: bcrypt.hashSync(senha, 10),
        email: email,
        sobrenome: sobrenome,
        cpf: cpf,
        celular: celular,
        data_nasc: data_nasc,
        sexo: sexo,
        foto_usuario: foto_usuario,
      },
      {
        where: { id: id },
      }
    );
  },
  destroyUsuario: async (id) => {
    return await db.Usuario.destroy({
      where: { id: id },
    });
  },
  existUsuario: async (email) => {
    const exist = await db.Usuario.findOne({ where: { email: email } });

    if (exist === null) {
      return false;
    }
    return true;
  },
  authUsuario: async (email, senha) => {
    const usuario = await db.Usuario.findOne({
      where: { email: email },
    });

    const boolean = bcrypt.compareSync(senha, usuario.dataValues.senha);

    if (boolean) {
      return jwt.sign({ id: usuario.dataValues.id }, process.env.JWT_KEY, {
        expiresIn: "1h",
      });
    }
    return null;
  },
};

module.exports = UsuarioService;
