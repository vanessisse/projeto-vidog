// CEP

function consultaEndereco(){
    let cep = document.querySelector('#cep').value;
    if(cep.length != 8){
        alert('O CEP precisa ter 8 números');
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(function(data){
            mostrarEndereco(data);
        });
    });
}

function mostrarEndereco(dados){
    let localizacao = document.querySelector('.localizacao');
    let botaoLocalizacao = document.querySelector('#botao-localizacao');
    if(dados.erro){
        alert('Não encontrado')
    }else{
    localizacao.innerHTML = dados.localidade;

    cep.style.display = 'none';
    localizacao.style.display = 'flex';
    botaoLocalizacao.style.display = 'none';
    }
}