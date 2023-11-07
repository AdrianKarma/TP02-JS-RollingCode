let texto = prompt("Introduce un texto");
let contadorVocales = 0;

for(let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();// lo paso a minusculas
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVocales++;
    }
}

alert("El texto tiene " + contadorVocales + " vocales.");