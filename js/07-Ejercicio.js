let numero = prompt("Introduce un numero no mayor de 50");
numero = parseInt(numero);
if(isNaN(numero) || numero < 1 || numero > 50) {
    alert("Por favor, introduce un numero valido entre 1 y 50");
} else {    
    for(let i = numero; i >= 1; i--) {
        let piramideInvertida = '';
        for(let j = 0; j < i; j++) {
            piramideInvertida += i;
        }
        document.write(piramideInvertida + '<br>');
    }
   }