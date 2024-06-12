/* 2. Realizar operaciones con dos números. Pedir al usuario que ingrese dos números
diferentes y mayores a cero. Para ambos números, calcular lo siguiente: 
● Suma
● Resta
● División
● Multiplicación
● Módulo
 */

alert("Desafío - Uso de variables y operadores aritméticos. Cynthia Abarca");
alert("A continuación se le solicitará ingresar 2 números para calcular las operaciones matemáticas de suma, resta, multiplicación, división o módulo de un número");

/* Declaración de variables para almacenar los números ingresados por el usuario */
let num1;
let num2;

/* Bucle para pedir al usuario que ingrese el primer número válido (mayor a cero) */
do {
    num1 = parseInt(prompt("Ingrese el primer número (debe ser mayor a cero):"));
} while (isNaN(num1) || num1 <= 0); /* La condición se repite mientras el valor ingresado no sea un número válido o sea menor o igual a cero */

/* Bucle para pedir al usuario que ingrese el segundo número válido (mayor a cero y diferente al primer número) */
do {
    num2 = parseInt(prompt("Ingrese el segundo número (debe ser mayor a cero y diferente al primer número):"));
} while (isNaN(num2) || num2 <= 0 || num2 === num1); /* La condición se repite mientras el valor ingresado no sea un número válido, sea menor o igual a cero, o sea igual al primer número */

// Convertir los números ingresados a enteros (en caso de que no lo sean ya)
num1 = parseInt(num1);
num2 = parseInt(num2);


/* Calcular las operaciones matemáticas de suma, resta, multiplicación, división o módulo de un número, según sea el caso. */
let suma = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2
let division = num1 / num2
let modulo = num1 % num2;


/* Mostrar los resultados de las operaciones matemáticas en la consola */
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);