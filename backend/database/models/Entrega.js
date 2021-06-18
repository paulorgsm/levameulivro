module.exports = (sequelize, DataTypes) => {
  const Entrega = sequelize.define("Entrega", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rastreio: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    recebido: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    id_troca: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Entrega.associate = function (models) {
    Entrega.hasOne(models.Livro, {
      foreignKey: "id_livro",
      as: "entregas_livro",
    });

    Entrega.belongsTo(models.Troca, {
      foreignKey: "id_troca",
      as: "trocas",
      
    });
  };



  return Entrega;
};
