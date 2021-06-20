const bcrypt = require("bcrypt");
const db = require("../database/models");

const usuarioService = {
  getAllUsuario: async () => {
    const usuarioList = await db.Usuario.findAll();

    return usuarioList;
  },
  getUsuarioById: async (id) => {
    const usuario = await db.Usuario.findOne({
      where: { id: id },
    });

    return usuario;
  },
  createUsuario: async (nome, email, senha) => {
    const usuario = await db.Usuario.create({
      nome: nome,
      email: email,
      senha: bcrypt.hashSync(senha, 10),
      saldo: 0,
    });

    return usuario;
  },
  addOutrosDados: async (id, sobrenome, cpf, celular, data_nasc, sexo) => {
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

    var arrData = data_nasc.split("/");

    var stringFormatada = arrData[2] + "-" + arrData[1] + "-" + arrData[0];

    const usuario = await db.Usuario.update(
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

    return usuario;
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
    sexo
  ) => {
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

    var arrData = data_nasc.split("/");

    var stringFormatada = arrData[2] + "-" + arrData[1] + "-" + arrData[0];

    const usuario = await db.Usuario.update(
      {
        nome: nome,
        senha: senha,
        email: email,
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

    return usuario;
  },
  destroyUsuario: async (id) => {
    const usuario = await db.Usuario.destroy({
      where: { id: id },
    });

    return usuario;
  },
};

module.exports = usuarioService;
