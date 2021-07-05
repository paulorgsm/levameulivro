const db = require("../database/models");

const entregaService = {
  createEntrega: async (rastreio, recebido, id_troca) => {
    return await db.Entrega.create({
      rastreio,
      recebido,
      id_troca,
    });
  },
  updateEntrega: async (id, rastreio, recebido, id_troca) => {
    return await db.Entrega.update(
      {
        rastreio,
        recebido,
        id_troca,
      },
      {
        where: { id: id },
      }
    );
  },
  destroyEntrega: async (id) => {
    return await db.Entrega.destroy({ where: { id: id } });
  },
};

module.exports = entregaService;
