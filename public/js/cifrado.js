var texto = document.getElementById("input");
var tamprimo;

function RSA(tamprimo) {
    this.tamprimo = tamprimo;
}

var p, q, n;
var fi;
var e, d;
var limite = 20;
var numerosPrimos = [];

for (var j = 2; j < limite; j++) {
    if (primo(j)) {
        numerosPrimos.push(j);
    }
}

function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

do p = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)];
while (p == q) {
    q = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)];
}

n = p * q;
fi = p - 1;
fi *= (q - 1);
do e = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)]; // considerar tamprimo
while (fi < e || maximoComunDivisor(e, fi) != 1);
d = modInverse(fi, e);

function generarPrimos() {
    do p = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)];
    while (p == q) {
        q = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)];
    }
    return p, q;
}

function maximoComunDivisor(a, b) {
    let temporal;
    while (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
};

function correrCifrado() {
    texto = document.getElementById("input");
    console.log();
    var respuesta = cifrar(texto.value, e, n);
    return respuesta;
}

function modInverse(a, m) {
    a = (a % m + m) % m
        // find the gcd
    const s = []
    let b = m
    while (b) {
        [a, b] = [b, a % b]
        s.push({ a, b })
    }
    // find the inverse
    let x = 1
    let y = 0
    for (let i = s.length - 2; i >= 0; --i) {
        [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)]
    }
    return (y % m + m) % m
}

function cifrar(mensaje, e, n) {
    respuesta = '';
    var i = 0;
    var respuesta = "";
    for (i; i < mensaje.length; i++) {
        var char = mensaje.charAt(i);
        var caf = parseInt(char, 10);
        var x = modPow(caf, e, n);
        respuesta += x.toString();
    }
    return respuesta;
}

function modPow(c, exponent, module) {
    var x = Math.pow(c, exponent);
    x %= module;
    return x;
}

function descifrar(mensaje, e, n) {
    var i = 0;
    var respuesta = mensaje.split(";");
    var mensajeDescifrado = "";
    for (i; i < texto.value.length; i++) {
        var de = respuesta[i];
        var caf = parseInt(de, 10);
        var x = modPow(caf, e, n);
        mensajeDescifrado += x.toString();
    }
    console.log("Descifrado = " + mensajeDescifrado)
    return mensajeDescifrado;
}

function Hacerdescifrado() {
    var mensaje = generarClaves();
    descifrar(mensaje, d, n);
}