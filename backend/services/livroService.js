const db = require("../database/models");
const { Op } = require("sequelize");

const livroService = {
  createLivro: async (
    autor,
    nome_livro,
    editora,
    ano_pub,
    idioma,
    num_paginas,
    estado_livro,
    conservacao,
    materia,
    nivel,
    isbn,
    sinopse,
    id_usuario,
    foto_livro1,
    foto_livro2,
    foto_livro3,
    foto_livro4,
    foto_livro5
  ) => {
    return await db.Livro.create({
      autor,
      nome_livro,
      editora,
      ano_pub,
      idioma,
      num_paginas,
      estado_livro,
      conservacao,
      materia,
      nivel,
      isbn,
      sinopse,
      id_usuario,
      foto_livro1,
      foto_livro2,
      foto_livro3,
      foto_livro4,
      foto_livro5,
    });
  },
  getAll: async () => {
    return await db.Livro.findAll();
  },
  getById: async (id) => {
    return await db.Livro.findByPk(id);
  },
  getByNameOrAutorOrTag: async (nome, autor, tag) => {
    return await db.Livro.findAndCountAll({
      where: {
        [Op.or]: [
          { nome_livro: { [Op.startsWith]: nome } },
          { autor: { [Op.startsWith]: autor } },
          { isbn: { [Op.startsWith]: tag } },
        ],
      },
      attributes: ["id", "nome_livro", "materia", "foto_livro1"],
      include: {
        model: db.Usuario,
        as: "usuarios",
        attributes: ["nome"],
        include: {
          model: db.Endereco,
          as: "enderecos",
          attributes: ["cidade", "estado"],
        },
      },
    });
  },
};

module.exports = livroService;
