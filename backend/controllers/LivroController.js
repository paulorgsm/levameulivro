const livroService = require("../services/livroService");

const LivroController = {
  criar: async (req, res) => {
    const {
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
    } = req.body;

    await livroService.criarLivro(
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
    );
  },
};

module.exports = LivroController;
