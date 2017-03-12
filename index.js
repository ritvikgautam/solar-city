var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var router = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started at port 3000!");
});

// Redirect all requests to router
app.use('/', router);