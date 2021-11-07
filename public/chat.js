const socket = io();

const htmlRecibir1 = ' \
<div class="mensaje-recibido"> \
    <img class="avatar" src="assets/avatar1.jpg"> \
    <div class="contenido-recibido">';

const htmlRecibir2 = ' \
    </div> \
    <img class="candado" src="assets/candado.png" onclick="descifrar(this.parentNode)"> \
</div>';

const htmlEnviar1 = ' \
<div class="mensaje-enviado"> \
    <img class="candado" src="assets/candado.png" onclick="descifrar(this.parentNode)"> \
    <div class="contenido-enviado">';

const htmlEnviar2 = ' \
    </div> \
    <img class="avatar" src="assets/avatar2.jpg"> \
</div>';

function send(){
    let contenedor = document.getElementById('chat');
    let input = document.getElementById('input');
    socket.emit('chat:enviar',{
        contenido: input.value,
    });
    let nuevoMensaje = htmlEnviar1 + input.value + htmlEnviar2;
    contenedor.innerHTML = nuevoMensaje + contenedor.innerHTML;
}

socket.on('chat:recibir', function (data){
    let contenedor = document.getElementById('chat');
    let nuevoMensaje = htmlRecibir1 + data.contenido + htmlRecibir2;
    contenedor.innerHTML = nuevoMensaje + contenedor.innerHTML;
});