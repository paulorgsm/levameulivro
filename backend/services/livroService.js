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
    const livros = await db.Livro.findAll({
      attributes: [
        "id",
        "autor",
        "nome_livro",
        "editora",
        "ano_pub",
        "idioma",
        "num_paginas",
        "estado_livro",
        "conservacao",
        "materia",
        "nivel",
        "isbn",
        "sinopse",
        "foto_livro1",
        "foto_livro2",
        "foto_livro3",
        "foto_livro4",
        "foto_livro4",
      ],
    });

    return livros;
  },
  getById: async (id) => {
    return await db.Livro.findByPk(id, {
      attributes: [
        "id",
        "autor",
        "nome_livro",
        "editora",
        "ano_pub",
        "idioma",
        "num_paginas",
        "estado_livro",
        "conservacao",
        "materia",
        "nivel",
        "isbn",
        "sinopse",
        "foto_livro1",
        "foto_livro2",
        "foto_livro3",
        "foto_livro4",
        "foto_livro4",
      ],
    });
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
      attributes: [
        "id",
        "autor",
        "nome_livro",
        "editora",
        "ano_pub",
        "idioma",
        "num_paginas",
        "estado_livro",
        "conservacao",
        "materia",
        "nivel",
        "isbn",
        "sinopse",
        "foto_livro1",
        "foto_livro2",
        "foto_livro3",
        "foto_livro4",
        "foto_livro4",
      ],
    });
  },
};

module.exports = livroService;
