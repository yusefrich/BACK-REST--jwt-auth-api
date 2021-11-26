require('dotenv').config()

module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true
    }
}