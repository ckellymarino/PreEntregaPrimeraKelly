alert("Bienvenido! Gana eligiendo la operación adecuada!");

alert("¿Estas listo para comenzar?");

let nombre = prompt("Ingresa tu nombre");

alert("Hola " + nombre);
let anioActual = 2024

let anioDeNacimiento = prompt("Ingresa tu año de nacimiento");

function calculoEdad (anioActual, anioDeNacimiento) {
    return anioActual - anioDeNacimiento;
}
let edad = calculoEdad(anioActual, anioDeNacimiento);

alert("Tu edad es " + edad);

let barco1 = parseInt(prompt("Ingrese el número del primer barco entre 1 y 10"))
let barco2 = parseInt(prompt("Ingrese el número del segundo barco entre 1 y 10"))

let combinacion = prompt("Seleccione una combinación que te haga ganar: \n1. Alternativa 1 \n2. Alternativa 2 \n3. Alternativa 3 \n4. Alternativa 4 ");

function calcular(barco1, barco2, combinacion) {
    switch (combinacion) {
        case "1":
            return barco1 + barco2;
        case "2":
            return barco1 - barco2;
        case "3":
            return barco1 * barco2;
        case "4":
            return barco1 / barco2;
        default:
            return "Operación inválida";
    }
}

let resultado = calcular(barco1, barco1, combinacion);
console.log(resultado);

if(resultado => 50) {
    alert ("Lo lograste elegiste una operación ganadora")
} else {
    alert("perdiste, la operación no es la adecuada")
}