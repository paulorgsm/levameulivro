const trocaService = require("../services/TrocaService");

const TrocaController = {
  create: async (req, res) => {
    const { id_endereco, id_usuario, id_livro } = req.body;

    return res.json(
      await trocaService.createTroca(id_endereco, id_usuario, id_livro)
    );
  },
  update: async (req, res) => {
    const { id_endereco, id_usuario, id_livro } = req.body;
    const { id } = req.params;

    return res.json(
      await trocaService.updateTroca(id, id_endereco, id_usuario, id_livro)
    );
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    return res.json(await trocaService.destroyTroca(id));
  },
  indexAll: async (req, res) => {
    return res.json(await trocaService.getAll());
  },
  indexById: async (req, res) => {
    const { id } = req.params;

    return res.json(await trocaService.getById(id));
  },
  indexBookBySwapId: async (req, res) => {
    const { id } = req.params;

    return res.json(await trocaService.getBookBySwapId(id));
  },
  indexUserBySwapId: async (req, res) => {
    const { id } = req.params;

    return res.json(await trocaService.getUserBySwapId(id));
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id, attribute } = req.params;

    return res.json(await trocaService.getByIdAndAttribute(id, attribute));
  },
};

module.exports = TrocaController;
