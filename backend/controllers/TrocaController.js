const trocaService = require("../services/TrocaService");

const TrocaController = {
  criar: async (req, res) => {
    const { id_usuario, id_livro } = req.body;
    await trocaService.criarTroca(id_usuario, id_livro);
  },
};

module.exports = TrocaController;
