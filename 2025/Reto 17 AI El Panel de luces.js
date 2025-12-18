/*
En el Polo Norte han montado un panel de luces navideñas 🎄✨ para decorar el taller. Cada luz puede estar encendida con un color o apagada.

El panel se representa como una matriz donde cada celda puede ser:

'.' → luz apagada
'R' → luz roja
'G' → luz verde
Los elfos quieren saber si en el panel existe una línea de 4 luces del mismo color encendidas y alineadas (solo horizontal ↔ o vertical ↕). Las luces apagadas ('.') no cuentan.

hasFourLights([
    ['.', '.', '.', '.', '.'],
    ['R', 'R', 'R', 'R', '.'],
    ['G', 'G', '.', '.', '.']
])
// true → hay 4 luces rojas en horizontal

hasFourLights([
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.']
])
// true → hay 4 luces verdes en vertical

hasFourLights([
    ['R', 'G', 'R'],
    ['G', 'R', 'G'],
    ['G', 'R', 'G']
])
// false → no hay 4 luces del mismo color seguidas
Nota: El tablero puede ser de cualquier tamaño. No hay diagonales.
*/

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
    const rows = board.length;
    const cols = board[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const color = board[r][c];

            // Si está apagada, ignoramos
            if (color === ".") continue;

            // Verificar Horizontal (si hay espacio a la derecha)
            if (c + 3 < cols) {
                if (
                    color === board[r][c + 1] &&
                    color === board[r][c + 2] &&
                    color === board[r][c + 3]
                )
                    return true;
            }

            // Verificar Vertical (si hay espacio abajo)
            if (r + 3 < rows) {
                if (
                    color === board[r + 1][c] &&
                    color === board[r + 2][c] &&
                    color === board[r + 3][c]
                )
                    return true;
            }
        }
    }

    return false;
}

console.log(
    hasFourLights([
        [".", ".", ".", ".", "."],
        ["R", "R", "R", "R", "."],
        ["G", "G", ".", ".", "."],
    ])
);
// true → hay 4 luces rojas en horizontal

console.log(
    hasFourLights([
        [".", "G", ".", "."],
        [".", "G", ".", "."],
        [".", "G", ".", "."],
        [".", "G", ".", "."],
    ])
);
// true → hay 4 luces verdes en vertical

console.log(
    hasFourLights([
        ["R", "G", "R"],
        ["G", "R", "G"],
        ["G", "R", "G"],
    ])
);
// false → no hay 4 luces del mismo color seguidas
