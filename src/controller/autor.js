const Autor = require("../models/autor");


const cadastrarAutor = async (req, res) => {
    try {
        const { nome, biografia, email, dataNascimento } = req.body;

        const novoAutor = new Autor({
            nome,
            biografia,
            email,
            dataNascimento
        })

        const autorExiste = await Autor.findOne({email: req.body.email})
        if(autorExiste) {
            return res.status(400).json({
                error: "Email já cadastrado."
            })
        }

        const salvarAutor = await novoAutor.save();
        res.status(201).json({
            message: "Cadastro realizado com sucesso!",
            salvarAutor
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const listarAutores = async (req, res) => {
    try {
        const autores = await Autor.find();
        res.status(200).json({
            message: "Lista de autores",
            autores
        })
        if(autores.length == 0) {
            return res.status(404).json({
                message: "Nenhum autor encontrado."
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const listarAutoresPorId = async (req, res) => {
    try {
        const autor = await Autor.findById(req.params.id)

        if(!autor) {
            return res.status(404).json({message: "Cadastro não encontrado."})
        }

        res.status(200).json({
            message: "Autor:",
            autor
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const atualizarAutorPorId = async (req, res) => {
    try {
        const { nome, biografia, email } = req.body;
        const autor = await Autor.findById(req.params.id);

        if(!autor) {
            return res.status(404).json({message: "Cadastro não encontrado."})
        }

        autor.nome = nome || autor.nome
        autor.biografia = biografia || autor.biografia
        autor.email = email || autor.email

        const atualizarAutor = await autor.save();

        res.status(200).json({
            message: "Cadastro atualizado com sucesso!",
            atualizarAutor
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletarAutorPorId = async (req, res) => {
    try {
        const autor = await Autor.findById(req.params.id);

        if(!autor) {
            return res.status(404).json({message: "Cadastro não encontrado."})
        }

        await autor.delete();
        res.status(200).json({message: "Cadastro deletado com sucesso."})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    cadastrarAutor,
    listarAutores,
    listarAutoresPorId,
    atualizarAutorPorId,
    deletarAutorPorId
}