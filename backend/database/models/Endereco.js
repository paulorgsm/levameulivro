module.exports = (sequelize, DataTypes) => {
    const Endereco =sequelize.define(
        "Endereco",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            cep:{
             type: DataTypes.INTEGER(8)
            },
            logradouro:{
                type: DataTypes.STRING(200)
            },
            numero:{
                type: DataTypes.STRING(20)
            },
            bairro:{
                type: DataTypes.STRING(150)
            },
            complemento:{
                type: DataTypes.STRING(250)
            },
            cidade:{
                type: DataTypes.STRING(200)
            },
            estado:{
                type: DataTypes.STRING(2)
            },
            id_usuario:{
                type: DataTypes.STRING(2)
            }
        },
        {
            //tableName: 'enderecos',
            timestamps: false,
        }     
    );
    Endereco.associate = function (models){
        Endereco.belongsTo(models.Usuario,{
             foreignKey: "id_usuario",
             as: "usuario_endereco"
        })
    }
    return Endereco;
};
