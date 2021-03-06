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
        type: DataTypes.DATEONLY,
      },

      sexo: {
        type: DataTypes.INTEGER,
      },

      saldo: {
        type: DataTypes.INTEGER,
      },

      foto_usuario: {
        type: DataTypes.STRING(80),
      },
    },
    {
      tableName: "usuarios",
    }
  );

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Livro, {
      foreignKey: "id_usuario",
      as: "livros",
    });
    Usuario.hasMany(models.Endereco, {
      foreignKey: "id_usuario",
      as: "enderecos",
    });
    Usuario.hasMany(models.Pergunta, {
      foreignKey: "id_usuario",
      as: "perguntas",
    });
    Usuario.hasMany(models.Troca, {
      foreignKey: "id_usuario",
      as: "trocas",
    });
    Usuario.hasMany(models.Resposta, {
      foreignKey: "id_usuario",
      as: "respostas",
    });
  };

  return Usuario;
};
