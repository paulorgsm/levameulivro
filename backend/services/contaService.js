const bcrypt = require('bcrypt');
const db = require('../database/models')

const contaService = {
    criarConta: (nome, email, senha) => {
        db.Usuario.create({
            nome: nome,
            email: email, 
            senha: bcrypt.hashSync(senha)
        })
    }
}

module.exports = contaService;