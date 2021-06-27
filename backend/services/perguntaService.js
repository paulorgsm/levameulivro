const db = require("../database/models");

const perguntaService = {
  createPergunta: async (pergunta, resposta, id_usuario, id_livro) => {
    return await db.Pergunta.create({
      pergunta,
      resposta,
      id_usuario,
      id_livro,
    });
  },
  createResposta: async (resposta, id_usuario, id_livro) => {
    return await db.Pergunta.update(
      {
        resposta,
      },
      {
        where: { id_usuario: id_usuario, id_livro: id_livro },
      }
    );
  },
  destroyPergunta: async (id) => {
    return await db.Pergunta.destroy(id);
  },
  getAll: async () => {
    return await db.Pergunta.findAll();
  },
  getById: async (id) => {
    return await db.Pergunta.findByPk(id);
  },
  getBookByQuestionId: async (id) => {
    return await db.Pergunta.findByPk(id, { include: "livros" });
  },
  getUserByQuestionId: async (id) => {
    return await db.Pergunta.findByPk(id, { include: "usuarios" });
  },
  getByIdAndAttribute: async (id, attribute) => {
    return await db.Pergunta.findByPk(id, { attributes: [attribute] });
  },
};

module.exports = perguntaService;
