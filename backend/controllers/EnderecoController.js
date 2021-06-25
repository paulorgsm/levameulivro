const enderecoService = require("../services/EnderecoService");

const EnderecoController = {
  criar: async (req, res) => {
    const { cep, logradouro, num, bairro, complemento, cidade, estados } =
      req.body;

    const { id_usuario } = req.session;

    await enderecoService.criarEndereco(
      cep,
      logradouro,
      num,
      bairro,
      complemento,
      cidade,
      estados,
      id_usuario
    );

    res.redirect("/cadastro");
  },
};

module.exports = EnderecoController;
