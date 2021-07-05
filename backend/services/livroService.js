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
      id_usuario,
      isbn,
      sinopse,
      foto_livro1,
      foto_livro2,
      foto_livro3,
      foto_livro4,
      foto_livro5,
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
    foto_livro1,
    foto_livro2,
    foto_livro3,
    foto_livro4,
    foto_livro5
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
        foto_livro1,
        foto_livro2,
        foto_livro3,
        foto_livro4,
        foto_livro5,
      },
      {
        where: { id: id },
      }
    );
  },
  destroyLivro: async (id) => {
    return await db.Livro.destroy({ where: { id: id } });
  },
};

module.exports = livroService;
