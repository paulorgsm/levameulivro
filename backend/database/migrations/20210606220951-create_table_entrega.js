"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("entrega", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      rastreio: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },

      recebido: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      id_troca: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "trocas",
          key: "id",
        },
      },

      id_endereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "enderecos",
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
    await queryInterface.dropTable("entrega");
  },
};
