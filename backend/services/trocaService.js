const db = require("../database/models");

const trocaService = {
  createTroca: async (id_endereco, id_usuario, id_livro) => {
    return await db.Troca.create({
      id_endereco,
      id_usuario,
      id_livro,
    });
  },
  updateTroca: async (id, id_endereco, id_usuario, id_livro) => {
    return await db.Troca.update(
      {
        id_endereco,
        id_usuario,
        id_livro,
      },
      {
        where: { id: id },
      }
    );
  },
  destroyTroca: async (id) => {
    return await db.Troca.destroy({
      where: { id: id },
    });
  },
};

module.exports = trocaService;
