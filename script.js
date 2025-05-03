document.getElementById('cadastro-form').addEventListener('submit', (event) =>{
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim(); // Obtém o valor do campo nome
    const email = document.getElementById('email').value.trim(); 
    const senha = document.getElementById('senha').value.trim(); 

    if(nome && email && senha){
        document.getElementById('mensagem-sucesso').style.display = 'block'; // Exibe a mensagem de sucesso. O display = 'block' faz o elemento aparecer na tela. o block
        document.getElementById('cadastro-form').reset(); // Limpa o formulário após o envio
    }
});