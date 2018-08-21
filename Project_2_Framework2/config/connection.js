const db = require('dotenv');
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    database: "api_db",
    username: process.env.db_user,
    password: process.env.db_password,
    host: process.env.db_host,
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
module.exports = sequelize;