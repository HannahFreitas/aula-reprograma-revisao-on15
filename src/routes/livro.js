const express = require("express");
const router = express.Router();
const livroController = require("../controller/livro");


router.post("/cadastrar", livroController.cadastrarLivros);
router.get("/listar", livroController.listarLivros);



module.exports = router;