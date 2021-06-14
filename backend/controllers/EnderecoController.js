const enderecoService = require("../services/enderecoService");

const EnderecoController = {
  criar: async (req, res) => {
    const { cep, logradouro, num, bairro, complemento, cidade, estados } =
      req.body;

    const { id } = req.session.teste;

    await enderecoService.criarEndereco(
      cep,
      logradouro,
      num,
      bairro,
      complemento,
      cidade,
      estados,
      id
    );

    res.redirect("/cadastro");
  },
};

module.exports = EnderecoController;
