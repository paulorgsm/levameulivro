const db = require("../database/models");

const trocaService = {
  criarTroca: async (id_usuario, id_livro) => {
    await db.Troca.create({
      id_usuario,
      id_livro,
    });
  },
};

module.exports = trocaService;
