/*
En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

Le pasan dos parámetros:

size: el tamaño del regalo cuadrado
symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
El regalo debe cumplir:

Debe ser un cuadrado de size x size.
El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
El resultado final debe ser un string con saltos de línea \n.
Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?

🧩 Ejemplos

const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 * /

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
* /

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
* /

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…
*/

/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
    // ofrece 3 manetas, la primera es similar a la mía 1313
}

function drawGift2(size, symbol) {
    if (size < 2) return "";

    const fullLine = symbol.repeat(size);
    const hollowLine = symbol + " ".repeat(size - 2) + symbol;

    // Si el tamaño es 2, no hay parte "hueca" en medio
    if (size === 2) return fullLine + "\n" + fullLine;

    // Creamos el cuerpo repitiendo la línea hueca (size - 2) veces
    const body = Array(size - 2)
        .fill(hollowLine)
        .join("\n");

    // Unimos: Techo + Cuerpo + Suelo
    return fullLine + "\n" + body + "\n" + fullLine;
}

function drawGift3(size, symbol) {
    if (size < 2) return "";

    const fullLine = symbol.repeat(size);
    const hollowLine = symbol + " ".repeat(size - 2) + symbol;

    return Array.from({ length: size }, (_, i) => {
        // Si es el índice 0 o el último, devuelve fullLine, si no hollowLine
        return i === 0 || i === size - 1 ? fullLine : hollowLine;
    }).join("\n");
}
