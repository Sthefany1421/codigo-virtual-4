/**
 * para imprimir texto en la consola del navegador, para eso es el console: log 
 */
//console.log("Mi nombre");
/**
 * VARIABLES
 *siempre se ponen a la izquierda del igual
 * las cadenas de texto se escriben entre comillas, los numeros van sin comillas
 * let es un prefijo que se coloca la primera vez que se crea una variable
 * una variable puede ser modificada o re-utilizada
 * cuando las variables estan compuestas de dos nombres se escibe asi fechaNacimiento, osea la segunta palabra va en mayuscula
 */

let nombre = "Jorge";
let apellido = "Garnica"
let edad = 29;
console.log(`Edad: ${edad} años`);
let numero = 10;
let fechaNacimiento = "09-08-1991"
    //modificando el valor de la varible
edad = 28;

//imprimiendo variable, colocar la palabra log para el emmet

console.log(nombre);
console.log("nombre");
//concatenar: es unir los valores de dos variables
console.log("edad " + edad + " años");
//se usa estas comillas(``) para concatenar poniendo el signo del dolar para llamar a la variable o las operaciones entre variables, la cual va entre llaves({}) 
console.log(`nombre ${nombre} y apellido ${apellido}`);