let texto = prompt("Introduce una cadena de texto");
let textoConGuiones = '';

for(let i = 0; i < texto.length; i++) {
    if(texto[i] !== ' ') {
        textoConGuiones += texto[i] + '-';
    }
}
alert(textoConGuiones);