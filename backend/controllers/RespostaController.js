require("dotenv").config();
const RespostaService = require("../services/RespostaService");

const RespostaController = {
  create: async (req, res) => {
    const { resposta, id_pergunta } = req.body;

    const decoded = req.headers.authorization;

    const id_usuario = decoded.id;

    const status = await RespostaService.createPergunta(
      resposta,
      id_usuario,
      id_pergunta
    );

    if (status != null) {
      return res.status(200).send({ mensagem: "Resposta enviada com sucesso" });
    }
    return res.status(400).send({ mensagem: "Dados inválidos" });
  },
};

module.exports = RespostaController;
