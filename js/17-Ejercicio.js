let texto = prompt("Introduce un texto: ");
let vocales = ['a', 'e', 'i', 'o', 'u'];
let encontrado = false;

for(let i = 0; i < texto.length; i++) {
    if(vocales.includes(texto[i].toLocaleLowerCase())) {
        alert("La primera vocal esta en la posicion: " + (i + 1));
        encontrado = true;
        break;
    }
}

if(!encontrado) {
    alert("No se encontraron vocales en el texto.");
}