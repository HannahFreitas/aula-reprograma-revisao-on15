const express = require("express");
const router = express.Router();
const autorController = require("../controller/autor");
const { checkAuth } = require("../middlewares/authentication");


router.post("/cadastrar", checkAuth, autorController.cadastrarAutor);
router.get("/listar", checkAuth, autorController.listarAutores);
router.get("/listar/:id", checkAuth, autorController.listarAutoresPorId);
router.put("/atualizar/:id", checkAuth, autorController.atualizarAutorPorId);
router.delete("/deletar/:id", checkAuth, autorController.deletarAutorPorId);



module.exports = router;