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
export function canEscape(maze: string[][]): boolean {
    // 1) Encontrar las coordenadas de la salida (E) y de Santa (S)
    const coordenadasE: number[] = [];
    const coordenadasSanta: number[] = [];

    for (let filas = 0; filas < maze.length; filas++) {
        for (let columnas = 0; columnas < maze[0].length; columnas++) {
            if (maze[filas][columnas] === "#" || maze[filas][columnas] === ".")
                continue;

            if (maze[filas][columnas] === "E") {
                coordenadasE.push(filas, columnas);
            }

            if (maze[filas][columnas] === "S") {
                coordenadasSanta.push(filas, columnas);
            }
        }
    }

    console.log(maze);

    // 2) inundar el mapa desde S hasta E, guardar el número que se encuentre cuando la inundación llegue a E
    // verificar sí el mapa cambia, sino cambia es porque no se puede llegar al destino

    const copiaDelMapa: (string | number)[][] = [];
    maze.forEach((fila) => copiaDelMapa.push([...fila]));
    let mapaPrevio = [...maze].flat().join("");

    while (typeof maze[coordenadasE[0]][coordenadasE[1]] !== "number") {
        for (let filas = 0; filas < copiaDelMapa.length; filas++) {
            for (
                let columnas = 0;
                columnas < copiaDelMapa[0].length;
                columnas++
            ) {
                if (
                    copiaDelMapa[filas][columnas] === "#" ||
                    copiaDelMapa[filas][columnas] === "S"
                ) {
                    continue;
                } else if (
                    copiaDelMapa[filas + 1]?.[columnas] === "S" ||
                    copiaDelMapa[filas - 1]?.[columnas] === "S" ||
                    copiaDelMapa[filas][columnas + 1] === "S" ||
                    copiaDelMapa[filas][columnas - 1] === "S"
                ) {
                    copiaDelMapa[filas][columnas] = 1;
                } else if (
                    typeof copiaDelMapa[filas + 1]?.[columnas] === "number" ||
                    typeof copiaDelMapa[filas - 1]?.[columnas] === "number" ||
                    typeof copiaDelMapa[filas][columnas + 1] === "number" ||
                    typeof copiaDelMapa[filas][columnas - 1] === "number"
                ) {
                    copiaDelMapa[filas][columnas] =
                        encontrarElMenor(
                            copiaDelMapa[filas + 1]?.[columnas],
                            copiaDelMapa[filas - 1]?.[columnas],
                            copiaDelMapa[filas][columnas + 1],
                            copiaDelMapa[filas][columnas - 1]
                        ) + 1;
                }
            }
        }

        if (mapaPrevio === copiaDelMapa.flat().join("")) {
            break;
        } else {
            mapaPrevio = copiaDelMapa.flat().join("");
        }
    }

    console.log("-----------copia Del Mapa-----------");
    console.log(copiaDelMapa);
    console.log("");

    // 3) Verificar sí E es un número
    if (typeof copiaDelMapa[coordenadasE[0]][coordenadasE[1]] === "number") {
        console.log(true);
        return true;
    }

    console.log(false);
    return false;

    function encontrarElMenor(...rest: (string | number)[]): number {
        const numeros: number[] = [];
        for (const item of rest) {
            if (typeof item === "number") {
                numeros.push(item);
            }
        }

        const elMenor = numeros.reduce(
            (acc, valor) => (acc < valor ? acc : valor),
            10000000
        );

        return elMenor;
    }
}

canEscape([
    ["S", ".", "#", "."],
    ["#", ".", "#", "."],
    [".", ".", ".", "."],
    ["#", "#", "#", "E"],
]);
// → true

canEscape([
    ["S", "#", "#"],
    [".", "#", "."],
    [".", "#", "E"],
]);
// → false

canEscape([["S", "E"]]);
// → true

canEscape([
    ["S", ".", ".", ".", "."],
    ["#", "#", "#", "#", "."],
    [".", ".", ".", ".", "."],
    [".", "#", "#", "#", "#"],
    [".", ".", ".", ".", "E"],
]);
// → true

canEscape([
    ["S", ".", "."],
    [".", ".", "."],
    ["#", "#", "#"],
    [".", ".", "E"],
]);
// → false
