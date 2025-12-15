/*
¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

height → la altura del árbol (número de filas).
ornament → el carácter del adorno (por ejemplo, "o" o "@").
frequency → cada cuántas posiciones de asterisco aparece el adorno.
El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.

El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

El árbol debe estar centrado y tener un tronco # de una línea al final. Cuidado con los espacios en blanco, nunca hay al final de cada línea.

🧩 Ejemplos

drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #
*/

/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
    let arbol = "";
    const anchoMax = height * 2 - 1;
    let conteoFrecuencia = 0;

    for (let i = 0; i < height; i++) {
        let caracteres = "";
        const espacio = " ".repeat(height - i - 1);

        // caracteres += "*".repeat((i + 1) * 2 - 1);
        for (let j = 0; j < (i + 1) * 2 - 1; j++) {
            conteoFrecuencia++;
            if (conteoFrecuencia % frequency == 0) {
                caracteres += ornament;
            } else {
                caracteres += "*";
            }
        }

        arbol += espacio + caracteres + "\n";
    }

    arbol += " ".repeat(height - 1) + "#";

    console.log(arbol);
    return arbol;
}

drawTree(5, "o", 2);
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, "@", 3);
//   *
//  *@*
// *@**@
//   #

drawTree(4, "+", 1);
//    +
//   +++
//  +++++
// +++++++
//    #
