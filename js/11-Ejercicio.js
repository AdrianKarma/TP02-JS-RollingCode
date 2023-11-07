let nombres = [];
let edades = [];

for(let i = 0; i < 3; i++) {
    let nombre = prompt("Introduce el nombre de la persona Nº" + (i+1));
    let edad = prompt("Introduce la edad de " + nombre);
    edad = parseInt(edad);
    if(isNaN(edad)) {
        alert("Por favor, introduce una edad valida");
        i--; // mermo el contador en 1 para asegurarme 3 nombres/edades validas
    } else {
        nombres.push(nombre);
        edades.push(edad);
    }
}

let edadMayor = Math.max(...edades); //el math requerido, ...edades se utiliza para pasar cada elemento del array edades separado para que funcione math.max

let indiceMayor = edades.indexOf(edadMayor);
console.log(indiceMayor) //para probar si me devuelve el indice

alert("La persona mayor es " + nombres[indiceMayor] + " con " + edadMayor + " años.");