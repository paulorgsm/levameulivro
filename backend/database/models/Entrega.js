module.exports = (sequelize, DataTypes) => {
    const Entrega = sequelize.define( "Entrega",
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
    }
    
 );
    Entrega.associate = function (models){
        Entrega.hasOne(models.Livro,{
             foreignKey: "id_livro_troca",
             as: "entregas"
        })
    },

    Entrega.associate = function (models){
        Entrega.belongsTo(models.Troca,{
             foreignKey: "id_troca",
             as: "trocas"
        })
    }
    return Entrega;
};