const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();

const enderecoRouter = require("./routes/endereco");
const entregaRouter = require("./routes/entrega");
const livroRouter = require("./routes/livro");
const perguntaRouter = require("./routes/pergunta");
const trocaRouter = require("./routes/troca");
const usuarioRouter = require("./routes/usuario");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

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

module.exports = app;
