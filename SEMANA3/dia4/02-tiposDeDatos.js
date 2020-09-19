/**
 * TIPOS DE DATOS:
 * 1. string, cadenas de textos
 * 2. bolean, true o false
 * 3. number, numeros y decimales
 */

let costoFinal = 0;
let titulo = "Ensayo sobre la ceguera";
let nroPaginas = 185;
//variable estado tienen dos valores, true=nuevo, false=viejo
let estado = true;

let precio = 55;
let descuento = 0.1;

costoFinal = precio - (precio * descuento);

console.log(`Total a pagar ${costoFinal}`);