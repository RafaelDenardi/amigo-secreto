let listaAmigoSecreto = [];

function adicionarAmigo(){
    let amigos = document.getElementById('amigo');
    let nome = amigos.value;
    
    if (nome === ''){
        alert ('Por favor, insira um nome.');
        return;
    } else if (listaAmigoSecreto.some(amigo => amigo.toLowerCase() === nome.toLowerCase())) {
    alert('Esse nome já foi adicionado.');
    return;
    }else {
        listaAmigoSecreto.push(nome);
    }
    amigos.value = '';
    exibirListaAmigos();

}

function exibirListaAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for (let i = 0; i < listaAmigoSecreto.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigoSecreto[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let amigos = listaAmigoSecreto;

    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione nomes antes de sortear.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}