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
        },
        id_troca:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        //tableName: "entregas",
        timestamps: false,
    },
    Livro.associate = function (models){
        Livro.hasOne(models.Troca,{
             foreignKey: "id_livro_troca",
             as: "id"
        })
    },
    Entrega.associate = function (models){
        Entrega.belongsTo(models.Troca,{
             foreignKey: "id_troca",
             as: "id"
        })
    }
)