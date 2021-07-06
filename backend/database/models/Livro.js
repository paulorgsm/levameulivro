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
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      nome_livro: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      editora: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      ano_pub: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      idioma: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },

      num_paginas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      estado_livro: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },

      conservacao: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      materia: {
        type: DataTypes.STRING(30),
      },

      nivel: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },

      isbn: {
        type: DataTypes.STRING(13),
        allowNull: false,
      },

      sinopse: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      foto_livro1: {
        type: DataTypes.STRING(80),
      },

      foto_livro2: {
        type: DataTypes.STRING(80),
      },

      foto_livro3: {
        type: DataTypes.STRING(80),
      },

      foto_livro4: {
        type: DataTypes.STRING(80),
      },

      foto_livro5: {
        type: DataTypes.STRING(80),
      },

      id_usuario: {
        type: DataTypes.INTEGER,
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
