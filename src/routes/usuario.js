const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario");
const { checkAuth } = require("../middlewares/autenticacao");


router.post("/cadastrar", usuarioController.cadastrarUsuario);
router.post("/login", usuarioController.login);
router.get("/listar", checkAuth, usuarioController.listarUsuarios);



module.exports = router;