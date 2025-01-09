/*
¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes:

indices: Un array de enteros que representan el progreso de cada reno en la pista:
0: El carril está vacío.
Número positivo: La posición actual del reno desde el inicio de la pista.
Número negativo: La posición actual del reno desde el final de la pista.
length: La longitud de cada carril.
Devuelve un string que represente la pista de la carrera:

Cada carril tiene exactamente length posiciones llenas de nieve (~).
Cada reno se representa con la letra r.
Los carriles están numerados al final con /1, /2, etc.
La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.

Ejemplos:

drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3


drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4


drawRace([3, 7, -2], 12)
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3


*/
function drawRace(indices, length) {
    let resultado = '';
    let pistas = indices.length;

    // Recorremos la longitud de la pista por cada reno
    for (let i = 0; i < pistas; i++) {
        let rowPista = '';
        const posicionReno = indices[i];

        // llenamos de nieve la pista
        rowPista += '~'.repeat(length);

        // colocamos al reno
        if (posicionReno != 0) {
            if (posicionReno > 0) {
                // remplazamos la posición del reno en la pista usando slice
                rowPista = rowPista.slice(0, posicionReno) + 'r' + rowPista.slice(posicionReno + 1);
            } else if(posicionReno < 0) {
                // remplazamos la posición del reno en la pista contando desde atrás hacia adelante
                rowPista = rowPista.slice(0, length + posicionReno) + 'r' + rowPista.slice(length + posicionReno + 1);
            }
        }

        // Espacios en blanco iniciales usando padStart
        rowPista = rowPista.padStart(length + pistas - 1 - i, ' ');

        // añadimos el número de la pista
        rowPista += ` /${i+1}`;

        // añadimos la pista al resultado
        resultado += rowPista + '\n';
    }

    // quitamos el último salto de línea '\n'
    resultado = resultado.slice(0, -1);

    return resultado;
}

console.log(drawRace([0, 5, -3], 10));