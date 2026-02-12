/*
Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.

El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

Recibirás dos parámetros:

board: un string que representa el tablero.
moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
Reglas del movimiento:

Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
Si el reno no recoge nada ni se estrella → devuelve 'fail'.
Ten en cuenta que si el reno recoge algo del suelo, ya es 'success', indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.

Ejemplo:

const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// ➞ 'fail' -> se mueve pero no recoge nada

moveReno(board, 'U')
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, 'RU')
// ➞ 'crash' -> choca contra un obstáculo (#)

moveReno(board, 'RRRUU')
// ➞ 'success' -> recoge algo (*)

moveReno(board, 'DD')
// ➞ 'crash' -> se choca con la parte de abajo del tablero

moveReno(board, 'UUU')
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

moveReno(board, 'RR')
// ➞ 'fail' -> se mueve pero no recoge nada
*/

type Board = string;
type Moves = string;
type Result = "fail" | "crash" | "success";

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */

export function moveReno(board: Board, moves: Moves): Result {
    //////////////////////////////////////////
    // convertir el board de string a array //
    //////////////////////////////////////////

    const arrayBoard = board
        .trim()
        .split("\n")
        .map((texto) => [...texto]);
    // trim() para sacar los espacios de inicio y fin
    // split("\n") para cortar el texto en ese caracter y colocar en arrays
    // map((texto) => [...texto]) para pasar cada línea a un array por caracter
    console.log(arrayBoard);

    ///////////////////////////
    // Encontrar el reno (@) //
    ///////////////////////////

    const ptoPartidaReno: number[] = [];

    busqueda: for (let fila = 0; fila < arrayBoard.length; fila++) {
        for (let columna = 0; columna < arrayBoard[0].length; columna++) {
            if (arrayBoard[fila][columna] === "@") {
                ptoPartidaReno.push(fila, columna);
                break busqueda;
            }
        }
    }

    // búsqueda es una etiqueta (label) es el nombre que le damos al bucle exterior y con el break busqueda, detenemos los dos bucles a la vez, en vez de solo el interno

    console.log({ ptoPartidaReno });

    ////////////////////////////
    // ejecutar un movimiento //
    ////////////////////////////
    // evaluar que pasó y ejecutar el siguiente movimiento

    const arrayMoves = moves.split("");
    console.log(arrayMoves);

    const mapaDirecciones = {
        U: [-1, 0],
        D: [1, 0],
        L: [0, -1],
        R: [0, 1],
    };

    const arrayMovesNumbers = arrayMoves.map(
        (letra) => mapaDirecciones[letra as keyof typeof mapaDirecciones],
    );
    console.log(arrayMovesNumbers);

    let posicionesFuturas = [...ptoPartidaReno];

    for (let i = 0; i < arrayMovesNumbers.length; i++) {
        const [pY, pX] = arrayMovesNumbers[i];
        const [pFY, pFX] = posicionesFuturas;

        posicionesFuturas = [pFY + pY, pFX + pX];

        if (!arrayBoard[pFY + pY] || !arrayBoard[pFY + pY][pFX + pX]) {
            console.log("crash - undeterminated");
            return "crash";
        }
        if (arrayBoard[pFY + pY][pFX + pX] === "#") {
            console.log("crash");
            return "crash";
        }
        if (arrayBoard[pFY + pY][pFX + pX] === "*") {
            console.log("success");
            return "success";
        }
    }

    console.log("fail");
    return "fail";
}

const board = `
.....
.*#.*
.@...
.....
`;

moveReno(board, "D");
// ➞ 'fail' -> se mueve pero no recoge nada

moveReno(board, "U");
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, "RU");
// ➞ 'crash' -> choca contra un obstáculo (#)

moveReno(board, "RRRUU");
// ➞ 'success' -> recoge algo (*)

moveReno(board, "DD");
// ➞ 'crash' -> se choca con la parte de abajo del tablero

moveReno(board, "UUU");
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

moveReno(board, "RR");
// ➞ 'fail' -> se mueve pero no recoge nada
