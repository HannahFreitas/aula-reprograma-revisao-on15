const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livro");

router.post("/cadastrar", livroController.cadastrarLivro);
router.get("/listar", livroController.listarLivros);
router.get("/listar/:id", livroController.listarLivroPorId);
router.put("/atualizar/:id", livroController.atualizarLivroPorId);
router.delete("/deletar/:id", livroController.deletarLivroPorId);

module.exports = router;