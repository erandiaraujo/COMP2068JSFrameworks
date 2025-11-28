var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Importa o arquivo onde definimos as rotas (Home, Kurt, Dave, Krist)
var indexRouter = require('./routes/index');

var app = express();

// view engine setup (Configura o EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares padrões do Express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Define a pasta 'public' para arquivos estáticos (CSS, Imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Define que o site usará o seu arquivo de rotas principal
app.use('/', indexRouter);

// catch 404 and forward to error handler
// (Se o usuário tentar uma página que não existe, cria um erro 404)
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