const EnderecoService = require("../services/EnderecoService");
const jwt = require("jsonwebtoken");

const EnderecoController = {
  create: async (req, res) => {
    const { cep, logradouro, numero, bairro, complemento, cidade, estado } =
      req.body;

    const exist = await EnderecoService.existEndereco(cep);

    if (exist) {
      return res
        .status(406)
        .send({ mensagem: "O endereço já está cadastrado no banco de dados" });
    }

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

    const endereco = await EnderecoService.createEndereco(
      cep,
      logradouro,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      id_usuario
    );

    if (endereco == 1) {
      return res
        .status(200)
        .send({ mensagem: "Endereço cadastrado com sucesso" });
    }

    return res.status(400).send({ mensagem: "Dados inválidos" });
  },
  update: async (req, res) => {
    const { cep, logradouro, numero, bairro, complemento, cidade, estado } =
      req.body;

    const { id } = req.params;

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

    const endereco = await EnderecoService.updateEndereco(
      id,
      cep,
      logradouro,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      id_usuario
    );

    if (endereco == 1) {
      return res
        .status(200)
        .send({ mensagem: "Endereço atualizado com sucesso" });
    }

    return res.status(400).send({ mensagem: "Dados inválidos" });
  },
};

module.exports = EnderecoController;
