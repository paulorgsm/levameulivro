const path = require("path")
const viewCadastro = path.join(__dirname, "../views/cadastro.html")

const CadastroController = {
    index: (req, res) => {
        res.sendFile(viewCadastro)
    }
}

module.exports = CadastroController;