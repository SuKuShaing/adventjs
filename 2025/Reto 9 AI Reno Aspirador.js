/*
Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.

El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

Recibirás dos parámetros:

board: un string que representa el tablero.
moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
Reglas del movimiento:

Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
Si el reno no recoge nada ni se estrella → devuelve 'fail'.
Ten en cuenta que si el reno recoge algo del suelo, ya es 'success', indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.

Ejemplo:

const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// ➞ 'fail' -> se mueve pero no recoge nada

moveReno(board, 'U')
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, 'RU')
// ➞ 'crash' -> choca contra un obstáculo (#)

moveReno(board, 'RRRUU')
// ➞ 'success' -> recoge algo (*)

moveReno(board, 'DD')
// ➞ 'crash' -> se choca con la parte de abajo del tablero

moveReno(board, 'UUU')
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

moveReno(board, 'RR')
// ➞ 'fail' -> se mueve pero no recoge nada
*/

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
    const rows = board.trim().split("\n");
    let currentRow = 0;
    let currentCol = 0;

    // Find initial position
    for (let r = 0; r < rows.length; r++) {
        const c = rows[r].indexOf("@");
        if (c !== -1) {
            currentRow = r;
            currentCol = c;
            break;
        }
    }

    const directions = {
        U: [-1, 0],
        D: [1, 0],
        L: [0, -1],
        R: [0, 1],
    };

    for (const move of moves) {
        const [dr, dc] = directions[move];
        currentRow += dr;
        currentCol += dc;

        // Check bounds
        if (
            currentRow < 0 ||
            currentRow >= rows.length ||
            currentCol < 0 ||
            currentCol >= rows[0].length
        ) {
            return "crash";
        }

        const cell = rows[currentRow][currentCol];

        if (cell === "*") {
            return "success";
        }

        if (cell === "#") {
            return "crash";
        }
    }

    return "fail";
}

const board = `
.....
.*#.*
.@...
.....
`;

console.log(moveReno(board, "D"));
// ➞ 'fail' -> se mueve pero no recoge nada

console.log(moveReno(board, "U"));
// ➞ 'success' -> recoge algo (*) justo encima

console.log(moveReno(board, "RU"));
// ➞ 'crash' -> choca contra un obstáculo (#)

console.log(moveReno(board, "RRRUU"));
// ➞ 'success' -> recoge algo (*)

console.log(moveReno(board, "DD"));
// ➞ 'crash' -> se choca con la parte de abajo del tablero

console.log(moveReno(board, "UUU"));
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

console.log(moveReno(board, "RR"));
// ➞ 'fail' -> se mueve pero no recoge nada
