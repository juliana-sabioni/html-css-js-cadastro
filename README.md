# Sistema de Cadastro de Usuários

Este é um projeto completo de um sistema de cadastro de usuários utilizando **HTML, CSS, JavaScript (frontend)** e **Node.js com Express + MySQL (backend)**. A senha dos usuários é armazenada de forma segura utilizando hash com **bcryptjs**.

---

## 📁 Estrutura do Projeto

```
📦 projeto/

├── db.js
├── server.js
├── .env
└── package.json
└── frontend/
  ├── index.html
  ├── style.css
  └── script.js
```
---
## 🎯 Funcionalidades | Features

-> Formulário com os campos: Nome, email e senha 
- Nome | Name  
- E-mail  
- Senha | Password  
-> Validação simples para garantir que todos os campos sejam preenchidos | Basic form validation  
-> Exibição de mensagem de sucesso após o envio | Success message display  
-> Reset automático do formulário | Auto-reset form after submission  
-> Comunicação com back-end via `fetch` e rota POST `/cadastro` | Backend integration via POST `/cadastro`
-> Envio dos dados via fetch() para o servidor Node.js
-> Criptografia segura de senha com bcrypt
-> Inserção dos dados no banco de dados MySQL
---

## ⚙️ Pré-requisitos

- Node.js e npm instalados
- MySQL instalado
- Editor de código (como VSCode)
- Ferramenta para gerenciar banco (como DBeaver ou MySQL Workbench)

---

## 🛠️ Instalação e Execução

### 1. Clonar o projeto
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd projeto
```

### 2. Criar o banco de dados no MySQL

```sql
CREATE DATABASE cadastro_usuarios;

USE cadastro_usuarios;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);
```

---

## 🚀 Backend (Node.js + Express)

### 1. Acesse a pasta do backend

```bash
cd backend
```

### 2. Instale as dependências

```bash
npm install express mysql2 bcryptjs dotenv cors
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` com as configurações do seu banco:

```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=cadastro_usuarios
```

### 4. Inicie o servidor

```bash
node server.js
```

O servidor deve rodar em: [http://localhost:3000](http://localhost:3000)

---

## 💻 Frontend (HTML + CSS + JS)

### 1. Acesse a pasta do frontend
Abra o arquivo `index.html` no navegador.

> Ele contém um formulário que envia os dados para o backend via `fetch()`.

---

## ✅ Testando o Projeto

1. Preencha o formulário no navegador com nome, e-mail e senha.
2. Clique em **Cadastrar**.
3. Verifique se a mensagem de sucesso aparece.
4. Consulte o banco de dados (via DBeaver ou terminal):

```sql
SELECT * FROM usuarios;
```

---

## 🔒 Segurança

- As senhas são armazenadas usando hash com `bcryptjs`.
- A API utiliza `CORS` para permitir requisições do frontend.

---

## 🧠 Tecnologias Utilizadas

- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js, Express, bcryptjs, fetch API
- Banco de Dados: MySQL
- Ferramentas: dotenv, DBeaver, npm

---

## 📌 Autora

Desenvolvido por **Juliana Sabioni**

---

## 📃 Licença

Este projeto está sob a licença MIT.
