module.exports = (sequelize, DataTypes) => {
  const Resposta = sequelize.define(
    "Resposta",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      resposta: {
        type: DataTypes.STRING(300),
      },

      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      id_pergunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "respostas",
    }
  );

  Resposta.associate = function (models) {
    Resposta.belongsTo(models.Usuario, {
      foreignKey: "id_usuario",
      as: "usuarios",
    });
    Resposta.belongsTo(models.Pergunta, {
      foreignKey: "id_pergunta",
      as: "perguntas",
    });
  };

  return Resposta;
};
