const db = require("../database/models");

const enderecoService = {
  createEndereco: async (
    cep,
    logradouro,
    numero,
    bairro,
    complemento,
    cidade,
    estado,
    id_usuario
  ) => {
    return await db.Endereco.create({
      cep,
      logradouro,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      id_usuario,
    });
  },
  updateEndereco: async (
    id,
    cep,
    logradouro,
    numero,
    bairro,
    complemento,
    cidade,
    estado,
    id_usuario
  ) => {
    return await db.Endereco.update(
      {
        cep,
        logradouro,
        numero,
        bairro,
        complemento,
        cidade,
        estado,
        id_usuario,
      },
      { where: { id: id } }
    );
  },
  destroyEndereco: async (id) => {
    return await db.Endereco.destroy({ where: { id: id } });
  },
  getById: async (id) => {
    return await db.Endereco.findByPk(id);
  },
  getAll: async () => {
    return await db.Endereco.findAll();
  },
  getByIdAndAttribute: async (id, attribute) => {
    return await db.Endereco.findByPk(id, { attributes: [attribute] });
  },
  getUserByAddressId: async (id) => {
    return await db.Endereco.findByPk(id, { include: "usuarios" });
  },
};

module.exports = enderecoService;
