var interestDAO = require('../dao/interestDAO');

module.exports = {
    // Get all customers who have expressed an interest
    getCustomerInterestList: function (req, res, next) {
        interestDAO.getListFromDatabase(function (interestResult) {
            res.send(interestResult);
        });
    },

    // Get count of customers who have expressed an interest
    getCustomerInterestCount: function (req, res, next) {
        interestDAO.getCountFromDatabase(function (count) {
            res.send(JSON.stringify({count: count}));
        })
    },

    // Add a new customer who has expressed an interest
    postCustomerInterestList: function(req, res, next) {
        var firstName = req.query.firstName;
        var lastName = req.query.lastName;
        var dob = req.query.dob;
        var address = req.query.address;
        var interest = req.query.interest;
        var interestReason = req.query.interestReason;

        interestDAO.insertIntoDatabase(firstName, lastName, dob, address, interest, interestReason, function () {
            res.sendStatus(200);
        });
    }
};