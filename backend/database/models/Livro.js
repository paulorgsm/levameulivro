module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define("Livro",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            autor: {
                type: DataTypes.STRING(400),
                allowNull: false
            },
            nome_livro: {
                type: DataTypes.STRING(300),
                allowNull: false
            },
            editora: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            ano_pub: {
                type: DataTypes.INTEGER(10),
                allowNull: false
            },
            idioma: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            num_paginas: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            estado_livro: {
                type: DataTypes.STRING(300),
                allowNull: false
            },
            conservacao: {
                type: DataTypes.STRING(500),
                allowNull: false
            },
            materia: {
                type: DataTypes.STRING(200)
            },
            nivel: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            saldo_usuario: {
                type: DataTypes.INTEGER()
            },
            usuario_id: {
                type: DataTypes.INTEGER,

            },
            isbn: {
                type: DataTypes.INTEGER(13),
                allowNull: false
            },
            sinopse: {
                type: DataTypes.STRING(500),
                allowNull: false
            },
            data_cad: {
                type: DataTypes.DATEONLY,
                allowNull: false
            }
        },
        {
            tableName: 'livros',
        }
    );

    Livro.associate = function (models) {
        Livro.hasOne(models.Troca, {
            foreignKey: "id_livro_troca",
            as: "pergunta_livro"
        })
    },
        Livro.associate = function (models) {
            Livro.hasOne(models.Pergunta, {
                foreignKey: "id_livro",
                as: "trocas"
            })
        }
    return Livro;
};