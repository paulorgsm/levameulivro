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
};

module.exports = livroService;
