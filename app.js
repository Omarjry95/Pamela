var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
var multer  = require('multer');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artistsRouter = require('./routes/artists');
var genresRouter = require('./routes/genres');
var externalsRouter = require('./routes/externals');

var dbConfig = require('./config/config');

const seq = new sequelize(
    dbConfig.development.database,
    dbConfig.development.username,
    dbConfig.development.password,
    {
        host: dbConfig.development.host,
        dialect: dbConfig.development.dialect
    });

seq.authenticate()
    .then(() => {
        console.log('You Have Been Connected Successfully to Pamela.');
    })
    .catch(err => {
        console.error('Unable to Connect to Database:', err);
    });

var app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artists', artistsRouter);
app.use('/genres', genresRouter);
app.use('/externals', externalsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
