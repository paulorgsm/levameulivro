module.exports = (sequelize, DataTypes) => sequelize.define(
    "entrega",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        rastreio:{
            type: DataTypes.STRING(50)
        },
        recebido:{
            type: DataTypes.BOOLEAN
        }
    },
    {
        
        timestamps: false,
    }
)