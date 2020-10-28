var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var app = express();
app.use(cors());
const PORT=4000;
app.listen(PORT,()=>{
  console.log(`server on start port=${PORT}`)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//setup mongooseDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sa:123@cluster0.phca6.mongodb.net/HKTTStoreDB?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true },
err => {
    if (err) {
        console.log('can not connect to mongoDD,because ' + err)
    } else {
        console.log("MongoDB database connection establish successfully!!!");
    }
});

//setup route main
const routerURL = require('./routes/routeURL');
routerURL(app);

//setup routeAPI
const routerAPI = require('./routes/routeAPI');
routerAPI(app);



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
