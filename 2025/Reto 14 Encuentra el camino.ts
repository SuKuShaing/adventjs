/*
En el Polo Norte, los elfos han simplificado su sistema de almacenamiento para evitar errores.
Ahora guardan los regalos en un objeto mágico con profundidad limitada, donde cada valor aparece una sola vez.

Santa necesita una forma rápida de saber qué camino de claves debe seguir para encontrar un regalo concreto.

Tu tarea es escribir una función que, dado un objeto y un valor, devuelva el array de claves que hay que recorrer para llegar a ese valor.

Reglas:

El objeto tiene como máximo 3 niveles de profundidad.
El valor a buscar aparece como mucho una vez.
El objeto solo contiene otros objetos y valores primitivos (strings, numbers, booleans).
Si el valor no existe, devuelve un array vacío.
Ejemplos:

const workshop = {
    storage: {
        shelf: {
            box1: "train",
            box2: "switch",
        },
        box: "car",
    },
    gift: "doll",
};

findGiftPath(workshop, "train");
// ➜ ['storage', 'shelf', 'box1']

findGiftPath(workshop, "switch");
// ➜ ['storage', 'shelf', 'box2']

findGiftPath(workshop, "car");
// ➜ ['storage', 'box']

findGiftPath(workshop, "doll");
// ➜ ['gift']

findGiftPath(workshop, "plane");
// ➜ []

*/

type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
export function findGiftPath(workshop: Workshop, gift: Gift): Path {
    const keys = Object.keys(workshop);
    console.log("keys a revisar:", keys);

    const ruta: Path = [];

    for (const key of keys) {
        ruta.push(key);
        console.log("key a revisar:", key);

        if (workshop[key] === gift) {
            console.log("ruta a retornar:", ruta);
            return ruta;
        } else if (
            Object.prototype.toString.call(workshop[key]) === "[object Object]"
        ) {
            const pad = findGiftPath(workshop[key], gift);
            if (pad && pad.length > 0) {
                return [key, ...pad];
            }
        }
        ruta.pop();
    }

    return [];
}

const workshop = {
    storage: {
        shelf: {
            box1: "train",
            box2: "switch",
        },
        box: "car",
    },
    gift: "doll",
};

console.log("------------train-------------");
console.log(findGiftPath(workshop, "train"));
// ➜ ['storage', 'shelf', 'box1']

console.log("------------switch-------------");
console.log(findGiftPath(workshop, "switch"));
// // ➜ ['storage', 'shelf', 'box2']

console.log("------------car-------------");
console.log(findGiftPath(workshop, "car"));
// // ➜ ['storage', 'box']

console.log("------------doll-------------");
console.log(findGiftPath(workshop, "doll"));
// // ➜ ['gift']

console.log("------------plane-------------");
console.log(findGiftPath(workshop, "plane"));
// // ➜ []
