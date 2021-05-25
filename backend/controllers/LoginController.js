const path = require("path")
const viewLogin = path.join(__dirname, "../views/login.html")

const LoginController = {
    index: (req, res) => {
        res.sendFile(viewLogin)
    }
}

module.exports = LoginController;