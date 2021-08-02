require("dotenv").config();
const UsuarioService = require("../services/UsuarioService");

const UsuarioController = {
  criarConta: async (req, res) => {
    const { nome, email, senha } = req.body;

    const exist = await UsuarioService.existUsuario(email);

    if (exist) {
      return res
        .status(401)
        .send({ mensagem: "O usuario já existe no banco de dados" });
    }

    const usuario = await UsuarioService.createUsuario(nome, email, senha);

    return res
      .status(200)
      .send({ mensagem: "Usuario criado com sucesso", token: usuario.token, foto: usuario.foto, nome: usuario.nome });
  },
  addDadosPessoais: async (req, res) => {
    const { sobrenome, cpf, celular, data_nasc, sexo } = req.body;

    const decoded = req.headers.authorization;

    const id_usuario = decoded.id;

    const numero = await UsuarioService.addOutrosDados(
      id_usuario,
      sobrenome,
      cpf,
      celular,
      data_nasc,
      sexo
    );

    if (numero == 1) {
      return res
        .status(200)
        .send({ mensagem: "Dados pessoais adicionados com sucesso" });
    }

    return res.status(401).send({ mensagem: "Erro na autenticação" });
  },
  atualizarDados: async (req, res) => {
    const { nome, senha, email, sobrenome, cpf, celular, data_nasc, sexo } =
      req.body;
      
    const decoded = req.headers.authorization;
    
    const id_usuario = decoded.id;

    const exist = await UsuarioService.existAnotherUserWithTheSameEmail(id_usuario, email);
    
    if (exist) {
      return res.status(401).send({ mensagem: "Email já cadastrado" });
    }
    if (!email) {
      return res.status(401).send({ mensagem: "Email não informado" });

    }

    const filename = req.file?.filename;

    filename ? foto_usuario = `${process.env.HOST_URL}/uploads/usuarios/${filename}`: null

    const numero = await UsuarioService.updateUsuario(
      id_usuario,
      nome,
      senha,
      email,
      sobrenome,
      cpf,
      celular,
      data_nasc,
      sexo,
      foto_usuario
    );

    if (numero == 1) {
      return res
        .status(200)
        .send({ mensagem: "Usuario atualizado com sucesso" });
    }

    return res.status(401).send({ mensagem: "Erro na autenticação" });
  },
  deletarConta: async (req, res) => {
    const decoded = req.headers.authorization;

    const id_usuario = decoded.id;

    const numero = await UsuarioService.destroyUsuario(id_usuario);

    if (numero == 1) {
      return res.status(200).send({ mensagem: "Usuario deletado com sucesso" });
    }

    return res.status(401).send({ mensagem: "Erro ao deletar usuario" });
  },
  fazerLogin: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await UsuarioService.authUsuario(email, senha);

    if (usuario === null) {
      return res.status(401).send({ mensagem: "Dados inválidos" });
    }

    return res
      .status(200)
      .send({ mensagem: "Usuario autenticado com sucesso", token: usuario.token, foto: usuario.foto, nome: usuario.nome });
  },
  indexUsuario: async (req, res) => {
    const decoded = req.headers.authorization;

    const id_usuario = decoded.id;

    const usuario = await UsuarioService.getUsuario(id_usuario)

    return res.send(usuario)
  },
  indexLivroByUsuario : async (req, res) => {
    const decoded = req.headers.authorization;

    const id_usuario = decoded.id;

    let offset = 0;

    if (req.query.count && req.query.page) {
      offset = req.query.count * req.query.page - req.query.count;
    }

    const limit = Number(req.query.count)

    const livros = await UsuarioService.getLivroByUsuario(id_usuario, limit, offset)

    return res.json({ livros: livros })
  },
  indexEnderecoByUsuario: async (req, res) => {
    const decoded = req.headers.authorization;

    const id_usuario = decoded.id;

    const enderecos = await UsuarioService.getEnderecoByUsuario(id_usuario)

    return res.status(200).json(enderecos)
  }
};

module.exports = UsuarioController;
