module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define(
    "Endereco",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cep: {
        type: DataTypes.STRING(8),
      },
      logradouro: {
        type: DataTypes.STRING(200),
      },
      numero: {
        type: DataTypes.STRING(20),
      },
      bairro: {
        type: DataTypes.STRING(150),
      },
      complemento: {
        type: DataTypes.STRING(250),
      },
      cidade: {
        type: DataTypes.STRING(200),
      },
      estado: {
        type: DataTypes.STRING(2),
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamp: false,
    }
  );
  Endereco.associate = function (models) {
    Endereco.belongsTo(models.Usuario, {
      foreignKey: "id_usuario",
      as: "usuario_endereco",
    });
    Endereco.belongsTo(models.Troca, {
      foreignKey: "id_endereco",
      as: "endreco_troca",
    });
  };
  return Endereco;
};
