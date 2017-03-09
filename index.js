var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var indexRouter = require('./routes/indexRouter');
var interestRouter = require('./routes/interestRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started at port 3000!");
});

app.use('/', indexRouter);
app.use('/interest', interestRouter);