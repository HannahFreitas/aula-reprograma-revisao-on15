// express serve para fazermos conexões http, ou seja, montar um servidor. é um framework. Também permite o body-parser. Faz a conexão com os endpoints dentro do CRUD.
const express = require("express");
//Para evitar conflito de API
const cors = require("cors");
//instaciando o express, para que a gente possa utilizá-lo
const app = express();

//Forma de fazer o body-parser, nos dá acesso ao formato json para a aplicação
app.use(express.json())
app.use(cors());

//serve para exportar a aplicação
module.exports = app;