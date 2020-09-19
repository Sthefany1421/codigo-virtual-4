/**
 * Problema 2.2 pagina 30
 */

/*let c1 = 13;
let c2 = 10;
let c3 = 7;
let c4 = 19;
let suma = 0;
let promedio = 0;

suma = c1 + c2 + c3 + c4;
promedio = suma / 4;

console.log(`Joven su promedio es ${promedio}`);
*/

//variables ingresadas por el usuario por consola, el //promp se usa para que elusuario ponga tipo de dato string
//el parseInt es para que me permita ingresar datos tipo numero, pero la nueva manera es solo poner un + delante
let c1 = parseInt(prompt("Ingrese la primera nota:"));
let c2 = +prompt("Ingrese la segunda nota:");
let c3 = +prompt("Ingrese la tercera nota:");
let c4 = +prompt("Ingrese la cuarta nota:");
let suma = 0;
let promedio = 0;


suma = c1 + c2 + c3 + c4;
promedio = suma / 4;
//console.log(`Joven su promedio es ${promedio}`);
//el alert sirve para que no se ejecute por pantalla la respusta
alert(`Joven su promedio es ${promedio}`);