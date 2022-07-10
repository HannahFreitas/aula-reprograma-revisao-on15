const Livro = require("../models/livro");

const cadastrarLivro = async (req, res) => {
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

        const livroExiste = await Livro.findOne({titulo: req.body.titulo});
        if(livroExiste) {
            return res.status(400).json({
                error: "Livro já cadastrado"
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
        });
    }
};

const listarLivros = async (req, res) => {
    try {
        const livros = await Livro.find().populate("autor"); // para fazer que apareça dentro de autor usamos o populate
        //fazendo a referencia ao model de autor; no controller de autor paramos a função get no .find()
        res.status(200).json({
            message: "Lista de livros",
            livros
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    cadastrarLivro,
    listarLivros
}