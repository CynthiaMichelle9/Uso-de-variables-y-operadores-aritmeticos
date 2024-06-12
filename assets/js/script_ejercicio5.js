/* 5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden
a continuación.
    ● La suma de todos los números.
    ● El promedio de los 5 números ingresados. */

alert("A continuación se le solicitará ingresar 5 números")

let num1 = prompt("Ingrese un número: ");
num1 = parseInt(num1);

let num2 = prompt("Ingrese otro número: ");
num2 = parseInt(num2);

let num3 = prompt("Ingrese otro número: ");
num3 = parseInt(num3);

let num4 = prompt("Ingrese otro número: ");
num4 = parseInt(num4);

let num5 = prompt("Ingrese otro número: ");
num5 = parseInt(num5);

let suma =  num1 + num2 + num3 + num4 + num5;

let promedio = (num1 + num2 + num3 + num4 + num5)/5;

console.log("La suma de todos los números es: ", suma);
console.log("El promedio de los 5 números es: ", promedio.toFixed(2));