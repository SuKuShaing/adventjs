/*
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []
*/



/*
    * @param {{ type: 'I' | 'R', size: number }[]} shoes
    * @returns {number[]} Available shoes
*/
function organizeShoes(shoes) {
        const pairs = shoes.reduce((acc, shoe) => {
            if (!acc[shoe.size]) {
                acc[shoe.size] = { I: 0, R: 0 };
            }
            acc[shoe.size][shoe.type]++;
            return acc;
        }, {});

        console.log(pairs);
        /*
        { 
            '38': { I: 1, R: 1 }, 
            '41': { I: 1, R: 0 }, 
            '42': { I: 1, R: 1 } 
        }
        */

        const result = Object.entries(pairs) // convertir el objeto en un array de arrays

        console.log(result);
        /*
        [
            [ '38', { I: 1, R: 1 } ],
            [ '41', { I: 1, R: 0 } ],
            [ '42', { I: 1, R: 1 } ]
        ]
        */

        const resulReducido = result.reduce((acc, [size, { I, R }]) => {
            const min = Math.min(I, R);
            if (min) {
                acc.push(...Array(min).fill(Number(size)));
            }
            return acc;
        }, []);

        console.log(resulReducido);

        return resulReducido;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

organizeShoes(shoes)