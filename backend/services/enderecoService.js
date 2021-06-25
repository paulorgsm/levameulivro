const db = require("../database/models");

const enderecoService = {
  criarEndereco: async (
    cep,
    logradouro,
    numero,
    bairro,
    complemento,
    cidade,
    estado,
    id_usuario
  ) => {
    await db.Endereco.create({
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
};

module.exports = enderecoService;
