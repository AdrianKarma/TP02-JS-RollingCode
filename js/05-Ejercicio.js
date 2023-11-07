let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

function calcularLetraDNI() {
    let dni = prompt("Introduce tu DNI (El número debe ser entre 0 y 99999999) ");
    while(dni !== null) {
        if(isNaN(dni)) {
            alert("Lo introducido no es un numero");
        } else if(dni < 0 || dni > 99999999) {
            alert("El número debe estar entre 0 y 99999999");
        } else {
            let letra = letras[dni % 23];
            alert(`La letra de tu DNI es ${letra}`);
        }
        dni = prompt("Introduce tu DNI (El numero debe ser entre 0 y 99999999) ");
    }
}

calcularLetraDNI();