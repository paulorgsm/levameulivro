const path = require("path")
const contaService = require("../services/contaService")
const viewCadastro = path.join(__dirname, "../views/cadastro.html");


const CadastroController = {
    index: (req, res) => {
        
        res.sendFile(viewCadastro)
    },
    criarConta: (req, res) => {
        
        const {nome, email, senha} = req.body;

        if (senha[0] == senha[1]) {
            
            contaService.criarConta(nome, email, senha)

            res.redirect('/entrar-no-time')
        } else {
            
            res.send('As senhas não se conferem!')
        }
    }
}

module.exports = CadastroController;