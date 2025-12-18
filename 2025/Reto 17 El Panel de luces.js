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
    // Revisar las filas sí hay seguidas
    const filas = revisarFilas(board);
    if (filas) return true;

    // transponemos
    const boardTranspuesto = board[0].map((_, col) =>
        board.map((fila) => fila[col])
    );
    console.log(boardTranspuesto);

    // Revisar las Columnas sí hay seguidas
    const columnas = revisarFilas(boardTranspuesto);
    if (columnas) return true;

    return false;

    function revisarFilas(matriz) {
        for (const fila of matriz) {
            const row = fila.join("");
            console.log("🚀 ~ hasFourLights ~ row:", row);

            if (row.includes("GGGG") || row.includes("RRRR")) {
                console.log(true);
                return true;
            }
        }
        return false;
    }
}

hasFourLights([
    [".", ".", ".", ".", "."],
    ["R", "R", "R", "R", "."],
    ["G", "G", ".", ".", "."],
]);
// true → hay 4 luces rojas en horizontal

hasFourLights([
    [".", "G", ".", "."],
    [".", "G", ".", "."],
    [".", "G", ".", "."],
    [".", "G", ".", "."],
]);
// true → hay 4 luces verdes en vertical

hasFourLights([
    ["R", "G", "R"],
    ["G", "R", "G"],
    ["G", "R", "G"],
]);
// false → no hay 4 luces del mismo color seguidas
