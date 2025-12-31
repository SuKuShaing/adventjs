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
export function clearGifts(warehouse: string[][], drops: number[]): string[][] {
    // Copiar el almacén
    const copiaWharehouse: string[][] = [];
    warehouse.forEach((fila) => copiaWharehouse.push([...fila]));

    // iterar según la cantidad de drops
    for (const regalo of drops) {
        // Simular la caída
        for (let i = 0; i < copiaWharehouse.length; i++) {
            // Todo esto es parte del console.table
            const MostrarCopiaWharehouse: string[][] = [];
            copiaWharehouse.forEach((fila) =>
                MostrarCopiaWharehouse.push([...fila])
            );
            MostrarCopiaWharehouse[i][
                regalo
            ] = `[${MostrarCopiaWharehouse[i][regalo]}]`;
            console.log(`Mirando el: ${i}, ${regalo}`);
            console.table(MostrarCopiaWharehouse);

            if (
                copiaWharehouse[i + 1]?.[regalo] &&
                copiaWharehouse[i + 1][regalo] === "."
            ) {
                // evalúa sí existe y sí está libre
                continue;
            }

            if (copiaWharehouse[i][regalo] === "#") break;

            // dejar regalo aquí
            copiaWharehouse[i][regalo] = "#";
        }

        console.log(`Se entrega:`);
        console.table(copiaWharehouse);

        // sí está lleno al menos una fila, sí es así, eliminar la fila

        const aEliminar: number[] = [];

        for (const [index, fila] of copiaWharehouse.entries()) {
            // verificamos que solo continúen los que su primer valor es #, sí no saltamos a la siguiente fila
            if (fila[0] !== "#") {
                continue;
            }

            const sonTodosGato = fila.every((val) => val === fila[0]); // ya sabemos que fila[0] es #, comparamos contra ese el valor

            if (sonTodosGato) {
                aEliminar.push(index);
            }
        }

        const anchoDelAlmacen = copiaWharehouse[0].length; // guardo al ancho, puesto que si se eliminan todas las filas, no podrá calcular el ancho al momento de añadir filas nuevas

        if (aEliminar.length > 0) {
            for (let i = aEliminar.length - 1; i >= 0; i--) {
                copiaWharehouse.splice(aEliminar[i], 1);
            }
        }

        // mover todas las filas hacia abajo y crear la nueva primera fila
        if (aEliminar.length > 0) {
            for (let i = 0; i < aEliminar.length; i++) {
                copiaWharehouse.unshift(Array(anchoDelAlmacen).fill("."));
            }
        }

        console.log(`En caso de haber eliminado algo queda así:`);
        console.table(copiaWharehouse);
    }
    // iterar

    return copiaWharehouse;
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
