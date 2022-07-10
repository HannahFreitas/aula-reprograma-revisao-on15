const app = require("./src/app");
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Meu servidor está rodando na porta ${PORT}`));