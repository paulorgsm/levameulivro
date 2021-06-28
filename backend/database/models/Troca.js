module.exports = (sequelize, DataTypes) => {
  const Troca = sequelize.define(
    "Troca",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      id_endereco: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      id_livro: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "trocas",
    }
  );
  Troca.associate = function (models) {
    Troca.hasOne(models.Entrega, {
      foreignKey: "id_troca",
      as: "entregas",
    });

    Troca.belongsTo(models.Usuario, {
      foreignKey: "id_endereco",
      as: "enderecos",
    });

    Troca.belongsTo(models.Usuario, {
      foreignKey: "id_usuario",
      as: "usuarios",
    });

    Troca.belongsTo(models.Livro, {
      foreignKey: "id_livro",
      as: "livros",
    });
  };

  return Troca;
};
