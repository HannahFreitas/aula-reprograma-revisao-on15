//configurar o dotenv, o dotenv vem primeiro porque o ponto de entrada da aplicação é o app, então a variavel de ambiente vai estar em todo o projeto
require("dotenv-safe").config();
// express serve para fazermos conexões http, ou seja, montar um servidor. é um framework. Também permite o body-parser. Faz a conexão com os endpoints dentro do CRUD.
const express = require("express");
//Para evitar conflito de API
const cors = require("cors");
// uma constante para chamar o banco de dados
const db = require("./database/mongoConfig");
//instaciando o express, para que a gente possa utilizá-lo
const app = express();
//conexão com o banco de dados
db.connect();

//Forma de fazer o body-parser, nos dá acesso ao formato json para a aplicação
app.use(express.json());
app.use(cors());

// importar as rotas
const autorRotas = require("./routes/autor");
const livroRotas = require ("./routes/livro");
const usuarioRotas = require ("./routes/usuario")

//definir uma rota raiz para as rotas do autor
app.use("/autor", autorRotas);
app.use("/livro", livroRotas);
app.use("/usuario", usuarioRotas);

//serve para exportar a aplicação
module.exports = app;