module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      sobrenome: {
        type: DataTypes.STRING(100),
      },

      cpf: {
        type: DataTypes.STRING(15),
      },

      celular: {
        type: DataTypes.STRING(15),
      },

      data_nasc: {
        type: DataTypes.DATE,
      },

      sexo: {
        type: DataTypes.INTEGER,
      },

      saldo: {
        type: DataTypes.STRING(100),
      },
    },
    {
      timestamp: false,
    }
  );

/*   Usuario.associate = function (models) {
    Usuario.hasMany(models.Livro, models.Endereco, models.Pergunta,models.Troca, {
      foreignKey: "usuario_id",
      as: "livro",
      foreignKey: "id_usuario",
      as: "usuario_endereco",
      foreignKey: "id_usuario",
      as: "pergunta_usuario",
      foreignKey: "id_usuario",
      as: "troca",
    });
  }; */

  return Usuario;
};
