const path = require("path")
const contaService = require("../services/contaService")
const viewCadastro = path.join(__dirname, "../views/cadastro.html");
const db = require('../database/models')


const CadastroController = {
    index: (req, res) => {
        
        res.sendFile(viewCadastro)
    },
    criarConta: async (req, res) => {
        
        const { nome, email, senha } = req.body;
        
        if (senha[0] != senha[1]) {
            res.send('As senhas não são iguais!')
        }
        
        const { id } = await contaService.criarConta(nome, email, senha[0]);

        req.session.teste = id;
        
        res.redirect('/cadastro');
    },
    adicionarDados: async (req, res) => {

        const { sobrenome, cpf, contato, nascimento, genero } = req.body
        
        await contaService.adicionarDados(req.session.teste, sobrenome, cpf, contato, nascimento, genero)

        res.redirect('/cadastro')
    }
}

module.exports = CadastroController;