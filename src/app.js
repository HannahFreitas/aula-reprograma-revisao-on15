//Fazer conexão HTTP, body-parser, utiliza o Router
const express = require("express");
//para evitar conflito de API
const cors = require("cors");
//instanciando o express
const app = express();

//uma nova de fazer o body-parser(que eu posso utilizar o formato json)
app.use(express.json());
app.use(cors());

//serve para exportar a aplicação
module.exports = app;