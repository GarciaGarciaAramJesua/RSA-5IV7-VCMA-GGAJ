const salida = document.getElementById("salida");

function descifrar(element) {
    let textoCifrado;
    textoCifrado = element.getElementsByClassName("magia")[0].outerText;
    salida.innerHTML = textoCifrado;
}