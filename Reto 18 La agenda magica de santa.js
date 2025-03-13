/*
Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. El problema: la información de la agenda está mezclada y malformateada. Las líneas contienen un número de teléfono mágico, el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.

Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.

Ten en cuenta que en la agenda:

Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).
El nombre de cada niño está siempre entre < y >
La idea es que escribas una función que, pasándole el teléfono completo o una parte, devuelva el nombre y dirección del niño. Si no encuentra nada o hay más de un resultado, debes devolver null.


Ejemplos:
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explicación: No hay resultados

findInAgenda(agenda, '1')
// null
// Explicación: Demasiados resultados




* @param {string} agenda
* @param {string} phone
* @returns {{ name: string, address: string } | null}
*/

function findInAgenda(agenda, phone) {
    // Cortar el string en líneas
    const agendaComoArray = agenda.split('\n');

    // Por cada línea, buscar el teléfono, el nombre y la dirección
    const arrayOrdenado = agendaComoArray.map((linesDeTexto) => {
        // teléfono
        const telefono = linesDeTexto.match(/\+\d{1,2}-\d{3}-\d{3}-\d{3}/g)[0];
        // nombre limpio
        const nombre = linesDeTexto.match(/<\w+\s\w+>/g).map((nombre) => nombre.replace(/<|>/g, ''))[0];
        // la dirección va a ser todo el texto que no sea el teléfono y el nombre
        const direccion = linesDeTexto.replace(telefono, '').replace(`<${nombre}>`, '').trim();

        return {telefono, nombre, direccion};
    });

    // Filtrar el array de objetos para encontrar el phone
    const filtrado = arrayOrdenado.filter((objeto) => objeto.telefono.includes(phone));

    // console.log(arrayOrdenado);
    console.log('---'.repeat(20));
    console.log(filtrado);
    console.log('---'.repeat(20));

    // Solo devuelve el valor si hay un solo resultado
    if (filtrado.length === 1) {
        console.log({name: filtrado[0].nombre, address: filtrado[0].direccion});
        return {name: filtrado[0].nombre, address: filtrado[0].direccion};
    } else {
        console.log(null);
        return null;
    }
}



const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explicación: No hay resultados

findInAgenda(agenda, '1')
// null
// Explicación: Demasiados resultados
