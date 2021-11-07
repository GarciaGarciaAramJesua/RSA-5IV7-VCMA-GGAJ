const salida = document.getElementById("salida");

function descifrar(element) {
    let textoCifrado;
    if(element.className == "mensaje-recibido"){
        textoCifrado = element.getElementsByClassName("contenido-recibido")[0].outerText;
        console.log(textoCifrado);
    }
    if(element.className == "mensaje-enviado"){
        textoCifrado = element.getElementsByClassName("contenido-enviado")[0].outerText;
        console.log(textoCifrado);
    }
    salida.innerHTML = textoCifrado;
}