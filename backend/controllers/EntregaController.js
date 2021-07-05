const EntregaService = require("../services/EntregaService");

const EntregaController = {
  create: async (req, res) => {
    const { rastreio, recebido, id_troca } = req.body;

    return res.json(
      await EntregaService.createEntrega(rastreio, recebido, id_troca)
    );
  },
  update: async (req, res) => {
    const { rastreio, recebido, id_troca } = req.body;

    const { id } = req.params;

    return res.json(
      await EntregaService.updateEntrega(id, rastreio, recebido, id_troca)
    );
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    return res.json(await EntregaService.destroyEntrega(id));
  },
};

module.exports = EntregaController;
