const entregaService = require("../services/EntregaService");

const EntregaController = {
  create: async (req, res) => {
    const { rastreio, recebido, id_troca } = req.body;

    return res.json(
      await entregaService.createEntrega(rastreio, recebido, id_troca)
    );
  },
  update: async (req, res) => {
    const { rastreio, recebido, id_troca } = req.body;

    const { id } = req.params;

    return res.json(
      await entregaService.updateEntrega(id, rastreio, recebido, id_troca)
    );
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    return res.json(await entregaService.destroyEntrega(id));
  },
  indexAll: async (req, res) => {
    return res.json(await entregaService.getAll());
  },
  indexById: async (req, res) => {
    const { id } = req.params;

    return res.json(await entregaService.getById(id));
  },
  indexSwapByDeliveryId: async (req, res) => {
    const { id } = req.params;

    return res.json(await entregaService.getSwapByDeliveryId(id));
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id, attribute } = req.params;

    return res.json(await entregaService.getByIdAndAttribute(id, attribute));
  },
};

module.exports = EntregaController;
