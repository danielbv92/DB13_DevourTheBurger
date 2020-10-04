const mysql = require('mysql');
const dbConfig = require('./db.config');

var con = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    multipleStatements: true,
});

module.exports = con;