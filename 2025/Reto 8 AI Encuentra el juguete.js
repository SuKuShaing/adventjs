/*
Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.

Escribe una función que reciba un string y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

Si no hay ninguna, devuelve una cadena vacía ("").

Ejemplos:

findUniqueToy('Gift') // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

findUniqueToy('sS') // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

findUniqueToy('reindeeR') // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
findUniqueToy('AaBbCc') // ''
findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaAaAF') // 'F'
findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'

*/

/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
    // Usamos un Map para almacenar la frecuencia y la letra original
    // Map conserva el orden de inserción, lo cual es clave par este problema
    const charMap = new Map();

    for (const char of toy) {
        // Convertimos a minúsculas para la clave del mapa (insensible a mayúsculas)
        const lowerChar = char.toLowerCase();

        if (charMap.has(lowerChar)) {
            // Si ya existe, incrementamos su contador
            const data = charMap.get(lowerChar);
            data.count++;
        } else {
            // Si es la primera vez, guardamos contador 1 y la letra original
            charMap.set(lowerChar, { count: 1, original: char });
        }
    }

    // Iteramos el mapa en orden de inserción
    for (const [key, value] of charMap) {
        // La primera letra que tenga contador 1 es la que buscamos
        if (value.count === 1) {
            return value.original;
        }
    }

    // Si no se encuentra ninguna letra única, devolvemos una cadena vacía
    return "";
}

console.log(findUniqueToy("Gift")); // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

console.log(findUniqueToy("sS")); // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

console.log(findUniqueToy("reindeeR")); // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
console.log(findUniqueToy("AaBbCc")); // ''
console.log(findUniqueToy("abcDEF")); // 'a'
console.log(findUniqueToy("aAaAaAF")); // 'F'
console.log(findUniqueToy("sTreSS")); // 'T'
console.log(findUniqueToy("z")); // 'z'
