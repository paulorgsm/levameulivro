const db = require("../database/models");

const perguntaService = {
  criarPergunta: async (pergunta, resposta, id_usuario, id_livro) => {
    await db.Pergunta.create({
      pergunta,
      resposta,
      id_usuario,
      id_livro,
    });
  },
};

module.exports = perguntaService;
