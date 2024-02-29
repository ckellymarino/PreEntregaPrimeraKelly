alert("Bienvenido! ¿Queres calcular tu signo chino?");

alert("¿Estas listo para comenzar?");

let nombre = prompt("Ingresa tu nombre");

alert("Hola " + nombre);
let anioActual = 2024
let anioDeNacimiento = prompt("Ingresa tu año de nacimiento");

function calculoEdad (anioActual, anioDeNacimiento) {
    return anioActual - anioDeNacimiento;
}
let edad = calculoEdad(anioActual, anioDeNacimiento);

alert("Tu edad es " + edad)


