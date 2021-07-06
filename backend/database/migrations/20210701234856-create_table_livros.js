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
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      nome_livro: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },

      editora: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },

      ano_pub: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      idioma: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },

      num_paginas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      estado_livro: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },

      conservacao: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      materia: {
        type: Sequelize.STRING(30),
      },

      nivel: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      isbn: {
        type: Sequelize.STRING(13),
        allowNull: false,
      },

      sinopse: {
        type: Sequelize.TEXT,
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

      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
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
