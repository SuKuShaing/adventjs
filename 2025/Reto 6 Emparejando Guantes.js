/*
En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados. Cada guante viene descrito por dos valores:

hand: indica si es un guante izquierdo (L) o derecho (R)
color: el color del guante (string)
Tu tarea es ayudarles a emparejar guantes: Un par válido es un guante izquierdo y uno derecho del mismo color.

Debes devolver una lista con los colores de todos los pares encontrados. Ten en cuenta que puede haber varios pares del mismo color. El orden se determina por el que se pueda hacer primero el par.

🧩 Ejemplos

const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []

const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

matchGloves(gloves4)
// ['red', 'green']
*/

/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
    const pares = [];

    const sueltos = [];

    for (const glove of gloves) {
        if (!sueltos.some((guante) => guante.color === glove.color)) {
            // sí no existe, lo creamos
            if (glove.hand === "L") {
                sueltos.push({ color: glove.color, izq: 1 });
            } else if (glove.hand === "R") {
                sueltos.push({ color: glove.color, der: 1 });
            }
        } else {
            // sí existe, sumamos
            sueltos.forEach((guante) => {
                if (guante.color === glove.color) {
                    if (glove.hand === "L") {
                        if (guante.izq) {
                            guante.izq++;
                        } else {
                            guante.izq = 1;
                        }
                    } else if (glove.hand === "R") {
                        if (guante.der) {
                            guante.der++;
                        } else {
                            guante.der = 1;
                        }
                    }
                }
            });
        }

        sueltos.forEach((par) => {
            if (par.der > 0 && par.izq > 0) {
                pares.push(par.color);
                par.der--;
                par.izq--;
            }
        });
    }

    console.log(sueltos);
    console.log(pares);
    return pares;
}

const gloves = [
    { hand: "L", color: "red" },
    { hand: "R", color: "red" },
    { hand: "R", color: "green" },
    { hand: "L", color: "blue" },
    { hand: "L", color: "green" },
];

matchGloves(gloves);
// ["red", "green"]

const gloves2 = [
    { hand: "L", color: "gold" },
    { hand: "R", color: "gold" },
    { hand: "L", color: "gold" },
    { hand: "L", color: "gold" },
    { hand: "R", color: "gold" },
];

matchGloves(gloves2);
// ["gold", "gold"]

const gloves3 = [
    { hand: "L", color: "red" },
    { hand: "R", color: "green" },
    { hand: "L", color: "blue" },
];

matchGloves(gloves3);
// []

const gloves4 = [
    { hand: "L", color: "green" },
    { hand: "L", color: "red" },
    { hand: "R", color: "red" },
    { hand: "R", color: "green" },
];

matchGloves(gloves4);
// ['red', 'green']
