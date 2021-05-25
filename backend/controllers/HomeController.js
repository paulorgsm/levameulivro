const path = require("path")
const viewHome = path.join(__dirname, "../views/home.html")

const HomeController = {
    index: (req, res) => {
        res.sendFile(viewHome)
    }
}

module.exports = HomeController;