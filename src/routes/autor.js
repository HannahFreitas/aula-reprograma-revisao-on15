const express = require("express");
const router = express.Router();
const autorController = require("../controllers/autor");
const { checkAuth } = require("../middlewares/authentication");

router.post("/cadastrar", autorController.cadastrarAutor);
router.get("/listar", autorController.listarAutores);
router.get("/listar/:id", autorController.listarAutorPorId);
router.put("/atualizar/:id", autorController.atualizarAutorPorId);
router.delete("/deletar/:id", autorController.deletarAutorPorId);



module.exports = router;