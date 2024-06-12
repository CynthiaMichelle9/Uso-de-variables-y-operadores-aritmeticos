/* 3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las escalas de temperatura:
   ● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K

   ● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F */

alert("A continuación se le solicitará ingresar temperatura en grados Celcius para realizar la conversión a grados Fahrenheit y Kelvin");

/* Solicitar al usuario que ingrese la temperatura en grados Celcius */
let celcius = parseFloat(prompt("Ingrese la temperatura en °Celcius"));

/* Convertir la temperatura de Celsius a Kelvin */
let kelvin =   celcius + 273.15;

/* Convertir la temperatura de Celsius a Fahrenheit */
let fahrenheit = (celcius * (9/5)) + 32;

/* Mostrar los resultados con tres decimales en la consola */
console.log("Temperatura en °Kelvin: ", kelvin.toFixed(3));
console.log("Temperatura en °Fahrenheit: ", fahrenheit.toFixed(3));
