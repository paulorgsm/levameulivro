require("dotenv").config();
const LivroService = require("../services/LivroService");
const livroService = require("../services/LivroService");

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
      isbn,
      sinopse,
    } = req.body;

    const decoded = req.headers.authorization;

    const foto_array = req.files;

    const id_usuario = decoded.id;

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
      nivel,
      isbn,
      sinopse,
      id_usuario,
      foto_livro1,
      foto_livro2,
      foto_livro3,
      foto_livro4,
      foto_livro5
    );

    if (livro != null) {
      return res.status(200).send({ mensagem: "Livro cadastrado com sucesso" });
    }
    return res.status(400).send({ mensagem: "Dados inválidos" });
  },
  indexAll: async (req, res) => {
    return res.status(200).send(await livroService.getAll());
  },
  indexById: async (req, res) => {
    const { id } = req.params;

    return res.status(200).send(await livroService.getById(id));
  },
  indexByNameOrAutorOrTag: async (req, res) => {
    const { nome, autor, tag } = req.query;

    return res
      .status(200)
      .send(await livroService.getByNameOrAutorOrTag(nome, autor, tag));
  },
  indexUserAndAddressById: async (req, res) => {
    const { id } = req.params;

    return res.status(200).send(await livroService.getUserAndAddressById(id))
  },
  deletarLivro: async (req, res) => {
    const { id } = req.params;

    const numero =  await livroService.deletar(id)
    
    if(numero == 1) {
      return res.status(200).send("Livro deletado com sucesso")
    }
    return res.status(400)
  }
};

module.exports = LivroController;
