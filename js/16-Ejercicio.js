const texto = prompt("Ingrese texto: ");


document.write("Texto invertido: ");

for(let i=texto.length ; i>=0 ; i--) // inventigando lei que es buena practica usar .length -1, pero aun no entiendo bien porque. funciana para este caso de ambas formas
{
    document.write(texto.charAt(i));
}