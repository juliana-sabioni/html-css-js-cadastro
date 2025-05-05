const express = require ('express');
const cors = require ('cors');
const app = express(); 
const db = require('./db');
require ('dotenv').config();
const bcrypt = require ('bcryptjs'); 

app.use(cors()); //libera requisições do front
app.use(express.json()); //permite ler o json do body

app.post('/cadastro', (req, res) => {
    const {nome, email, senha } = req.body;
    //console.log(`Novo cadastro: ${nome}, ${email}`);
    console.log('Dados recebidos:', { nome, email, senha });

    // Gera um hash da senha
    bcrypt.hash(senha, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Erro ao gerar o hash da senha', err);
            return res.status(500).json({mensagem:'Erro no cadastro'});
    }

    //salva o usuário no banco
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';

    db.query(sql, [nome, email, hashedPassword], (err, result) => {
        if (err){
            console.error('Erro ao inserir no banco:', err);
            return res.status(500).json({ mensagem: 'Erro no cadastro' });
        } else {
            console.log(`Usuário cadastrado: ${nome}, ${email}`);
            res.status(201).json({mensagem: "Usuário cadastrado com sucesso"});
        }
        });
    });
    //res.status(201).json({mensagem: "Usuário cadastrado com sucesso"});
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});