const db = require("../database/models");

const livroService = {
  criarLivro: async (
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
    saldo_usuario,
    usuario_id,
    isbn,
    sinopse,
    data_cad
  ) => {
    await db.Livro.create({
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
      saldo_usuario,
      usuario_id,
      isbn,
      sinopse,
      data_cad,
    });
  },
};

module.exports = livroService;
