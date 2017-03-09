var Sequelize = require('sequelize');
var config = require('./dbConfig.json');

module.exports = new Sequelize(
    config["path"],
    config["user"],
    config["pass"], {
        host: config["host"],
        dialect: 'mysql',
        logging: false
    });