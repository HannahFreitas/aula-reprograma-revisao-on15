const Livro = require("../models/livro");

const cadastrarLivros = async (req, res) => {
    try {
        const { titulo, ano, sinopse, genero, paginas, autor } = req.body;

        const novoLivro = new Livro({
            titulo,
            ano,
            sinopse,
            genero,
            paginas,
            autor
        })

        const livroExiste = await Livro.findOne({titulo: req.body.titulo})
        if(livroExiste) {
            return res.status(400).json({
                error: "Livro já cadastrado."
            })
        }

        const salvarLivro = await novoLivro.save();
        res.status(201).json({
            message: "Livro cadastrado com sucesso.",
            salvarLivro
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const listarLivros = async (req, res) => {
    try {
        const livros = await Livro.find().populate("autor");
        res.status(200).json({
            message: "Lista de livros",
            livros
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    cadastrarLivros,
    listarLivros
}