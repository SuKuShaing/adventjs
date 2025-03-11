/*
El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

Ejemplos:

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]


Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉



* @param {boolean[][]} grid
* @returns {number[][]}
*/
function detectBombs(grid) {
	// copiar el tamaño de la matriz pero vacía
	let gridConNumeros = Array.from({ length: grid.length }, () =>
		Array(grid[0].length).fill(0)
	);

    // recorrer la matriz
    let bombas = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // evalúa el valor de la celda de arriba
            if (i > 0 && grid[i - 1][j]) bombas++;
            // evalúa el valor de la celda de abajo
            if (i < grid.length - 1 && grid[i + 1][j]) bombas++;
            // evalúa el valor de la celda de la izquierda
            if (j > 0 && grid[i][j - 1]) bombas++;
            // evalúa el valor de la celda de la derecha
            if (j < grid[0].length - 1  && grid[i][j + 1]) bombas++;
            // evalúa el valor de la celda de la esquina superior izquierda
            if (i > 0 && j > 0 && grid[i - 1][j - 1]) bombas++;
            // evalúa el valor de la celda de la esquina superior derecha
            if (i > 0 && j < grid[0].length - 1 && grid[i - 1][j + 1]) bombas++;
            // evalúa el valor de la celda de la esquina inferior izquierda
            if (i < grid.length - 1 && j > 0 && grid[i + 1][j - 1]) bombas++;
            // evalúa el valor de la celda de la esquina inferior derecha
            if (i < grid.length - 1 && j < grid[0].length - 1 && grid[i + 1][j + 1]) bombas++;

            // asigna el valor de bombas a la celda correspondiente
            gridConNumeros[i][j] = bombas;

            // reinicia el contador de bombas
            bombas = 0;
        };
    };

    console.log(gridConNumeros);
    return gridConNumeros;
}

detectBombs([
	[true, false, false],
	[false, true, false],
	[false, false, false],
]);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
	[true, false],
	[false, false],
]);
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
	[true, true],
	[false, false],
	[true, true],
]);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
