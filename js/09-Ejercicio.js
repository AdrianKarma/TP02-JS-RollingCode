let contador = 0;
for(let i = 1; i <= 500; i++) {
    let resultado = i;
    if(i % 4 === 0) {
        resultado += " (Multiplo de 4)";
    }
    if(i % 9 === 0) {
        resultado += " (Multiplo de 9)";
    }
    document.write('- ' + resultado + '<br>');
    contador++;
    if(contador === 5) {
        document.write('————————————————————-<br>');
        contador = 0; //reinicio contador
    }
}