module.exports = (sequelize, DataTypes) => {
    const Pergunta = sequelize.define("Pergunta",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            pergunta: {
                type: DataTypes.STRING(300),
                allowNull: false
            },

            resposta: {
                type: DataTypes.STRING(300),
                allowNull: false
            },

            id_usuario: {
                type: DataTypes.STRING(300),
                allowNull: false
            },

            id_livro: {
                type: DataTypes.STRING(300),
                allowNull: false
            }
        },
        {
            tableName: 'perguntas',
        }
    );

    Pergunta.associate = function (models) {
        Pergunta.belongsTo(models.Livro, {
            foreignKey: "id_livro",
            as: "pergunta_livro"
        })
    },

        Pergunta.associate = function (models) {
            Pergunta.belongsTo(models.Usuario, {
                foreignKey: "id_usuario",
                as: "pergunta_usuario"
            })
        }

    return Pergunta;
};