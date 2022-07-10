//configurar o dotenv
require("dotenv-safe").config();
//Fazer conexão HTTP, body-parser, utiliza o Router
const express = require("express");
//para evitar conflito de API
const cors = require("cors");
//uma constante para chamar o banco de dados
const db = require("./database/mongoConfig");
//instanciando o express
const app = express();
//conexão com o banco de dados.
db.connect();

//uma nova de fazer o body-parser(que eu posso utilizar o formato json)
app.use(express.json());
app.use(cors());

//importar as rotas
const autorRotas = require("./routes/autor");
const livroRotas = require("./routes/livro");

//definir uma rota raiz para as rotas
app.use("/autor", autorRotas);
app.use("/livro", livroRotas);

//serve para exportar a aplicação
module.exports = app;