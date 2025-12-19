/*
Simula el recorrido de un regalo dentro de una fábrica y devuelve cómo termina. Para ello debes crear una función runFactory(factory).

factory es un string[] donde cada celda puede ser:

> < ^ v movimientos
. salida correcta
Ten en cuenta que todas las filas tienen la misma longitud y que no habrá otros símbolos.

El regalo siempre empieza en la posición (0,0) (arriba a la izquierda). En cada paso lee la celda actual y se mueve según la dirección. Si llega a una celda con un punto (.) significa que ha salido correctamente de la fábrica.

Resultado

Devuelve uno de estos valores:

'completed' si llega a un .
'loop' si visita una posición dos veces
'broken' si sale fuera del tablero
Ejemplos

runFactory([">>."]); // 'completed'

runFactory([">>>"]); // 'broken'

runFactory([">><"]); // 'loop'

runFactory([">>v", "..<"]); // 'completed'

runFactory([">>v", "<<<"]); // 'broken'

runFactory([">v.", "^.."]); // 'completed'

runFactory(["v.", "^."]); // 'loop'

*/

/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
    let x = 0;
    let y = 0;
    const visited = new Set();

    while (x >= 0 && x < factory[0].length && y >= 0 && y < factory.length) {
        if (factory[y][x] === ".") {
            return "completed";
        }

        const key = `${x},${y}`;
        if (visited.has(key)) {
            return "loop";
        }
        visited.add(key);

        const move = factory[y][x];
        if (move === ">") x++;
        else if (move === "<") x--;
        else if (move === "^") y--;
        else if (move === "v") y++;
        else return "broken"; // Should not happen based on strict input rules, but good for safety
    }

    return "broken";
}

console.log(runFactory([">>."])); // 'completed'

console.log(runFactory([">>>"])); // 'broken'

console.log(runFactory([">><"])); // 'loop'

console.log(runFactory([">>v", "..<"])); // 'completed'

console.log(runFactory([">>v", "<<<"])); // 'broken'

console.log(runFactory([">v.", "^.."])); // 'completed'

console.log(runFactory(["v.", "^."])); // 'loop'
