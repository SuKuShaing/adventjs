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
export function minStepsToDeliver(map: string[][]): number {
    // 1 Encontrar las coordenadas de la Gs y de Santa (s)
    const coordenadasG: number[][] = [];
    const coordenadasSanta: number[] = [];

    for (let filas = 0; filas < map.length; filas++) {
        for (let columnas = 0; columnas < map[0].length; columnas++) {
            if (map[filas][columnas] === "G") {
                coordenadasG.push([filas, columnas]);
            } else if (map[filas][columnas] === "S") {
                coordenadasSanta.push(filas, columnas);
            }
        }
    }

    // 2 Encontrar la cantidad de 'G' totales
    const cantidadDeGs = coordenadasG.length;
    console.log(map);

    // 3 inundar el mapa hasta la primera G, guardar el número de pasos y después repetir para la siguiente G
    // for para cada G, ejecuta un while que inunde el tablero y un if que verifique sí llegó, sí llegó y es un número ok, sí llegó y es una letra, es porque no se puede llegar a él
    const copiaDelMapa: (string | number)[][] = [...map];
    let mapaPrevio = [...map].flat().join("");

    for (const coordUnaG of coordenadasG) {
        while (typeof map[coordUnaG[0]][coordUnaG[1]] !== "number") {
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
                        typeof copiaDelMapa[filas + 1]?.[columnas] ===
                            "number" ||
                        typeof copiaDelMapa[filas - 1]?.[columnas] ===
                            "number" ||
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
    }

    console.log(copiaDelMapa);
    console.log(" ");

    // 4 Extraer los valores de las Gs
    const valoresDeG = coordenadasG.map(
        (coord) => copiaDelMapa[coord[0]][coord[1]]
    );

    console.log("incluye una G:", valoresDeG.includes("G"));
    console.log(valoresDeG);

    // 5 sumar los pasos o descartar
    if (valoresDeG.includes("G")) {
        console.log(-1);
        return -1;
    } else {
        console.log(
            (valoresDeG as number[]).reduce((acc, valor) => acc + valor, 0)
        );
        return (valoresDeG as number[]).reduce((acc, valor) => acc + valor, 0);
    }

    function encontrarElMenor(...rest: (string | number)[]) {
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
