const Autor = require("../models/autor"); // com maiuscula porque é uma classe, mesmo nome do model

// create, post, createAuthor
const cadastrarAutor = async (req, res) => {
    try {
        const { nome, biografia, email, dataNascimento } = req.body;

        const novoAutor = new Autor({ // vem da const na linha 2
            nome, // o que pegamos do body, seguindo o modelo de autor
            biografia,
            email,
            dataNascimento
        });

        // Constante pare verificar se o que está sendo criado já existe:
        const autorExiste = await Autor.findOne({email: req.body.email}); // se o que digitei de email no body já existir
        if(autorExiste) { //se o req.body vier um email que já existe
            return res.status(400).json({
                error: "Email já cadastrado."
            });
        }

        const salvarAutor = await novoAutor.save();
        if(salvarAutor){res.status(201).send({
            "message": "Cadastro realizado com sucesso",   
            salvarAutor})};

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
};

const listarAutores = async (req, res) => {
    try {
        const autores = await Autor.find();
        res.status(200).json({
            message: "Lista de autores",
            autores
        });
        if(autores.lenght ==0) {
            return res.status(404).json({
                message: "Nenhum autor cadastrado"
            });
        };
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
};

const listarAutorPorId = async (req, res) => {
    try {
        const autor = await Autor.findById(req.params.id);

        if(!autor) {
            return res.status(404).json({message: "Autor não encontrado."});
        }

        res.status(200).json({
            message: "Autor:",
            autor
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const atualizarAutorPorId = async (req, res) => {
    try {
        const { nome, biografia, email } = req.body; // não faz sentido atualizar data de nascimento
        const autor = await Autor.findById(req.params.id);

        if(!autor) {
            return res.status(404).json({message: "Autor não encontrado."});
        }
        autor.nome = nome || autor.nome
        autor.biografia = biografia || autor.biografia
        autor.email = email || autor.email

        const atualizarAutor = await autor.save();

        res.status(200).json({
            message: "Cadastro atualizado com sucesso!",
            atualizarAutor
        });
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deletarAutorPorId = async (req, res) => {
    try {
        const autor = await Autor.findById(req.params.id);

        if(!autor) {
            return res.status(404).json({message: "Cadastro não encontrado."});
        }

        await autor.delete();
        res.status(200).json({message: "Cadastro deletado com sucesso."})
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports ={
    cadastrarAutor,
    listarAutores,
    listarAutorPorId,
    atualizarAutorPorId,
    deletarAutorPorId
};