/*
¡El almacén vertical de Santa se ha modernizado! Ahora, además de apilar los regalos, hay un robot 🤖 en el almacen que recoje los regalos si hay una fila completa.

El almacén es una matriz con # regalos y . espacios vacíos. Debes crear una función clearGifts que reciba el estado del almacén y un array con las columnas donde se dejan caer los regalos.

Reglas de la caída:

El regalo cae por la columna indicada desde arriba.
Se coloca en la celda vacía (.) más baja de esa columna.
Si la columna está llena, el regalo se ignora.
Regla del robot de limpieza:

Si al colocar un regalo, una fila se completa totalmente con regalos (#), esa fila desaparece.
Todas las filas que estaban por encima de la fila eliminada bajan una posición.
Al eliminarse una fila, aparece una nueva fila vacía (.) en la parte superior para mantener el tamaño del almacén.
clearGifts(
[
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
],
[1]
)
/*
1. El regalo cae en la columna 1
2. La fila 2 se convierte en [# # #].
3. La fila 2 está completa, el robot la limpia.
6. Se añade una nueva fila vacía en la posición 0.

Resultado:
[
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
]


clearGifts(
[
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
],
[0, 1, 2]
)


1. El regalo cae en la columna 0
2. El regalo cae en la columna 1
3. La fila 2 se convierte en [# # #]
4. La fila 2 está completa, el robot la limpia

Por ahora queda así:
[
    ['.', '.', '.']
    ['#', '.', '#'],
    ['#', '.', '#'],
]

5. El regalo cae en la columna 2

Resultado:
[
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
]
*/

/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
    // Crear una copia profunda para evitar mutar el almacén original
    const newWarehouse = warehouse.map((row) => [...row]);
    const rows = newWarehouse.length;
    const cols = newWarehouse[0].length;

    for (const dropCol of drops) {
        // Buscar la posición más baja disponible en la columna
        let targetRow = -1;
        for (let r = rows - 1; r >= 0; r--) {
            if (newWarehouse[r][dropCol] === ".") {
                targetRow = r;
                break;
            }
        }

        // Si la columna está llena, ignorar este regalo
        if (targetRow === -1) continue;

        // Colocar el regalo
        newWarehouse[targetRow][dropCol] = "#";

        // Comprobar si la fila está llena y necesita ser limpiada
        // Según las reglas: "Si al colocar un regalo, una fila se completa totalmente con regalos (#), esa fila desaparece."
        const isRowFull = newWarehouse[targetRow].every((cell) => cell === "#");

        if (isRowFull) {
            // Eliminar la fila
            newWarehouse.splice(targetRow, 1);
            // Añadir una nueva fila vacía en la parte superior
            newWarehouse.unshift(new Array(cols).fill("."));
        }
    }

    return newWarehouse;
}

clearGifts(
    [
        [".", ".", "."],
        [".", ".", "."],
        ["#", ".", "#"],
    ],
    [1]
);
/*
1. El regalo cae en la columna 1
2. La fila 2 se convierte en [# # #].
3. La fila 2 está completa, el robot la limpia.
6. Se añade una nueva fila vacía en la posición 0.

Resultado:
[
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
]
*/

console.log("-".repeat(30));

clearGifts(
    [
        [".", ".", "#"],
        ["#", ".", "#"],
        ["#", ".", "#"],
    ],
    [0, 1, 2]
);

/*
1. El regalo cae en la columna 0
2. El regalo cae en la columna 1
3. La fila 2 se convierte en [# # #]
4. La fila 2 está completa, el robot la limpia

Por ahora queda así:
[
    ['.', '.', '.']
    ['#', '.', '#'],
    ['#', '.', '#'],
]

5. El regalo cae en la columna 2

Resultado:
[
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
]
*/
