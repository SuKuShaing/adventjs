/*
Papá Noel 🎅 está probando un nuevo simulador de trineo dentro de un laberinto en el taller. El laberinto se representa como una matriz de caracteres.

Tu tarea es implementar una función que determine si es posible llegar a la salida (E) partiendo desde la posición inicial (S).

Reglas del laberinto:

S: Posición inicial de Santa.
E: Salida del laberinto.
.: Camino libre.
#: Pared (bloquea el paso).
Movimientos permitidos: arriba, abajo, izquierda y derecha.
Solo hay una S y una sola E.
canEscape([
    ['S', '.', '#', '.'],
    ['#', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['#', '#', '#', 'E']
])
// → true

canEscape([
    ['S', '#', '#'],
    ['.', '#', '.'],
    ['.', '#', 'E']
])
// → false

canEscape([['S', 'E']])
// → true

canEscape([
    ['S', '.', '.', '.', '.'],
    ['#', '#', '#', '#', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '#', '#', '#', '#'],
    ['.', '.', '.', '.', 'E']
])
// → true

canEscape([
    ['S', '.', '.'],
    ['.', '.', '.'],
    ['#', '#', '#'],
    ['.', '.', 'E']
])
// → false
A tener en cuenta:

No necesitas devolver el camino, solo si es posible llegar.
Santa no puede salir de los límites del laberinto.
Consejo: Este problema se puede resolver de varias formas, pero algoritmos de búsqueda como BFS (búsqueda en anchura) o DFS (búsqueda en profundidad) son ideales para este tipo de retos.
*/

/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
    const copiaMaze = [];
    maze.forEach((fila) => copiaMaze.push([...fila]));
    console.log(copiaMaze);

    const rows = maze.length;
    const cols = maze[0].length;
    let start, end;

    // 1. Find Start (S)
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (maze[r][c] === "S") {
                start = { r, c };
                console.log("📍 Inicio encontrado en:", start);
                break;
            }
        }
    }

    if (!start) return false; // Should not happen based on rules

    // 2. BFS Initialization
    const queue = [start];
    const visited = new Set();
    visited.add(`${start.r},${start.c}`);

    const directions = [
        [0, 1], // Right
        [0, -1], // Left
        [1, 0], // Down
        [-1, 0], // Up
    ];

    // 3. BFS Loop
    while (queue.length > 0) {
        const { r, c } = queue.shift();
        console.log(`👣 Visitando celda: [${r}, ${c}] ('${maze[r][c]}')`);

        copiaMaze[r][c] = "x";
        console.log(copiaMaze);

        // Check if we reached the exit
        if (maze[r][c] === "E") {
            console.log("🎉 ¡Salida encontrada!");
            return true;
        }

        // Explore neighbors
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // Check bounds
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                // Check if not a wall and not visited
                if (maze[nr][nc] !== "#" && !visited.has(`${nr},${nc}`)) {
                    visited.add(`${nr},${nc}`);
                    queue.push({ r: nr, c: nc });
                    console.log(`  -> Agregando vecino válido: [${nr}, ${nc}]`);
                }
            }
        }
    }

    // 4. If queue empty and E not found
    return false;
}

console.log(
    canEscape([
        ["S", ".", "#", "."],
        ["#", ".", "#", "."],
        [".", ".", ".", "."],
        ["#", "#", "#", "E"],
    ])
);
// → true

console.log(
    canEscape([
        ["S", "#", "#"],
        [".", "#", "."],
        [".", "#", "E"],
    ])
);
// → false

console.log(canEscape([["S", "E"]]));
// → true

console.log(
    canEscape([
        ["S", ".", ".", ".", "."],
        ["#", "#", "#", "#", "."],
        [".", ".", ".", ".", "."],
        [".", "#", "#", "#", "#"],
        [".", ".", ".", ".", "E"],
    ])
);
// → true

console.log(
    canEscape([
        ["S", ".", "."],
        [".", ".", "."],
        ["#", "#", "#"],
        [".", ".", "E"],
    ])
);
// → false
