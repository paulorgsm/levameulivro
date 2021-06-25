const db = require("../database/models");

const entregaService = {
  criarEntrega: async (rastreio, recebido, id_troca, id_endereco) => {
    await db.Entrega.create({
      rastreio,
      recebido,
      id_troca,
      id_endereco,
    });
  },
};

module.exports = entregaService;
