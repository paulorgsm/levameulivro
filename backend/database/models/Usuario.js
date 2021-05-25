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
        email: {
            type: DataTypes.STRING(100)
        },
        senha: {
            type: DataTypes.STRING(100)
        },
        conf_senha: {
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
        cep: {
            type: DataTypes.STRING(8)
        },
        logradouro: {
            type: DataTypes.STRING(200)
        },
        numero: {
            type: DataTypes.STRING(20)
        },
        bairro: {
            type: DataTypes.STRING(150)
        },
        complemento: {
            type: DataTypes.STRING(200)
        },
        cidade: {
            type: DataTypes.STRING(200)
        },
        estado: {
            type: DataTypes.STRING(2)
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