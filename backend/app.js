var createError = require("http-errors");
var express = require("express");
var path = require("path");
const session = require("express-session");
/* var logger = require('morgan');
 */

/* Rotas temporárias */
var vbuscaRouter = require("./routes/vbusca");
var vcadastroRouter = require("./routes/vcadastro");
var vhomeRouter = require("./routes/vhome");
var vloginRouter = require("./routes/vlogin");
var vprodutosRouter = require("./routes/vprodutos");
var vtrocaDeLivroRouter = require("./routes/vtrocaDelivro");

/* Rotas definitivas */
const enderecoRouter = require("./routes/endereco");
const entregaRouter = require("./routes/entrega");
const livroRouter = require("./routes/livro");
const perguntaRouter = require("./routes/pergunta");
const trocaRouter = require("./routes/troca");
const usuarioRouter = require("./routes/usuario");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* app.use(logger('dev')); */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "Leva meu livro",
    resave: false,
    saveUninitialized: true,
  })
);
/* app.use(cookieParser()); */
app.use(express.static(path.join(__dirname, "public")));

/* Rotas temporárias */
app.use("/busca", vbuscaRouter);
app.use("/cadastro", vcadastroRouter);
app.use("/", vhomeRouter);
app.use("/login", vloginRouter);
app.use("/produtos", vprodutosRouter);
app.use("/troca-de-livro", vtrocaDeLivroRouter);

/* Rotas definitivas */
app.use("/enderecos", enderecoRouter);
app.use("/entregas", entregaRouter);
app.use("/livros", livroRouter);
app.use("/perguntas", perguntaRouter);
app.use("/trocas", trocaRouter);
app.use("/usuarios", usuarioRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
