const db = require("../database/models");

const PerguntaService = {
  createPergunta: async (pergunta, id_usuario, id_livro) => {
    return await db.Pergunta.create({
      pergunta,
      id_usuario,
      id_livro,
    });
  },
};

module.exports = PerguntaService;
