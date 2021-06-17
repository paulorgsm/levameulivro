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

    id_livro_troca: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  (Troca.associate = function (models) {
    Troca.belongsTo(models.Usuario, models.Livro,{
      foreignKey: "id_usuario",
      as: "id",
      foreignKey: "id_livro_troca",
      as: "trocas",
    });
  }),
       (Troca.associate = function (models) {
      Troca.hasOne(models.Entrega, {
        foreignKey: "id_troca",
        as: "entregas",
      });
    });
  return Troca;
};
