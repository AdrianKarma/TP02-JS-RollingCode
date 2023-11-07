
let edad = prompt("Por favor, ingresa tu edad");

if (isNaN(edad)) {
    alert("La entrada no es un número válido");

} else if (edad > 122) {
    alert("La edad ingresada excede a La persona más anciana registrada en la historia que es Jeanne Louise Calment de Francia, Felicidades, Eres un record Guinness");
} else if (edad >= 18) {
    alert("Ya puedes conducir");
} else {
    alert("Aún no puedes conducir");
}