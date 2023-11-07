let filas = prompt("Introduce el numero de filas");
let columnas = prompt("Introduce el numero de columnas");

filas = parseInt(filas);
columnas = parseInt(columnas);

if(isNaN(filas) || isNaN(columnas)) {
    alert("Por favor, introduce numeros validos");
} else {
    document.write('<table>');
    let contador = filas * columnas;
    for(let i = 0; i < filas; i++) {
        document.write('<tr>');
        for(let j = 0; j < columnas; j++) {
            document.write('<td>' + contador + '</td>');
            contador--;
        }
        document.write('</tr>');
    }
    document.write('</table>');
}2