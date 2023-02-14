//  Estilização do coração

let coracoes = document.querySelectorAll('.bi-heart-fill');

coracoes.forEach(function(coracao){
    coracao.addEventListener('click', function(event){
        event.target.classList.toggle('coracao');
    });
});