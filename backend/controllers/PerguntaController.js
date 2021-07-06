require("dotenv").config();
const PerguntaService = require("../services/PerguntaService");
const jwt = require("jsonwebtoken");

const PerguntaController = {
  create: async (req, res) => {
    const { pergunta, id_livro } = req.body;

    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_KEY,
      function (err, decoded) {
        if (err) {
          return res
            .status(401)
            .send({ mensagem: "Sessão expirada, por favor logue novamente" });
        }
        return decoded;
      }
    );

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
  addResposta: async (req, res) => {
    const { resposta, id_livro } = req.body;

    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_KEY,
      function (err, decoded) {
        if (err) {
          return res
            .status(401)
            .send({ mensagem: "Sessão expirada, por favor logue novamente" });
        }
        return decoded;
      }
    );

    const id_usuario = decoded.id;

    const status = await PerguntaService.createResposta(
      resposta,
      id_usuario,
      id_livro
    );

    if (status != null) {
      return res.status(200).send({ mensagem: "Resposta enviada com sucesso" });
    }
    return res.status(400).send({ mensagem: "Dados inválidos" });
  },
};

module.exports = PerguntaController;
