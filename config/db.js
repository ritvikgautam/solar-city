var Sequelize = require('sequelize');
var config;

if(process.env.IS_SHIPPABLE) {
    config = require('./dbConfigShippable.json.json');
} else if(process.env.WEB_CONCURRENCY) {
    config = require('./dbConfigHeroku.json.json')
} else {
    config = require('./dbConfig.json')
}

var sequelize = new Sequelize(
    config["path"],
    config["user"],
    config["pass"], {
        host: config["host"],
        dialect: 'mysql',
        logging: false
    });

module.exports = sequelize;