var express     = require('express');
var morgan      = require('morgan');
var app         = express();
var port        = process.env.PORT || 8080;
var enviroment  = process.env.NODE_ENV || 'development';

app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(enviroment + ' app listening on port ' + port);
});
