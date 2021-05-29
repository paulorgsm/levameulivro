module.exports = (sequelize, DataTypes) => sequelize.define(
    "Endereco",
    {
        cep:{
         type: DataTypes.INTERGER(8)
        },
        logradouro:{
            type: DataTypes.STRING(200)
        },
        numero:{
            type: DataTypes.STRING(20)
        },
        bairro:{
            type: DataTypes.STRING(150)
        },
        complemento:{
            type: DataTypes.STRING(250)
        },
        cidade:{
            type: DataTypes.STRING(200)
        },
        estado:{
            type: DataTypes.STRING(2)
        }
    },
    {
        tableName: 'enderecos',
        timestamps: false,
    }
    

)