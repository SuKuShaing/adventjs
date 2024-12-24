/*
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
*/

/* @param {string[]} box
*  @returns {boolean} True if the gift is inside the box
*/

function inBox(box) {
  let resultado = false;

  // Buscar en que fila está el asterisco
  let fila = 0;
  for (let i = 0; i < box.length; i++) {
    if (box[i].includes("*")) {
      fila = i;
    }
  }

  // En esa fila, buscar en que columna está el asterisco
  let columnaAsterisco = box[fila].indexOf("*");

  // Sí el asterisco está en la primera o última fila, no está dentro de la caja
  if (fila === 0 || fila === box.length - 1) {
    resultado = false;
    return resultado;
  }
  
  // Buscar el primer y último # en esa fila
  let primerNumeral = box[fila].indexOf("#");
  let ultimoNumeral = box[fila].lastIndexOf("#");
  
  // Verificar si el asterisco está entre los dos #
  if (columnaAsterisco > primerNumeral && columnaAsterisco < ultimoNumeral) {
    resultado = true;
  }

  console.log(resultado);
	return resultado;
}

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#  *#",
  "#   #",
  "#####"
]) // ➞ false

inBox([
  "  *  ",
  "#####",
  "#   #",
  "#  #",
  "#   #",
  "#####"
]) // ➞ false