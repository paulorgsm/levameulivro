module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define(
    "Livro",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      autor: {
        type: DataTypes.STRING(400),
        allowNull: false,
      },
      nome_livro: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      editora: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      ano_pub: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      idioma: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      num_paginas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado_livro: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      conservacao: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      materia: {
        type: DataTypes.STRING(200),
      },
      nivel: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
      },
      isbn: {
        type: DataTypes.INTEGER(13),
        allowNull: false,
      },
      sinopse: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      foto_livro: {
        type: DataTypes.STRING(80),
      },
    },
    {
      tableName: "livros",
    }
  );

  Livro.associate = function (models) {
    Livro.hasOne(models.Troca, {
      foreignKey: "id_livro",
      as: "trocas",
    });

    Livro.hasMany(models.Pergunta, {
      foreignKey: "id_livro",
      as: "perguntas",
    });

    Livro.belongsTo(models.Usuario, {
      foreignKey: "id_usuario",
      as: "usuarios",
    });
  };

  return Livro;
};
