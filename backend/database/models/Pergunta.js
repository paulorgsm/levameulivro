module.exports = (sequelize, DataTypes) => sequelize.define(
    "Pergunta",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        pergunta: {
            type: DataTypes.STRING(300)
        },
        resposta: {
            type: DataTypes.STRING(300)
        }
    },
    {
        tableName: 'perguntas',
        timestamps: false,
    }
    
)