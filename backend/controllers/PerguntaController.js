require("dotenv").config();
const PerguntaService = require("../services/PerguntaService");

const PerguntaController = {
  create: async (req, res) => {
    const { pergunta, id_livro } = req.body;

    const decoded = req.headers.authorization;

    const id_usuario = decoded.id;

    const status = await PerguntaService.createPergunta(
      pergunta,
      id_usuario,
      id_livro
    );

    if (status != null) {
      return res.status(200).send({ mensagem: "Pergunta enviada com sucesso" });
    }
    return res.status(400).send({ mensagem: "Dados inválidos" });
  },
};

module.exports = PerguntaController;
