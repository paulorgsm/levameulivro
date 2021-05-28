const path = require("path")
const contaService = require("../services/contaService")
const viewCadastro = path.join(__dirname, "../views/cadastro.html");


const CadastroController = {
    index: (req, res) => {
        
        res.sendFile(viewCadastro)
    },
    iniciarConta: (req, res) => {

        const { nome, email, senha } = req.body;

        if (senha[0] == senha[1]) {
            req.session.conta = {
                nome: nome,
                email: email,
                senha: senha[0]
            }

            res.redirect('/cadastro')
        } else {
            res.send('As senhas não são iguais')
        }
    },
    criarConta: (req, res) => {
        const { nome, email, senha } = req.session.conta;

        const { sobrenome, cpf, contato, nascimento, genero } = req.body;

        contaService.criarUsuario(nome, email, senha, sobrenome, cpf, contato, nascimento, genero);

        res.redirect('/entrar-no-time')
    }
}

module.exports = CadastroController;