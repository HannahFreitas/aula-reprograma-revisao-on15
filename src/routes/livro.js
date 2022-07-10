const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livro");

router.post("/cadastrar", livroController.cadastrarLivro);
router.get("/listar", livroController.listarLivros);

module.exports = router;