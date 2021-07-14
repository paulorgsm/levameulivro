module.exports = (sequelize, DataTypes) => {
  const Pergunta = sequelize.define(
    "Pergunta",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      pergunta: {
        type: DataTypes.STRING(300),
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
      tableName: "perguntas",
    }
  );

  Pergunta.associate = function (models) {
    Pergunta.belongsTo(models.Livro, {
      foreignKey: "id_livro",
      as: "livros",
    });
    Pergunta.belongsTo(models.Usuario, {
      foreignKey: "id_usuario",
      as: "usuarios",
    });
    Pergunta.hasMany(models.Resposta, {
      foreignKey: "id_pergunta",
      as: "respostas",
    });
  };

  return Pergunta;
};
