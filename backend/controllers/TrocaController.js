const TrocaService = require("../services/TrocaService");

const TrocaController = {
  create: async (req, res) => {
    const { id_endereco, id_usuario, id_livro } = req.body;

    return res.json(
      await TrocaService.createTroca(id_endereco, id_usuario, id_livro)
    );
  },
  update: async (req, res) => {
    const { id_endereco, id_usuario, id_livro } = req.body;
    const { id } = req.params;

    return res.json(
      await TrocaService.updateTroca(id, id_endereco, id_usuario, id_livro)
    );
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    return res.json(await TrocaService.destroyTroca(id));
  },
};

module.exports = TrocaController;
