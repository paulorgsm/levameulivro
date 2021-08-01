require("dotenv").config();
const bcrypt = require("bcrypt");
const db = require("../database/models");
const jwt = require("jsonwebtoken");
const { Op, QueryTypes } = require("sequelize");
const { sequelize } = require("../database/models");

const UsuarioService = {
  createUsuario: async (nome, email, senha) => {
    const usuario = await db.Usuario.create({
      nome: nome,
      email: email,
      senha: await bcrypt.hash(senha, 10),
      saldo: 0,
    });

    return {
      token: jwt.sign(
      {
        id: usuario.id,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "6h",
      }
    ),
    foto: usuario.foto_usuario,
    nome: usuario.nome
  };
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
        senha: await bcrypt.hash(senha, 10),
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
  existAnotherUserWithTheSameEmail: async (id, email) => {
    const exist = await db.Usuario.findOne({ where: { id: {[Op.ne]: id}, email: email } });


    if (exist === null) {
      return false;
    }
    return true;
  },
  authUsuario: async (email, senha) => {
    const usuario = await db.Usuario.findOne({
      where: { email: email },
    });

    if (usuario === null) {
      return null;
    }

    const boolean = await bcrypt.compare(senha, usuario.senha);

    if (boolean) {
      return {
        token: jwt.sign(
        {
          id: usuario.dataValues.id,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "6h",
        }
      ),
      foto: usuario.dataValues.foto_usuario,
      nome: usuario.dataValues.nome
    };
    }
    return null;
  },
  getUsuario: async (id) => {
    return await db.Usuario.findByPk(id, 
      { 
        attributes: [ "nome", "sobrenome", "email", "cpf", "celular", "data_nasc", "sexo" ] 
      }
    )
  },
  getLivroByUsuario: async (id, limit, offset) => {
    return await sequelize.query(
      `SELECT L.id, L.autor, L.nome_livro, L.editora, L.ano_pub, L.idioma, L.num_paginas, L.estado_livro, L.conservacao, L.materia, L.nivel, L.isbn, L.sinopse, L.foto_livro1, L.foto_livro2, L.foto_livro3, L.foto_livro4, L.foto_livro5 FROM livros AS L INNER JOIN USUARIOS WHERE USUARIOS.ID = ? LIMIT ? OFFSET ?`,
      {
        replacements: [id, limit, offset],
        type: QueryTypes.SELECT
      }
    )
  },
  getEnderecoByUsuario: async (id) => {
    return await db.Usuario.findByPk(id, 
      {
        attributes: [],
        include: "enderecos"
      }
    )
  }
}

module.exports = UsuarioService;