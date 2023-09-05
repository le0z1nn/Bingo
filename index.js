window.onload = comecar;

function comecar() {
    novacartela();//cria uma nova cartela 
    document.getElementById("recarregar").onclick = outracartela;//vai gerar uma nova cartela quando clicar no "clique aqui"
}

function novacartela() {
    for (let i = 0; i < 24; i++) {
        numero(i);//função que recebe a posição por parametro.
    }
}
//declarando o array que guarda todos os numeros possiveis dentro do bingo 
let unumeros = new Array(76);

//declarando o array com as colunas do bingo 
let coluna = new Array(
    0, 0, 0, 0, 0, //B
    1, 1, 1, 1, 1, //I
    2, 2, 2, 2,    //N
    3, 3, 3, 3, 3, //G
    4, 4, 4, 4, 4);  //O

function numero(thisnumero) {

    let pnumero = "quadrado" + thisnumero;
    //pNumero recebe a posição do numero e identifica ele no html.

    let basecoluna = coluna[thisnumero] * 15;
    //cada coluna gera numeros em um intervalo de 15 numeros.

    let novonumero;

    do {
        novonumero = basecoluna + getnovonumero() + 1
    } while (unumeros)[novonumero];

    unumeros[novonumero] = true;

    document.getElementById(pnumero).innerHTML = novonumero;
    document.getElementById(pnumero).classList = ""
    document.getElementById(pnumero).onmousedown = trocacor;


}

function getnovonumero() {
    return Math.floor(math.random() * 15);
}

function outracartela() {
    for (let i = 1; i < unumeros.length; i++) {
        unumeros[i] = false
    }
    novacartela();
    return false;
}

function trocacor(evt) {
    if (evt) {
        thisnumero = evt.target;
    }
    if (thisnumero.classname == "") {
        thisnumero.classname = "trocacor";
    } else{
        thisnumero.classname = ""
    }

}