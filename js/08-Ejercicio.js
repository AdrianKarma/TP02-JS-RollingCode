let numero = prompt("Introduce un numero no mayor de 50");
numero = parseInt(numero);
if(isNaN(numero) || numero < 1 || numero > 50) {
    alert("Por favor, introduce un numero valido entre 1 y 50");
} else {
       for(let i = 1; i <= numero; i++) {
        let piramide = '';
        for(let j = 1; j <= i; j++) {
            piramide += j;
        }
        document.write(piramide + '<br>');
    }  
}