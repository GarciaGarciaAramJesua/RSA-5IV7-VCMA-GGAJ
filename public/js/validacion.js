const regex = /^[0-9]+$/;
function validar(){
    if(regex.test(input.value) == true && input.value.length < 4){
        send();
    }else{
        alert('Solo puedes usar numeros, no puedes enviar un mensaje vacío y la entrada no debe ser mayor a 3 caracteres');
    }
}