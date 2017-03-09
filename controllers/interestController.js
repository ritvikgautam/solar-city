var interestDAO = require('../dao/interestDAO');

module.exports = {
    // Get all customers who have expressed an interest
    getCustomerInterestList: function (req, res, next) {
        interestDAO.getListFromDatabase(function (interestResult) {
            res.status(200).send(interestResult);
        });
    },

    // Get count of customers who have expressed an interest
    getCustomerInterestCount: function (req, res, next) {
        interestDAO.getCountFromDatabase(function (count) {
            res.status(200).send(JSON.stringify({count: count}));
        })
    },

    // Add a new customer who has expressed an interest
    postCustomerInterestList: function(req, res, next) {
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var dob = req.body.dob;
        var address = req.body.address;
        var interest = req.body.interest;
        var interestReason = req.body.interestReason;

        if(!firstName || !lastName || !dob || !address || !interest) {
            res.sendStatus(500);
        } else {
            interestDAO.insertIntoDatabase(firstName, lastName, dob, address, interest, interestReason, function () {
                res.sendStatus(200);
            });
        }
    }
};