var createError = require('http-errors');
var express = require('express');
var path = require('path');
const session = require('express-session');
/* var logger = require('morgan');
 */
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var produtosRouter = require('./routes/produtos');
var entrarNoTimeRouter = require('./routes/entrarNotime');
var trocaRouter = require('./routes/trocaDelivro');
var cadastroRouter = require('./routes/cadastro');
var cadastro2Router = require('./routes/cadastro2');
var buscaRouter = require('./routes/busca');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* app.use(logger('dev')); */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret:"Leva meu livro",
  resave: false,
  saveUninitialized: true
}
));
/* app.use(cookieParser()); */
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', homeRouter);
app.use('/', produtosRouter);
app.use('/', entrarNoTimeRouter);
app.use('/', trocaRouter);
app.use('/', cadastroRouter);
app.use('/', cadastro2Router);
app.use('/', buscaRouter);

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