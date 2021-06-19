const entregaService = require("../services/entregaService");

const EntregaController = {
  criar: async (req, res) => {
    const { rastreio, recebido, id_troca, id_endereco } = req.body;
    await entregaService(rastreio, recebido, id_troca, id_endereco);
  },
};

module.exports = EntregaController;
