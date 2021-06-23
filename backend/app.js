var createError = require("http-errors");
var express = require("express");
var path = require("path");
const session = require("express-session");
/* var logger = require('morgan');
 */

/* Rotas definitivas */
const enderecoRouter = require("./routes/endereco");
const entregaRouter = require("./routes/entrega");
const livroRouter = require("./routes/livro");
const perguntaRouter = require("./routes/pergunta");
const trocaRouter = require("./routes/troca");
const usuarioRouter = require("./routes/usuario");

var app = express();

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

/* Rotas definitivas */
app.use("/enderecos", enderecoRouter);
app.use("/entregas", entregaRouter);
app.use("/livros", livroRouter);
app.use("/perguntas", perguntaRouter);
app.use("/trocas", trocaRouter);
app.use("/usuarios", usuarioRouter);

module.exports = app;
