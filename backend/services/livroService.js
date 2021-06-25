const db = require("../database/models");

const livroService = {
  getAll: async () => {
    return await db.Livro.findAll();
  },
  getById: async (id) => {
    return await db.Livro.findByPk(id);
  },
  getByIdAndAttribute: async (id, attribute) => {
    return await db.Livro.findByPk(id, { attributes: [attribute] });
  },
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
    sinopse
  ) => {
    const livro = await db.Livro.create({
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
    });

    return livro;
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
    sinopse
  ) => {
    const livro = await db.Livro.update(
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
      },
      {
        where: { id: id },
      }
    );

    return livro;
  },
  destroyLivro: async (id) => {
    return await db.Livro.destroy({ where: { id: id } });
  },
};

module.exports = livroService;
