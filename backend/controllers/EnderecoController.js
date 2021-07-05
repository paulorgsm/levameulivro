const EnderecoService = require("../services/EnderecoService");

const EnderecoController = {
  create: async (req, res) => {
    const {
      cep,
      logradouro,
      num,
      bairro,
      complemento,
      cidade,
      estado,
      id_usuario,
    } = req.body;

    const endereco = await EnderecoService.createEndereco(
      cep,
      logradouro,
      num,
      bairro,
      complemento,
      cidade,
      estado,
      id_usuario
    );

    return res.json(endereco);
  },
  update: async (req, res) => {
    const {
      cep,
      logradouro,
      num,
      bairro,
      complemento,
      cidade,
      estado,
      id_usuario,
    } = req.body;

    const { id } = req.params;

    const endereco = await EnderecoService.updateEndereco(
      id,
      cep,
      logradouro,
      num,
      bairro,
      complemento,
      cidade,
      estado,
      id_usuario
    );

    return res.json(endereco);
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    const endereco = await EnderecoService.destroyEndereco(id);

    return res.json(endereco);
  },
};

module.exports = EnderecoController;
