module.exports = (sequelize, DataTypes) => sequelize.define("Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100)
        },
        senha: {
            type: DataTypes.STRING(100)
        },
        sobrenome: {
            type: DataTypes.STRING(100)
        },
        email: {
            type: DataTypes.STRING(100)
        },
        sobrenome: {
            type: DataTypes.STRING(100)
        },
        cpf: {
            type: DataTypes.STRING(15)
        },
        celular: {
            type: DataTypes.STRING(15)
        },
        data_nasc: {
            type: DataTypes.DATE
        },
        sexo: {
            type: DataTypes.INTEGER
        },
        saldo: {
            type: DataTypes.STRING(100)
        }
    },
    {
        tableName: 'usuarios',
        timestamps: false,
    }
)