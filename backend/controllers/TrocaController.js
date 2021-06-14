const trocaService = require("../services/trocaService");

const TrocaController = {
  criar: async (req, res) => {
    const { id_usuario, id_livro_troca } = req.body;
    await trocaService.criarTroca(id_usuario, id_livro_troca);
  },
};

module.exports = TrocaController;
