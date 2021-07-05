"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("livros", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      autor: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },

      nome_livro: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },

      editora: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      ano_pub: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
      },

      idioma: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      num_paginas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      estado_livro: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },

      conservacao: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },

      materia: {
        type: Sequelize.STRING(200),
      },

      nivel: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },

      isbn: {
        type: Sequelize.INTEGER(13),
        allowNull: false,
      },

      sinopse: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },

      foto_livro1: {
        type: Sequelize.STRING(80),
      },

      foto_livro2: {
        type: Sequelize.STRING(80),
      },

      foto_livro3: {
        type: Sequelize.STRING(80),
      },

      foto_livro4: {
        type: Sequelize.STRING(80),
      },

      foto_livro5: {
        type: Sequelize.STRING(80),
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("livros");
  },
};
