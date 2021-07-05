const PerguntaService = require("../services/PerguntaService");

const PerguntaController = {
  create: async (req, res) => {
    const { pergunta, resposta, id_usuario, id_livro } = req.body;

    return res.json(
      await PerguntaService.createPergunta(
        pergunta,
        resposta,
        id_usuario,
        id_livro
      )
    );
  },
  addResposta: async (req, res) => {
    const { resposta, id_usuario, id_livro } = req.body;

    return res.json(
      await PerguntaService.createResposta(resposta, id_usuario, id_livro)
    );
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    return res.json(await PerguntaService.destroyPergunta(id));
  },
};

module.exports = PerguntaController;
