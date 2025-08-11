let listaAmigoSecreto = [];

function adicionarAmigo(){
    let amigos = document.querySelector('#amigo');
    let nome = amigos.value;
    let lista = document.getElementById ('listaAmigos');
    if (nome === ''){
        alert ('Por favor, insira um nome.');
        return;
    } else {
        listaAmigoSecreto.push(nome);
    }
    amigos.value = '';
    console.log(listaAmigoSecreto);

}
