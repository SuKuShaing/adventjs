/*
Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

received: Lista con los regalos que Santa tiene actualmente.
expected: Lista con los regalos que Santa debería tener.
Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
Ten en cuenta que:

Los regalos pueden repetirse en ambas listas.
Las listas de regalos están desordenadas.
Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.


Ejemplos:
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
    ['book', 'train', 'kite', 'train'],
    ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
    ['bear', 'bear', 'car'],
    ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }






* @typedef {Record<string, number>} GiftsCount
*/

/*
* @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
*/

/*
* @param {string[]} received
* @param {string[]} expected
* @returns {Result}
*/



function fixGiftList(received, expected) {
    // Inicializar los objetos que se van a devolver
    const missing = {};
    const extra = {};


    // Convertir en objetos la lista contando los regalos y sumando los repetidos
    const receivedObj = received.reduce((acc, gift) => {
        acc[gift] = acc[gift] ? acc[gift] + 1 : 1;
        return acc;
    }, {});

    const expectedObj = expected.reduce((acc, gift) => {
        acc[gift] = acc[gift] ? acc[gift] + 1 : 1;
        return acc;
    }, {});


    // Comparar los objetos y devolver los regalos faltantes y los repetidos
    // Revisa los regalos esperados viendo sí están en los recibidos
    for (const gift in expectedObj) {
        if (receivedObj[gift]) {
            // console.log(`El objeto ${gift} si existe en received`);
            // console.log(receivedObj[gift]);
            if (receivedObj[gift] < expectedObj[gift]) {
                missing[gift] = expectedObj[gift] - receivedObj[gift];
            } else if (receivedObj[gift] > expectedObj[gift]) {
                extra[gift] = receivedObj[gift] - expectedObj[gift];
            }
        } else {
            // console.log(`El objeto ${gift} no existe en received`);
            // console.log(expectedObj[gift]);

            missing[gift] = expectedObj[gift];
        }
    }

    // Revisa los regalos recibidos viendo sí están en los esperados
    for (const gift in receivedObj) {
        if (expectedObj[gift]) {
            // console.log(`El objeto ${gift} si existe en expected`);
            // console.log(expectedObj[gift]);
            if (receivedObj[gift] > expectedObj[gift]) {
                extra[gift] = receivedObj[gift] - expectedObj[gift];
            }
        } 
        else {
            // console.log(`El objeto ${gift} no existe en expected`);
            // console.log(receivedObj[gift]);
            extra[gift] = receivedObj[gift];
        }
    }




    // console.log(receivedObj);
    // console.log(expectedObj);

    console.log({missing, extra});



	return {
        missing,
        extra
    };
}



fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
    ['book', 'train', 'kite', 'train'],
    ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
    ['bear', 'bear', 'car'],
    ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }