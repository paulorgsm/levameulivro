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
      autor: autor,
      nome_livro: nome_livro,
      editora: editora,
      ano_pub: ano_pub,
      idioma: idioma,
      num_paginas: num_paginas,
      estado_livro: estado_livro,
      conservacao: conservacao,
      materia: materia,
      nivel: nivel,
      saldo_usuario: saldo_usuario,
      usuario_id: usuario_id,
      isbn: isbn,
      sinopse: sinopse,
      data_cad: data_cad,
    });
  },
};

module.exports = livroService;
