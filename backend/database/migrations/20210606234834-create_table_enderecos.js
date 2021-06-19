"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("enderecos", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cep: {
        type: Sequelize.STRING(8),
      },
      logradouro: {
        type: Sequelize.STRING(200),
      },
      numero: {
        type: Sequelize.STRING(20),
      },
      bairro: {
        type: Sequelize.STRING(150),
      },
      complemento: {
        type: Sequelize.STRING(250),
      },
      cidade: {
        type: Sequelize.STRING(200),
      },
      estado: {
        type: Sequelize.STRING(2),
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
    await queryInterface.dropTable("enderecos");
  },
};
