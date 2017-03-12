var sequelize = require('sequelize');

var User = require('../models/User');
var Interest = require('../models/Interest');

module.exports = {
    getListFromDatabase: function (callback) {
        User.findAll({
            include: [
                {
                    model: Interest
                }
            ]
        }).then(function (res) {
            // Format the response in JSON
            var interestResult = [];

            for(var i = 0; i < res.length; i++) {
                var userId = res[i]['dataValues']['id'];
                var firstName = res[i]['dataValues']['firstName'];
                var lastName = res[i]['dataValues']['lastName'];
                var dob = res[i]['dataValues']['dob'];
                var address = res[i]['dataValues']['address'];
                var interest = res[i]['dataValues']['interest']['dataValues']['interest'];
                var interestReason = res[i]['dataValues']['interest']['dataValues']['interestReason'];

                interestResult.push({
                    userId: userId,
                    firstName: firstName,
                    lastName: lastName,
                    dob: dob,
                    address: address,
                    interest: interest,
                    interestReason: interestReason
                })
            }
            callback(JSON.stringify(interestResult));
        }).catch(function (err) {
            res.sendStatus(500);
        });
    },

    getCountFromDatabase: function (callback) {
        Interest.count({where: {
            interest: true
        }}).then(function (response) {
            callback(response);
        }).catch(function (err) {
            res.sendStatus(500);
        })
    },

    insertIntoDatabase: function (firstName, lastName, dob, address, interest, interestReason, callback) {
        User.create({
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            address: address
        }).then(function (user) {
            Interest.create({
                interest: interest,
                interestReason: interestReason
            }).then(function (interest) {
                user.setInterest(interest);
                callback();
            }).catch(function (err) {
                console.log("Error entering values to the Interest database!");
            })
        });
    }
};