/*
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

@ es la locomotora del tren.
o son los vagones del tren.
* es una fruta mágica.
· son espacios vacíos.
mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

'L': izquierda
'R': derecha
'U': arriba
'D': abajo.
Con esta información, debes devolver una cadena de texto:

'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
'eat': Si el tren recoge una fruta mágica (*).
'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
Ejemplo:

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
*/

function moveTrain(board, mov) {
	let resultado = "";
  let rowObjetivo = 0;
  let columnaObjetivo = 0;
  
  // Encuentra la posición row de la locomotora en el board 
  let rowLocomotora = board.findIndex(e => e.includes('@'));

  // Encuentra la posición column de la locomotora en el board
  let columnLocomotora = board[rowLocomotora].indexOf('@');

  // Sumamos los movimientos para saber la nueva posición y que hay ahí
  if (mov === 'U') {
    rowObjetivo = rowLocomotora - 1;
    columnaObjetivo = columnLocomotora;
  } else if (mov === 'D') {
    rowObjetivo = rowLocomotora + 1;
    columnaObjetivo = columnLocomotora;
  } else if (mov === 'L') {
    rowObjetivo = rowLocomotora;
    columnaObjetivo = columnLocomotora - 1;
  } else if (mov === 'R') {
    rowObjetivo = rowLocomotora;
    columnaObjetivo = columnLocomotora + 1;
  }

  // Revisamos que no se salga del board
  if (rowObjetivo < 0 || rowObjetivo >= board.length || columnaObjetivo < 0 || columnaObjetivo >= board[rowLocomotora].length) {
    resultado = 'crash';
    return resultado;
  }
  
  // Revisamos que hay en la posición objetivo
  let objetivo = board[rowObjetivo][columnaObjetivo];

  if (objetivo === 'o') {
    resultado = 'crash';
  } else if (objetivo === '*') {
    resultado = 'eat';
  } else if (objetivo === '·') {
    resultado = 'none';
  }
  
	return resultado;
}



const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha