/*
🎄 Profundidad de Magia Navideña
En el Polo Norte, Santa Claus está revisando las cartas mágicas 📩✨ que recibe de los niños de todo el mundo. Estas cartas usan un antiguo lenguaje navideño en el que los corchetes [ y ] representan la intensidad del deseo.

Cuanto más profunda sea la anidación de los corchetes, más fuerte es el deseo. Tu misión es averiguar la máxima profundidad en la que se anidan los [].

Pero ¡cuidado! Algunas cartas pueden estar mal escritas. Si los corchetes no están correctamente balanceados (si se cierra antes de abrir, sobran cierres o faltan cierres), la carta es inválida y debes devolver -1.

maxDepth('[]') // -> 1
maxDepth('[[]]') // -> 2
maxDepth('[][]') // -> 1
maxDepth('[[][]]') // -> 2
maxDepth('[[[]]]') // -> 3
maxDepth('[][[]][]') // -> 2    

maxDepth('][') // -> -1 (cierra antes de abrir)
maxDepth('[[[') // -> -1 (faltan cierres)
maxDepth('[]]]') // -> -1 (sobran cierres)
maxDepth('[][][') // -> -1 (queda uno sin cerrar)
*/

/**
 * Veo dos soluciones una por un mapaCorchetes y partir el string, revisar sí el inicio y el final son compatibles, es decir y probando de pares desde fuera hacia adentro, ahora ¿cómo vemos la profundidad, vemos cuantos [[[ corchetes que abren hay juntos y listo, aunque... puede haber [[][[]]], mmm... aquí diría 2 cuando debe ser tres
 *
 * la otra opción es con números, que uno de abertura fuera un 1 y uno de cierre -1, entonces para ver sí es correcto, siempre debe dar -1,
 * e ir sumando y el número más alto alcanzado es el grado de profundidad, [[][[]]] aquí sí da 3 el más profundo
 *
 * veo otra por regex pero no sé regex, y lo tendría que hacer la IA (el regex)
 */

// const mapaCorchetes = {
//     "[": "]",
//     "]": "[",
// };
// console.log(mapaCorchetes["["]);
// sí es totalmente posible

/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
export function maxDepth(s: string): number {
    if (s[0] === "]" || s.length % 2 != 0) return -1;

    const mapaCorchetes = {
        "[": 1,
        "]": -1,
    };

    const arrayDeNumeros = s
        .split("")
        .map(
            (corchete) => mapaCorchetes[corchete as keyof typeof mapaCorchetes],
        );

    let profundidad = 0;
    let resultado = 0;

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        resultado += arrayDeNumeros[i];

        if (resultado > profundidad) {
            profundidad = resultado;
        }
    }

    if (resultado != 0) return -1;

    return profundidad;
}

console.log(maxDepth("[]")); // -> 1
console.log(maxDepth("[[]]")); // -> 2
console.log(maxDepth("[][]")); // -> 1
console.log(maxDepth("[[][]]")); // -> 2
console.log(maxDepth("[[[]]]")); // -> 3
console.log(maxDepth("[][[]][]")); // -> 2

console.log(maxDepth("][")); // -> -1 (cierra antes de abrir)
console.log(maxDepth("[[[")); // -> -1 (faltan cierres)
console.log(maxDepth("[]]]")); // -> -1 (sobran cierres)
console.log(maxDepth("[][][")); // -> -1 (queda uno sin cerrar)
