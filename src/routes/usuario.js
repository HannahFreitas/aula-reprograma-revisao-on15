const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario")
const { checkAuth } = require("../middlewares/authentication");

router.post("/cadastrar", usuarioController.cadastrarUsuario); // cadastrar usuario sempre sem autenticação
router.post("/login", usuarioController.login); // é um post porque estamos criando o token
router.get("/listar", checkAuth, usuarioController.listarUsuarios);
router.put("/atualizar/:id", checkAuth, usuarioController.atualizarUsuarioPorId);
router.delete("/deletar/:id", checkAuth, usuarioController.deletarUsuarioPorId);

module.exports = router; 
