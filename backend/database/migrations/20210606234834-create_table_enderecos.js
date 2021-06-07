'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.createTable('enderecos', { 
      id: {
     type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cep:{
     type: DataTypes.STRING(8)
    },
    logradouro:{
        type: DataTypes.STRING(200)
    },
    numero:{
        type: DataTypes.STRING(20)
    },
    bairro:{
        type: DataTypes.STRING(150)
    },
    complemento:{
        type: DataTypes.STRING(250)
    },
    cidade:{
        type: DataTypes.STRING(200)
    },
    estado:{
        type: DataTypes.STRING(2)
    },
    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id',
        }
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
    await queryInterface.dropTable('enderecos');
     
  }
};
