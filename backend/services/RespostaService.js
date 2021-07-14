const db = require("../database/models");

const RespostaService = {
  createPergunta: async (resposta, id_usuario, id_pergunta) => {
    return await db.Resposta.create({
      resposta,
      id_usuario,
      id_pergunta,
    });
  },
};

module.exports = RespostaService;
