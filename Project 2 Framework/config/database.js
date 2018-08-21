const db = require('dotenv');
module.exports = {
    "connection": {
        "host": process.env.db_host,
        "user": process.env.db_user,
        "password": process.env.db_password
    },
    "database": "api_db",
    "users_table": "users"
};