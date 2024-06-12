/* 4. Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día. Se debe considerar lo siguiente:
    ● 1 año tiene 365 días
    ● 1 semana tiene 7 días */

alert("A continuación se le solicitará ingresar una cantidad de días para calcular su equivalente en años, semanas y días");

/* Solicitar al usuario que ingrese la cantidad de días */
let diastotales = parseInt(prompt("Ingrese la cantidad de días para calcular su equivalente en años, semanas y días: "))

/* Calcular la cantidad de años dividiendo la cantidad total de días entre 365 y tomando la parte entera del resultado */
let años = Math.floor(diastotales / 365);

/* Calcular la cantidad de semanas dividiendo el resto de la división de la cantidad total de días entre 365 por 7 y tomando la parte entera del resultado */
let semanas = Math.floor((diastotales % 365) / 7);

/* Calcular los días restantes tomando el resto de la división de la cantidad total de días entre 7 */
let  dias = diastotales - (años * 365 + semanas * 7);

/* Mostrar el resultado al usuario */
console.log("Los días ingresados: ", diastotales, ", son equivalentes a:");
console.log("Años:", años);
console.log("Semanas:", semanas);
console.log("Días:", dias);