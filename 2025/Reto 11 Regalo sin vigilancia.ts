/*
El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber qué regalos no tienen vigilancia.

El almacén se representa como un array de strings (string[]), donde cada regalo (*) está protegido si su posición está junto a una cámara (#). Cada espacio vacío se representa con un punto (.).

Tu tarea es contar cuántos regalos están sin vigilancia, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

Ten en cuenta: solo se considera como "adyacente" las 4 direcciones cardinales, no en diagonal.

Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.

findUnsafeGifts([
    '.*.',
    '*#*',
    '.*.'
]) // ➞ 0

// Todos los regalos están junto a una cámara

findUnsafeGifts([
    '...',
    '.*.',
    '...'
]) // ➞ 1

// Este regalo no tiene cámaras alrededor

findUnsafeGifts([
    '*.*',
    '...',
    '*#*'
]) // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

findUnsafeGifts([
    '.....',
    '.*.*.',
    '..#..',
    '.*.*.',
    '.....'
]) // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara
*/

/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
export function findUnsafeGifts(warehouse: string[]): number {
    // Mapa a array de array
    const arrayMapa = warehouse.map((texto) => texto.split(""));
    console.log("🚀 ~ findUnsafeGifts ~ arrayMapa:", arrayMapa);

    // Encontrar los regalos *
    const listaRegalos: number[][] = [];
    let conVigilancia = 0;

    for (let filas = 0; filas < arrayMapa.length; filas++) {
        for (let columna = 0; columna < arrayMapa[0].length; columna++) {
            if (arrayMapa[filas][columna] === "*") {
                listaRegalos.push([filas, columna]);

                // Revisar sí los regalos tienen un cámara
                if (
                    arrayMapa[filas - 1]?.[columna] === "#" ||
                    arrayMapa[filas + 1]?.[columna] === "#" ||
                    arrayMapa[filas][columna - 1] === "#" ||
                    arrayMapa[filas][columna + 1] === "#"
                ) {
                    conVigilancia++;
                }
            }
        }
    }
    console.log("🚀 ~ findUnsafeGifts ~ listaRegalos:", listaRegalos);

    console.log(
        `listaRegalos.length (${listaRegalos.length}) - conVigilancia(${conVigilancia}) = ${listaRegalos.length - conVigilancia}`,
    );
    return listaRegalos.length - conVigilancia;
}

findUnsafeGifts([".*.", "*#*", ".*."]); // ➞ 0

// Todos los regalos están junto a una cámara

findUnsafeGifts(["...", ".*.", "..."]); // ➞ 1

// Este regalo no tiene cámaras alrededor

findUnsafeGifts(["*.*", "...", "*#*"]); // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

findUnsafeGifts([".....", ".*.*.", "..#..", ".*.*.", "....."]); // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara
