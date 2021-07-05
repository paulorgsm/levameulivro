require("dotenv").config();
const LivroService = require("../services/LivroService");

const LivroController = {
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

    const foto_array = req.files;

    const foto_filename_array = [];

    for (element of foto_array) {
      foto_filename_array.push(
        `${process.env.HOST_URL}/uploads/livros/${element.filename}`
      );
    }

    const foto_livro1 = foto_filename_array[0] || null;
    const foto_livro2 = foto_filename_array[1] || null;
    const foto_livro3 = foto_filename_array[2] || null;
    const foto_livro4 = foto_filename_array[3] || null;
    const foto_livro5 = foto_filename_array[4] || null;

    const livro = await LivroService.createLivro(
      autor,
      nome_livro,
      editora,
      ano_pub,
      idioma,
      num_paginas,
      estado_livro,
      conservacao,
      materia,
      parseInt(nivel),
      parseInt(id_usuario),
      parseInt(isbn),
      sinopse,
      foto_livro1,
      foto_livro2,
      foto_livro3,
      foto_livro4,
      foto_livro5
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

    const livro = await LivroService.updateLivro(
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

    const livro = await LivroService.destroyLivro(id);

    return res.json(livro);
  },
};

module.exports = LivroController;
