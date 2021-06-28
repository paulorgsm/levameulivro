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
  getAll: async () => {
    return await db.Troca.findAll();
  },
  getById: async (id) => {
    return await db.Troca.findByPk(id);
  },
  getBookBySwapId: async (id) => {
    return await db.Troca.findByPk(id, { include: "livros" });
  },
  getUserBySwapId: async (id) => {
    return await db.Troca.findByPk(id, { include: "usuarios" });
  },
  getByIdAndAttribute: async (id, attribute) => {
    return await db.Troca.findByPk(id, { attributes: [attribute] });
  },
};

module.exports = trocaService;
