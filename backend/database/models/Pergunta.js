module.exports = (sequelize, DataTypes) => sequelize.define(
    "Pergunta",
    {
        id:{
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
        }
    },
    {
        //tableName: 'perguntas',
        timestamps: false,
    }
    
)