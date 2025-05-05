const express = require ('express');
const cors = require ('cors');
const app = express(); 

app.use(cors()); //libera requisições do front
app.use(express.json()); //permite ler o json do body

app.post('/cadastro', (req, res) => {
    const {nome, email, senha } = req.body;
    console.log(`Novo cadastro: ${nome}, ${email}`);

    res.status(201).json({mensagem: "Usuário cadastrado com sucesso"});
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})