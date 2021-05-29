module.exports = (sequelize, DataTypes) => sequelize.define(
    "Livro",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        autor:{
            type: DataTypes.STRING(400)
        },
        nome_livro :{
            type: DataTypes.STRING(300)
        },
        editora :{
            type: DataTypes.STRING(200)
        },
        ano_pub :{
            type: DataTypes.INTEGER(10)
        },
        idioma :{
            type: DataTypes.STRING(200)
        },
        num_paginas :{
            type: DataTypes.INTEGER()
        },
        estado_livro :{
            type: DataTypes.STRING(300)
        },
        conservacao :{
            type: DataTypes.STRING(500)
        },
        materia :{
            type: DataTypes.STRING(200)
        },
        nivel :{
            type: DataTypes.STRING(200)
        },
        saldo_usuario :{
            type: DataTypes.INTEGER()
        },
        usuario_id :{
            type: DataTypes.INTEGER,
            
        }
    },
    {
        tableName: 'livros',
        timestamps: false,
    }
)