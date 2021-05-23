const path = require("path")
const viewTroca = path.join(__dirname, "../views/troca-de-livro.html")

const TrocaController = {
    index: (req, res) => {
        res.sendFile(viewTroca)
    }
}

module.exports = TrocaController;