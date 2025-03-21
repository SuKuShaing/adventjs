/*
Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.


Ejemplo de entrada
generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]


Nota: En el array de entrada siempre habrá al menos un juguete y nunca habrá juguetes duplicados.

Consejo: Hay muchas formas de solucionar este problema, pero el backtracking puede ser una buena opción. 😉





 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */


function generateGiftSets(gifts) {
	// Acumulador de combinaciones
    const combinaciones = [];

    // Función recursiva para generar las combinaciones
    function generarCombinaciones(partoEn, combinacion) {
        // Agregar la combinación actual al acumulador
        if (partoEn !== 0) combinaciones.push(combinacion);

        // Recorrer los elementos restantes
        for (let j = partoEn; j < gifts.length; j++) {
            // Llamada recursiva con el siguiente elemento
            generarCombinaciones(j + 1, combinacion.concat(gifts[j]));
        }
    }

    // Iniciar la generación de combinaciones
    generarCombinaciones(0, []);

    // Ordenar las combinaciones por su longitud (de menor a mayor)
    // combinaciones.sort((a, b) => a.length - b.length);

    // Retornar las combinaciones generadas
    console.log(combinaciones);
    return combinaciones;
}


generateGiftSets(['car', 'doll', 'puzzle',])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]