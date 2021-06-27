const perguntaService = require("../services/PerguntaService");

const perguntaController = {
  create: async (req, res) => {
    const { pergunta, resposta, id_usuario, id_livro } = req.body;

    return res.json(
      await perguntaService.createPergunta(
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
      await perguntaService.createResposta(resposta, id_usuario, id_livro)
    );
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    return res.json(await perguntaService.destroyPergunta(id));
  },
  indexAll: async (req, res) => {
    return res.json(await perguntaService.getAll());
  },
  indexById: async (req, res) => {
    const { id } = req.params;

    return res.json(await perguntaService.getById(id));
  },
  indexBookByQuestionId: async (req, res) => {
    const { id } = req.params;

    return res.json(await perguntaService.getBookByQuestionId(id));
  },
  indexUserByQuestionId: async (req, res) => {
    const { id } = req.params;

    return res.json(await perguntaService.getUserByQuestionId(id));
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id, attribute } = req.params;

    return res.json(await perguntaService.getByIdAndAttribute(id, attribute));
  },
};

module.exports = perguntaController;
