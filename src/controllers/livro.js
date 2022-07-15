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
        const livros = await Livro.find().populate("autor"); 
        // para fazer que apareça dentro de autor usamos o populate
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

const listarLivroPorId = async (req, res) => {
    try {
        const livro = await Livro.findById(req.params.id);

        if(!livro) {
            return res.status(404).json({message: "Livro não encontrado."});
        }
        res.status(200).json({
            message: "Livro:",
            livro
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const atualizarLivroPorId = async (req, res) => {
    try {
        const { titulo, ano, sinopse, genero, paginas } = req.body;
        const livro = await Livro.findById(req.params.id);

        if(!livro) {
            return res.status(404).json({message: "Livro não encontrado."});
        }
        livro.titulo = titulo || livro.titulo
        livro.ano = ano || livro.ano
        livro.sinopse = sinopse || livro.sinopse
        livro.genero = genero || livro.genero
        livro.paginas = paginas || livro.paginas

        const atualizarLivro = await livro.save();

        res.status(200).json({
            message: "Livro atualizado com sucesso!",
            atualizarLivro
        });
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deletarLivroPorId = async (req, res) => {
    try {
        const livro = await Livro.findById(req.params.id);

        if(!livro) {
            return res.status(404).json({message: "Livro não encontrado."});
        }
        
        await livro.delete();
        res.status(200).json({message: "Livro deletado com sucesso."})
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    cadastrarLivro,
    listarLivros,
    listarLivroPorId,
    atualizarLivroPorId,
    deletarLivroPorId
}