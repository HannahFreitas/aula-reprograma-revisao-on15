const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livro");
const { checkAuth } = require("../middlewares/authentication");

router.post("/cadastrar", checkAuth, livroController.cadastrarLivro);
router.get("/listar", checkAuth, livroController.listarLivros);
router.get("/listar/:id", checkAuth, livroController.listarLivroPorId);
router.put("/atualizar/:id", checkAuth, livroController.atualizarLivroPorId);
router.delete("/deletar/:id", checkAuth, livroController.deletarLivroPorId);

module.exports = router;