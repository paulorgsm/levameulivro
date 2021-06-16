const db = require("../database/models");

const trocaService = {
  criarTroca: async (id_usuario, id_livro_troca) => {
    await db.Troca.create({
      id_usuario: id_usuario,
      id_livro_troca: id_livro_troca,
    });
  },
};

module.exports = trocaService;
