const entregaService = require("../services/entregaService");

const EntregaController = {
  criar: async (req, res) => {
    const { rastreio, recebido, id_troca } = req.body;
    await entregaService(rastreio, recebido, id_troca);
  },
};

module.exports = EntregaController;
