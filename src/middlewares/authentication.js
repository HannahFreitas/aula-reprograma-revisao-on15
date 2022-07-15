const jwt = require("jsonwebtoken");

exports.checkAuth = (req, res, next) => {
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1]; 
    // gerando o token: pega o head, da um slipt vazio na segunda posição do array, pq a primeira é 0

    if(!token) {
        return res.status(401).json({
            message: "Acesso negado."
        })
    }

    try {
        const SECRET = process.env.SECRET;

        jwt.verify(token, SECRET);

        next();
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}