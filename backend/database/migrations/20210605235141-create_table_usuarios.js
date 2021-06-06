'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('usuarios', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            nome: {
                type: Sequelize.DataTypes.STRING(100),
                allowNull: false
            },

            senha: {
                type: Sequelize.DataTypes.STRING(100),
                allowNull: false
            },

            email: {
                type: Sequelize.DataTypes.STRING(100),
                allowNull: false
            },

            sobrenome: {
                type: Sequelize.DataTypes.STRING(100)
            },

            cpf: {
                type: Sequelize.DataTypes.STRING(15)
            },

            celular: {
                type: Sequelize.DataTypes.STRING(15)
            },

            data_nasc: {
                type: Sequelize.DataTypes.DATE
            },

            sexo: {
                type: Sequelize.DataTypes.INTEGER
            },

            saldo: {
                type: Sequelize.DataTypes.STRING(100)
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
        await queryInterface.dropTable('usuarios');
    }
};
