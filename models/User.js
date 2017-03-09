var Sequelize = require("sequelize");
var db = require("../config/db");

var User = db.define('user', {
    firstName: {
        type: Sequelize.STRING,
        field: 'firstName'
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'lastName'
    },
    dob: {
        type: Sequelize.STRING,
        field: 'dob'
    },
    address: {
        type: Sequelize.STRING,
        field: 'address'
    }
}, {
    freezeTableName: true,
    timestamps: false
});

db.sync();

module.exports = User;