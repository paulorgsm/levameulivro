const EnderecoService = require("../services/EnderecoService");

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

    const decoded = req.headers.authorization;

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

    if (endereco != null) {
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

    const decoded = req.headers.authorization;

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
