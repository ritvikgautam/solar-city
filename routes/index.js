var express = require('express');
var router = express.Router();

// Include controller files
var indexController = require('../controllers/indexController');
var interestController = require('../controllers/interestController');

// Index Requests
router.get('/', indexController.getHeartBeat);

// Interest Requests
router.get('/interest', interestController.getCustomerInterestList);
router.get('/interestCount', interestController.getCustomerInterestCount);
router.post('/interest', interestController.postCustomerInterestList);

// Handle 404
router.get('*', function (req, res, next) {
   res.sendStatus(404);
});

module.exports = router;