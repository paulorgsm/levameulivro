const bcrypt = require("bcrypt");
const db = require("../database/models");

const usuarioService = {
  getAll: async () => {
    return await db.Usuario.findAll();
  },
  getById: async (id) => {
    return await db.Usuario.findByPk(id);
  },
  getByIdAndAttribute: async (id, attribute) => {
    return await db.Usuario.findByPk(id, { attributes: [attribute] });
  },
  createUsuario: async (nome, email, senha) => {
    return await db.Usuario.create({
      nome: nome,
      email: email,
      senha: bcrypt.hashSync(senha, 10),
      saldo: 0,
    });
  },
  addOutrosDados: async (id, sobrenome, cpf, celular, data_nasc, sexo) => {
    const arrData = data_nasc.split("/");
    const stringFormatada = arrData[2] + "-" + arrData[1] + "-" + arrData[0];

    switch (sexo) {
      case "fem":
        sexo = 1;
      case "masc":
        sexo = 2;
      case "mulherTrans":
        sexo = 3;
      case "homenTrans":
        sexo = 4;
      case "naoResponder":
        sexo = 5;
      case "outros":
        sexo = 6;
    }

    return await db.Usuario.update(
      {
        sobrenome: sobrenome,
        cpf: cpf,
        celular: celular,
        data_nasc: stringFormatada,
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
    const arrData = data_nasc.split("/");
    const stringFormatada = arrData[2] + "-" + arrData[1] + "-" + arrData[0];

    switch (sexo) {
      case "fem":
        sexo = 1;
      case "masc":
        sexo = 2;
      case "mulherTrans":
        sexo = 3;
      case "homenTrans":
        sexo = 4;
      case "naoResponder":
        sexo = 5;
      case "outros":
        sexo = 6;
    }

    return await db.Usuario.update(
      {
        nome: nome,
        senha: bcrypt.hashSync(senha, 10),
        email: email,
        sobrenome: sobrenome,
        cpf: cpf,
        celular: celular,
        data_nasc: stringFormatada,
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
};

module.exports = usuarioService;
