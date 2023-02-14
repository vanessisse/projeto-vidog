// Validação de formulário

let botao = document.querySelector('.botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    let inputs = document.querySelectorAll('.input');
    let valid = true;

    inputs.forEach(function (input) {
        if (!input.value) {
            valid = false;
        }
    });

    if (valid) {
        alert("Login efetuado com sucesso!");
        inputs.forEach(function(input) {
          input.value = "";
        });
      } else {
        document.querySelector('.mensagem-cadastro').innerHTML = 
          '<span>Todos os campos devem ser preenchidos!</span>';
        setTimeout(function() {
          document.querySelector('.mensagem-cadastro').innerHTML = '';
        }, 4000);
      }      
});


