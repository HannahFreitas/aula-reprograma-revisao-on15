const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario")
const { checkAuth } = require("../middlewares/authentication");

router.post("/cadastrar", usuarioController.cadastrarUsuario); // cadastrar usuario sempre sem autenticação
router.post("/login", usuarioController.login); // é um post porque estamos criando o token
router.get("/listar", checkAuth, usuarioController.listarUsuarios)

module.exports = router; 
