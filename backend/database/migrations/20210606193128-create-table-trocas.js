"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("trocas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      id_endereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "enderecos",
          key: "id",
        },
      },

      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
      },

      id_livro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "livros",
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
    await queryInterface.dropTable("trocas");
  },
};
