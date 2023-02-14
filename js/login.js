// Validação de login

let botao = document.querySelector('.botao');

botao.addEventListener('click', function(){
    let inputValor = document.querySelector('.input').value;
    if(inputValor === ''){
        document.querySelector('.mensagem-cadastro').insertAdjacentHTML(
            'afterend',
            `<div class='card-cadastro'>
            <span>Todos os campos devem ser preenchidos!</span>
            </div>`
        );
        let mensagem = document.querySelector('.card-cadastro');
        setTimeout(() => {
            mensagem.style.display = 'none';
        }, 4000);
    }else{
        alert('Login efetuado com sucesso!')
    }

    document.querySelector('#user-login').value = '';
    document.querySelector('#user-senha').value = '';
})