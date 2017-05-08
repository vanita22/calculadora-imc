function calcularIMC() {
    var peso = prompt('Ingrese su peso');
    var altura = prompt('Ingrese su altura');
    var operacion = peso / Math.pow(altura, 2);
    alert(operacion);
}

calcularIMC();