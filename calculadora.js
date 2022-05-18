var cantidad = "";
x = "";


function mostrar(numero) {
    document.getElementById("display").value = cantidad + numero

    cantidad = document.getElementById("display").value
    

}


function igual() {
    document.getElementById("display").value = math.evaluate(cantidad);

}

function limpiar() {
    document.getElementById("display").value = (cantidad = x)
}

