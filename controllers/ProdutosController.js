const path = require("path")
const viewProdutos = path.join(__dirname, "../views/produtos.html")

const ProdutosController = {
    index: (req, res) => {
        res.sendFile(viewProdutos)
    }
}

module.exports = ProdutosController;