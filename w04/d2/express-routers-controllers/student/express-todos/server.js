const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

// ------ import the files
const productsRouter = require('./routes/products');
const servicesRouter = require('./routes/services');
const nivethaRouter = require('./routes/nivetha');
const yirenRouter = require('./routes/yiren');
const contactsR = require('./routes/contacts');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/contactus', contactsR)


// ------ the usual way----------------
// app.get('/products', function (req, res) {
//   res.send('<h1>products</h1>');
// });
// app.get('/services', function (req, res) {
//   res.send('<h1>services</h1>');
// })
// app.get('/nivetha', function (req, res) {
//   res.send('<h1>nivetha</h1>');
// });
// app.get('/yiren', function (req, res) {
//   res.send('<h1>yiren</h1>');
// })


// -------the router way-----------

app.use('/products', productsRouter);
app.use('/services', servicesRouter);
app.use('/nivetha', nivethaRouter);
app.use('/yiren', yirenRouter);

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
