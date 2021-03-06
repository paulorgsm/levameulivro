"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      senha: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      sobrenome: {
        type: Sequelize.STRING(100),
      },

      cpf: {
        type: Sequelize.STRING(15),
      },

      celular: {
        type: Sequelize.STRING(15),
      },

      data_nasc: {
        type: Sequelize.DATEONLY,
      },

      sexo: {
        type: Sequelize.STRING(10),
      },

      saldo: {
        type: Sequelize.INTEGER,
      },

      foto_usuario: {
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
    await queryInterface.dropTable("usuarios");
  },
};
