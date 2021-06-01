const bcrypt = require('bcrypt');
const db = require('../database/models')

const contaService = {
    criarUsuario: (nome, email, senha, sobrenome, cpf, celular, data_nasc, sexo) => {
        
        switch(sexo) {
            case "fem": 
                sexo = 1;
            case "masc": 
                sexo = 2;
            case "mulherTrans":
                sexo = 3;
            case"homenTrans":
                sexo = 4;
            case"naoResponder":
                sexo = 5;
            case "outros":
                sexo = 6;
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