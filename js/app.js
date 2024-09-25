let amigos = []
let amigo = document.getElementById("nome-amigo");
let listaAmigos = document.getElementById("lista-amigos");
let listaSorteio = document.getElementById("lista-sorteio");

function adicionar() {
    amigo.value = amigo.value.toUpperCase();
    if (amigos.includes(amigo.value)) {
        return alert("Ja existe um amigo com esse nome");
    } else {

        amigos.push(amigo.value);

    }


    if (amigo.value == "") {
        alert("Nome Inválido");
        return;
    }

    if (listaAmigos.textContent == ("")) {
        listaAmigos.textContent = amigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ", " + amigo.value;

    }
    console.log(amigo.value);
    amigo.value = "";




}
function sortear() {
    if (amigos.length < 4) {
        alert("Você precisa de pelomenos 4 pessoas para participarem do sorteio");
        return;
    }
    embaralhar(amigos)

    for (let i = 0; i < amigos.length - 1; i++) {
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + "-->" + amigos[i + 1] + "<br>";
    }


}

function embaralhar(amigos) {


    for (let indice = amigos.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [amigos[indice - 1], amigos[indiceAleatorio]] =
            [amigos[indiceAleatorio], amigos[indice - 1]];

    }

}

function reiniciar() {
    amigos = [];
    amigo.value = "";
    listaAmigos.innerText = "";
    listaSorteio.innerText = "";
}