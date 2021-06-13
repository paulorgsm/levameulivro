const db = require("../database/models");

const entregaService = {
  criarEntrega: async (rastreio, recebido, id_troca) => {
    await db.Entrega.create({
      rastreio: rastreio,
      recebido: recebido,
      id_troca: id_troca,
    });
  },
};

module.exports = entregaService;
