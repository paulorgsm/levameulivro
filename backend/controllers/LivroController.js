const livroService = require("../services/LivroService");

const LivroController = {
  indexAll: async (req, res) => {
    const livroList = await livroService.getAll();

    return res.json(livroList);
  },
  indexById: async (req, res) => {
    const { id } = req.params;

    const livro = await livroService.getById(id);

    return res.json(livro);
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id, attribute } = req.params;

    const livro = await livroService.getByIdAndAttribute(id, attribute);

    return res.json(livro);
  },
  create: async (req, res) => {
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
      id_usuario,
      isbn,
      sinopse,
    } = req.body;

    const { filename } = req.file;

    const foto_livro = `http://localhost:3000/uploads/livros/${filename}`;

    const livro = await livroService.createLivro(
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
    );

    return res.json(livro);
  },
  update: async (req, res) => {
    const { id } = req.params;

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
      id_usuario,
      isbn,
      sinopse,
    } = req.body;

    const livro = await livroService.updateLivro(
      id,
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
    );

    return res.json(livro);
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    const livro = await livroService.destroyLivro(id);

    return res.json(livro);
  },
};

module.exports = LivroController;
