let express = require('express');
let compression = require('compression');
let createError = require('http-errors');
let path = require('path');
let router = require('./router');
// let viewsPath = path.join(__dirname, 'templates');
// let config = require('../config');

let app = express();

// view engine setup
// app.engine('ejs', require('ejs-locals'));
// app.set('views', viewsPath);
// app.set('view engine', 'ejs');

app.locals.rootPath = __dirname;
// app.locals.assets = config.get('assets');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {

    //console.log(111111111);
    //console.log(req.originalUrl);
    next();
});

router(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(404);
    console.log(req.originalUrl);
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.error(err);

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


// app.bdConnection = function (callback) {
//     initDb(function (err) {
//             callback(err);
//         }
//     );
// };


module.exports = app;