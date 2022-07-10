const Usuario = require("../models/usuario");
const { hashPassword } = require("../helpers/hashPassword")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cadastrarUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        const novoUsuario = new Usuario({
            email,
            password
        })

        const passwordHashed = await hashPassword(novoUsuario.password, res)
        novoUsuario.password = passwordHashed; // a partir de agora a senha do novo usuario vai aparecer hasheada

        const usuario = await Usuario.findOne({email: req.body.email}); // dissemos lá na model que o email era único
        
        if(usuario) {
            res.status(400).json({message: "Usuário já cadastrado no sistema"})
        }
        const salvarUsuario = await novoUsuario.save();

        res.status(201).json({
            message: "Usuário cadastrado com sucesso.",
            salvarUsuario
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuario = await Usuario.findOne({email: email}).select("+password") // o email que vem do body

        if(!usuario) {
            return res.status(400).json({message: "Email ou senha incorretos"})
        }

        const checarPassword = await bcrypt.compare(password, usuario.password); //compara a senha digitada com a senha do usuario, mas como já tá no bcrypt já está criptografado

        if(!checarPassword) {
            return res.status(400).json({message: "Email ou senha incorretos"})
        }
        // criação do token
        const SECRET = process.env.SECRET;
        const token = jwt.sign({id: usuario._id, email: usuario.email}, SECRET);

        res.status(200).json({
            message: "Login efetuado com sucesso.",
            token
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const listarUsuarios = async (req, res) => {
    try {
        const usuario = await Usuario.find();
        if(usuario.length == 0) {
            return res.status(404).json({
                message: "Nenhum usuário encontrado."
            })
        }

        res.status(200).json({
            message: "Lista de usuários:",
            usuario
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    cadastrarUsuario,
    login,
    listarUsuarios
}