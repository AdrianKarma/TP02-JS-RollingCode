let cadena = "";
let input;

while (true) {
    input = prompt("Ingresa una cadena de texto");
    if (input === null) {
        break;
    } else {
        cadena += input + "-";
    }
}

if (cadena.endsWith("-")) {
    cadena = cadena.slice(0, -1);
}

alert(cadena);