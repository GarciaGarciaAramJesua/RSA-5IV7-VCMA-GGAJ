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

/*
    console.log(element.previousSibling.outerText);
    console.log(element);
    console.log(element.parentNode.classList.value);
    if(element.parentNode.classList.value == "mensaje-recibido"){
        alert(element.previousSibling.outerText);
    }
    if(element.parentNode.classList.value == "mensaje-recibido"){
        alert(element.previousSibling.outerText);
    }



    console.log(element.getElementsByClassName("contenido-recibido")[0].outerText);
*/