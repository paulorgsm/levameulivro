const enderecoService = require("../services/EnderecoService");

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

    const endereco = await enderecoService.createEndereco(
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

    const endereco = await enderecoService.updateEndereco(
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

    const endereco = await enderecoService.destroyEndereco(id);

    return res.json(endereco);
  },
  indexById: async (req, res) => {
    const { id } = req.params;

    const endereco = await enderecoService.getById(id);

    return res.json(endereco);
  },
  indexAll: async (req, res) => {
    const endereco = await enderecoService.getAll();

    return res.json(endereco);
  },
  indexUserByAddressId: async (req, res) => {
    const { id } = req.params;

    const endereco = await enderecoService.getUserByAddressId(id);

    return res.json(endereco);
  },
  indexByIdAndAttribute: async (req, res) => {
    const { id, attribute } = req.params;

    const endereco = await enderecoService.getByIdAndAttribute(id, attribute);

    return res.json(endereco);
  },
};

module.exports = EnderecoController;
