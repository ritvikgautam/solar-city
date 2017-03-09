var Sequelize = require("sequelize");
var db = require("../config/db");

var User = require('./User');

var Interest = db.define('interest', {
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    interest: {
        type: Sequelize.BOOLEAN,
        field: 'interest'
    },
    interestReason: {
        type: Sequelize.STRING,
        field: 'interestReason'
    }
}, {
    freezeTableName: true,
    timestamps: false
});

User.hasOne(Interest);

db.sync();

module.exports = Interest;