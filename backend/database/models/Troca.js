module.exports = (sequelize, DataTypes)=> sequelize.define(
    "Troca",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }
)