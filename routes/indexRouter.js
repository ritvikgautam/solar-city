var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');

router.use('/', indexController.getHeartBeat);

module.exports = router;