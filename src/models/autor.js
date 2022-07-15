const mongoose = require("mongoose");

const autorSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    biografia: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    dataNascimento: {
        type: Date // quando testar no postman usar o modelo americano MM-DD-AAAA
    }
}, {timestamps: true});

const Autor = mongoose.model("autor", autorSchema);

module.exports = Autor;