const bcrypt = require('bcrypt');
const db = require('../database/models')

const contaService = {
    criarUsuario: (nome, email, senha, sobrenome, cpf, celular, data_nasc, sexo) => {
        
        switch(sexo) {
            case "masc": 
                sexo = 1;
            case "mulherTrans":
                sexo = 2;
            case"homenTrans":
                sexo = 3;
            case"naoResponder":
                sexo = 4;
            case "outros":
                sexo = 5;
        }
        
        var arrData =  data_nasc.split('/');

        var stringFormatada = arrData[2] + '-' + arrData[1] + '-' + arrData[0];
        
        db.Usuario.create({
            nome: nome,
            email: email, 
            senha: bcrypt.hashSync(senha, 10),
            sobrenome: sobrenome,
            cpf: cpf,
            celular: celular, 
            data_nasc: stringFormatada,
            sexo: sexo,
            saldo: 0, 
        })
    }
}

module.exports = contaService;