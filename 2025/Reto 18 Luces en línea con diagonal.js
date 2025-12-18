/*
El panel de luces navideñas 🎄✨ del taller ha sido un éxito total. Pero los elfos quieren ir un paso más allá: ahora quieren detectar si hay una línea de 4 luces del mismo color también en diagonal.

El panel sigue siendo una matriz donde cada celda puede ser:

'.' → luz apagada
'R' → luz roja
'G' → luz verde
Ahora tu función debe devolver true si existe una línea de 4 luces del mismo color encendidas y alineadas, ya sea horizontal ↔, vertical ↕ o diagonal ↘↙.

hasFourInARow([
    ['R', '.', '.', '.'],
    ['.', 'R', '.', '.'],
    ['.', '.', 'R', '.'],
    ['.', '.', '.', 'R']
])
// true → hay 4 luces rojas en diagonal ↘

hasFourInARow([
    ['.', '.', '.', 'G'],
    ['.', '.', 'G', '.'],
    ['.', 'G', '.', '.'],
    ['G', '.', '.', '.']
])
// true → hay 4 luces verdes en diagonal ↙

hasFourInARow([
    ['R', 'R', 'R', 'R'],
    ['G', 'G', '.', '.'],
    ['.', '.', '.', '.'],
    ['.', '.', '.', '.']
])
// true → hay 4 luces rojas en horizontal

hasFourInARow([
    ['R', 'G', 'R'],
    ['G', 'R', 'G'],
    ['G', 'R', 'G']
])
// false → no hay 4 luces del mismo color seguidas

Nota: El tablero puede ser de cualquier tamaño.
*/

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
    for (let fila = 0; fila < board.length; fila++) {
        for (let columna = 0; columna < board[0].length; columna++) {
            // sí es un punto, continua con el siguiente
            if (board[fila][columna] === ".") continue;

            // verificar en horizontal
            if (columna + 3 < board[0].length) {
                if (
                    board[fila][columna] === board[fila][columna + 1] &&
                    board[fila][columna] === board[fila][columna + 2] &&
                    board[fila][columna] === board[fila][columna + 3]
                ) {
                    console.log(true);
                    return true;
                }
            }

            // verificar en vertical
            if (fila + 3 < board.length) {
                if (
                    board[fila][columna] === board[fila + 1][columna] &&
                    board[fila][columna] === board[fila + 2][columna] &&
                    board[fila][columna] === board[fila + 3][columna]
                ) {
                    console.log(true);
                    return true;
                }
            }

            // verificar en diagonal hacia abajo
            if (columna + 3 < board[0].length && fila + 3 < board.length) {
                if (
                    board[fila][columna] === board[fila + 1][columna + 1] &&
                    board[fila][columna] === board[fila + 2][columna + 2] &&
                    board[fila][columna] === board[fila + 3][columna + 3]
                ) {
                    console.log(true);
                    return true;
                }
            }

            // verificar en diagonal hacia arriba
            if (columna + 3 < board[0].length && fila - 3 < board.length) {
                if (
                    board[fila][columna] === board[fila - 1][columna + 1] &&
                    board[fila][columna] === board[fila - 2][columna + 2] &&
                    board[fila][columna] === board[fila - 3][columna + 3]
                ) {
                    console.log(true);
                    return true;
                }
            }
        }
    }
    console.log(false);
    return false;
}

hasFourInARow([
    ["R", ".", ".", "."],
    [".", "R", ".", "."],
    [".", ".", "R", "."],
    [".", ".", ".", "R"],
]);
// true → hay 4 luces rojas en diagonal ↘

hasFourInARow([
    [".", ".", ".", "G"],
    [".", ".", "G", "."],
    [".", "G", ".", "."],
    ["G", ".", ".", "."],
]);
// true → hay 4 luces verdes en diagonal ↙

hasFourInARow([
    ["R", "R", "R", "R"],
    ["G", "G", ".", "."],
    [".", ".", ".", "."],
    [".", ".", ".", "."],
]);
// true → hay 4 luces rojas en horizontal

hasFourInARow([
    ["R", "G", "R"],
    ["G", "R", "G"],
    ["G", "R", "G"],
]);
// false → no hay 4 luces del mismo color seguidas
