/*
Papá Noel 🎅 tiene que repartir regalos en un pueblo representado como un mapa en cuadrícula.

Cada celda del mapa puede ser:

'S' → Punto de partida de Papá Noel
'G' → Casa que debe recibir un regalo
'.' → Camino libre
'#' → Obstáculo (no se puede pasar)
Papá Noel realiza entregas independientes para cada regalo. Sale de 'S', entrega el regalo en una casa 'G' y vuelve inmediatamente a 'S' para recoger el siguiente. Sin embargo, para este reto, solo queremos calcular la suma de las distancias mínimas de ida desde 'S' hasta cada casa 'G'.

Tu tarea

Escribe la función minStepsToDeliver(map) que devuelva el número total de pasos necesarios para llegar a todas las casas con regalos desde la posición inicial.

Ten en cuenta:

Siempre se parte de la posición inicial 'S'.
Para cada regalo, calcula la distancia mínima desde 'S' hasta esa casa 'G'.
No puedes atravesar obstáculos ('#').
Si alguna casa con regalo es inalcanzable, la función debe devolver -1.
minStepsToDeliver([
    ['S', '.', 'G'],
    ['.', '#', '.'],
    ['G', '.', '.']
])
// Resultado: 4

/* 
Explicación:
- Distancia mínima de S (0,0) a G (0,2): 2 pasos
- Distancia mínima de S (0,0) a G (2,0): 2 pasos
- Total: 2 + 2 = 4


minStepsToDeliver([
    ['S', '#', 'G'],
    ['#', '#', '.'],
    ['G', '.', '.']
])
// Resultado: -1
// (La casa en (0,2) es inalcanzable por los obstáculos)

minStepsToDeliver([['S', 'G']])
// Resultado: 1
Reglas

El mapa siempre contiene exactamente una 'S'.
Puede haber 0 o más casas con regalos ('G').
No importa el orden de las entregas, ya que cada una se mide de forma independiente desde 'S'.
Debes devolver la suma de las distancias mínimas de ida.
Pista

Calcula la distancia más corta desde 'S' hasta cada 'G' (puedes usar un algoritmo de búsqueda en anchura o BFS).
Si algún regalo no tiene camino posible, el resultado total es -1.
*/

/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
    const rows = map.length;
    const cols = map[0].length;
    let startRow, startCol;
    const gifts = [];

    // Encuentra la posición de Santa 'S' y los regalos 'G'
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (map[r][c] === "S") {
                startRow = r;
                startCol = c;
            } else if (map[r][c] === "G") {
                gifts.push({ r, c });
            }
        }
    }

    if (!gifts.length) return 0;

    // BFS para encontrar la distancia mínima desde 'S' a todas las celdas alcanzables
    const distances = Array.from({ length: rows }, () => Array(cols).fill(-1));
    const queue = [[startRow, startCol]];
    distances[startRow][startCol] = 0;

    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    while (queue.length > 0) {
        const [r, c] = queue.shift();
        const currentDist = distances[r][c];

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // Verificar límites, obstáculos y si ya fue visitado
            if (
                nr >= 0 &&
                nr < rows &&
                nc >= 0 &&
                nc < cols &&
                map[nr][nc] !== "#" &&
                distances[nr][nc] === -1
            ) {
                distances[nr][nc] = currentDist + 1;
                queue.push([nr, nc]);
            }
        }
    }

    // Sumar las distancias a todos los regalos
    let totalSteps = 0;
    for (const { r, c } of gifts) {
        const d = distances[r][c];
        if (d === -1) return -1; // Si algún regalo es inalcanzable
        totalSteps += d;
    }

    return totalSteps;
}

minStepsToDeliver([
    ["S", ".", "G"],
    [".", "#", "."],
    ["G", ".", "."],
]);
// Resultado: 4

/* 
Explicación:
- Distancia mínima de S (0,0) a G (0,2): 2 pasos
- Distancia mínima de S (0,0) a G (2,0): 2 pasos
- Total: 2 + 2 = 4
*/

minStepsToDeliver([
    ["S", "#", "G"],
    ["#", "#", "."],
    ["G", ".", "."],
]);
// Resultado: -1
// (La casa en (0,2) es inalcanzable por los obstáculos)

minStepsToDeliver([["S", "G"]]);
// Resultado: 1

minStepsToDeliver([
    ["S", ".", ".", "G"],
    [".", "#", ".", "."],
    ["G", ".", "#", "."],
    [".", ".", ".", "G"],
]);
// Resultado: 11

minStepsToDeliver([
    ["S", ".", ".", ".", "G"],
    [".", "#", "#", "#", "."],
    ["G", "#", "G", "#", "."],
    [".", "#", ".", "#", "."],
    [".", "#", ".", "", "."],
]);
// Resultado: 18

minStepsToDeliver([
    ["G", ".", ".", ".", "G"],
    [".", "#", "#", "#", "."],
    ["G", "#", "S", "#", "."],
    [".", "#", ".", "#", "."],
    [".", "#", ".", "", "."],
]);
// Resultado: 18

minStepsToDeliver([
    ["G", ".", ".", ".", "G"],
    [".", ".", ".", ".", "."],
    ["G", ".", "S", ".", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", "", "."],
]);
// Resultado: 18

minStepsToDeliver([
    [".", ".", ".", ".", "."],
    [".", "G", ".", ".", "."],
    [".", ".", "S", ".", "."],
    [".", ".", "G", ".", "."],
    [".", ".", ".", "", "."],
]);
// Resultado: 18
