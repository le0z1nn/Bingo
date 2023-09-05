window.onload = comecar;

function comecar() {
    novaCartela()
    document.getElementById("recarregar").onclick = outraCartela;
}

function novaCartela() {
    for (let i = 0; i < 24; i++) {
        numero(i);
    }
}

let uNumeros = new Array(75);

let coluna = new Array(
    0, 0, 0, 0, 0,
    1, 1, 1, 1, 0,
    2, 2, 2, 2,
    3, 3, 3, 3, 3,
    4, 4, 4, 4, 4);

function numero(thisNumero) {
    let pNumero = "quadrado" + thisNumero;

    let baseColuna = coluna[thisNumero] * 15;

    let novoNumero
    do {
        novoNumero = baseColuna + getNovoNumero() + 1

    } while (uNumeros[novoNumero]);

    uNumeros[novoNumero] = true;

    document.getElementById(pNumero).innerHTML =
        novoNumero;
    document.getElementById(pNumero).classList = ""
    document.getElementById(pNumero).onmousedown = trocaCor;

}

function getNovoNumero() {
    return Math.floor(Math.random() * 15);
}

function outraCartela() {
    for (let i = 1; i < uNumeros.length; i++) {
        uNumeros[i] = false
    }
    novaCartela();
    return false;

}
function trocaCor(evt) {
    if (evt) {
        thisNumero = evt.target;

    }
    if (thisNumero.className == "") {
        thisNumero.className = "trocaCor";
    } else {
        thisNumero.className = ""
    }
}