const Usuario = require("./Usuario");

module.exports = (sequelize, DataTypes) => {
  const Troca = sequelize.define("Troca", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    id_livro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Troca.associate = function (models) {
    Troca.belongsTo(models.Usuario,{
      foreignKey: "id_usuario",
      as: "id_troca",
      
    });
    Troca.belongsTo( models.Livro,{
      foreignKey: "id_livro",
      as: "trocas",
    });
    Troca.hasOne(models.Entrega, {
      foreignKey: "id_troca",
      as: "entregas",
    });
    Troca.hasOne(models.Endereco, {
      foreignKey: "id_endereco",
      as: "endereco_troca",
    });
  };
  return Troca;
};
