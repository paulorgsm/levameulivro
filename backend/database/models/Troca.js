module.exports = (sequelize, DataTypes)=> sequelize.define(
    "Troca",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_livro_troca:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        tableName: 'troca',
        timestamps: false,
    }
)