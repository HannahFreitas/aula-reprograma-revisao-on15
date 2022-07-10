const mongoose = require("mongoose");


const livroSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    titulo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    sinopse: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "autor"
    }
}, {timestamps: true})


const Livro = mongoose.model("livro", livroSchema);

module.exports = Livro;