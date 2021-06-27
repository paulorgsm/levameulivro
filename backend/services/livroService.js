const db = require("../database/models");

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
    id_usuario,
    isbn,
    sinopse,
    foto_livro
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
      id_usuario,
      isbn,
      sinopse,
      foto_livro,
    });
  },
  updateLivro: async (
    id,
    nome_livro,
    autor,
    editora,
    ano_pub,
    idioma,
    num_paginas,
    estado_livro,
    conservacao,
    materia,
    nivel,
    id_usuario,
    isbn,
    sinopse,
    foto_livro
  ) => {
    return await db.Livro.update(
      {
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
        id_usuario,
        isbn,
        sinopse,
        foto_livro,
      },
      {
        where: { id: id },
      }
    );
  },
  destroyLivro: async (id) => {
    return await db.Livro.destroy({ where: { id: id } });
  },
  getAll: async () => {
    return await db.Livro.findAll();
  },
  getById: async (id) => {
    return await db.Livro.findByPk(id);
  },
  getByIdAndAttribute: async (id, attribute) => {
    return await db.Livro.findByPk(id, { attributes: [attribute] });
  },
  getUserByBookId: async (id) => {
    return await db.Livro.findByPk(id, { include: "usuarios" });
  },
};

module.exports = livroService;
