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
      cep: cep,
      logradouro: logradouro,
      numero: numero,
      bairro: bairro,
      complemento: complemento,
      cidade: cidade,
      estado: estado,
      id_usuario: id_usuario,
    });
  },
};

module.exports = enderecoService;
