module.exports = (sequelize, DataTypes) => sequelize.define(
    "Entrega",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        rastreio:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        recebido:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        //tableName: "entregas",
        timestamps: false,
    }
)