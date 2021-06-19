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
  });
  Troca.associate = function (models) {
    Troca.belongsTo(models.Usuario, {
      foreignKey: "id_usuario",
      as: "usuarios",
    });
    Troca.belongsTo(models.Livro, {
      foreignKey: "id_livro",
      as: "trocas",
    });
    Troca.hasOne(models.Entrega, {
      foreignKey: "id_troca",
      as: "entregas",
    });
  };
  return Troca;
};
