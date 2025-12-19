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

type Factory = string[];
type Result = "completed" | "broken" | "loop";

/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
export function runFactory(factory: Factory): Result {
    if (factory.length === 0) return "broken";

    const recorridoFactory = factory.map((ruta) => ruta.split(""));

    let casillaActual = recorridoFactory[0][0];
    let posicionActual = [0, 0];
    const ultimasPosiciones: string[] = [];

    ultimasPosiciones.push(posicionActual.join(""));

    while (casillaActual !== ".") {
        if (casillaActual == ">") {
            // Mover derecha
            posicionActual[1]++;

            if (recorridoFactory[posicionActual[0]][posicionActual[1]]) {
                casillaActual =
                    recorridoFactory[posicionActual[0]][posicionActual[1]];

                if (ultimasPosiciones.includes(posicionActual.join("")))
                    return "loop";

                ultimasPosiciones.push(posicionActual.join(""));
            } else {
                return "broken";
            }
        } else if (casillaActual == "<") {
            // Mover izquierda
            posicionActual[1]--;

            if (recorridoFactory[posicionActual[0]][posicionActual[1]]) {
                casillaActual =
                    recorridoFactory[posicionActual[0]][posicionActual[1]];

                if (ultimasPosiciones.includes(posicionActual.join("")))
                    return "loop";

                ultimasPosiciones.push(posicionActual.join(""));
            } else {
                return "broken";
            }
        } else if (casillaActual == "^") {
            // Mover arriba
            posicionActual[0]--;

            if (
                posicionActual[0] >= 0 &&
                posicionActual[0] < recorridoFactory.length
            ) {
                casillaActual =
                    recorridoFactory[posicionActual[0]][posicionActual[1]];

                if (ultimasPosiciones.includes(posicionActual.join("")))
                    return "loop";

                ultimasPosiciones.push(posicionActual.join(""));
            } else {
                return "broken";
            }
        } else if (casillaActual == "v") {
            // Mover abajo
            posicionActual[0]++;

            if (
                posicionActual[0] >= 0 &&
                posicionActual[0] < recorridoFactory.length
            ) {
                casillaActual =
                    recorridoFactory[posicionActual[0]][posicionActual[1]];

                if (ultimasPosiciones.includes(posicionActual.join("")))
                    return "loop";

                ultimasPosiciones.push(posicionActual.join(""));
            } else {
                return "broken";
            }
        }
    }

    return "completed";
}

console.log(runFactory([">>."])); // 'completed'

console.log(runFactory([">>>"])); // 'broken'

console.log(runFactory([">><"])); // 'loop'

console.log(runFactory([">>v", "..<"])); // 'completed'

console.log(runFactory([">>v", "<<<"])); // 'broken'

console.log(runFactory([">v.", "^.."])); // 'completed'

console.log(runFactory(["v.", "^."])); // 'loop'
