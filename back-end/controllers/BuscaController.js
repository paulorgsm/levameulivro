const path = require("path")
const viewBusca = path.join(__dirname, "../views/busca.html")

const BuscaController = {
    index: (req, res) => {
        res.sendFile(viewBusca)
    }
}

module.exports = BuscaController;