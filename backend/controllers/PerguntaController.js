const perguntaService = require("../services/perguntaService");

const perguntaController = {
  criar: async (req, res) => {
    const { pergunta, resposta, id_usuario, id_livro } = req.body;

    await perguntaService.criarPergunta(
      pergunta,
      resposta,
      id_usuario,
      id_livro
    );
  },
};

module.exports = perguntaController;
