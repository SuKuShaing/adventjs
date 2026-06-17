/*
¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5

Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales.
*/

/**
 *  @param {string} code - The magical program to execute
 *  @returns {number} - The final value after executing the program
 */
function execute(code) {
    let valor = 0;

    const codeArray = [...code];
    
    // const codeArray = ['{','+','}','{','+','}','{','+','}'];
    // console.log(codeArray.slice(0 + 1).indexOf('}')+0+1);
    // console.log(codeArray.slice(3 + 1).indexOf('}')+3+1);
    // console.log(codeArray.slice(6 + 1).indexOf('}')+6+1);

    // console.log(codeArray.indexOf(']'));

    for (let i = 0; i < codeArray.length; i++) {
        if (codeArray[i] === '>') continue;

        if (codeArray[i] === '+') valor++;

        if (codeArray[i] === '-') valor--;

        if (codeArray[i] === '[') {
            if (valor === 0) {
                let posicionCierreCorchete = codeArray.indexOf(']');
                i = posicionCierreCorchete - 1;
            } else {
                continue;
            }
        };

        if (codeArray[i] === ']') {
            if (valor === 0) {
                continue;
            } else {
                // i = codeArray.indexOf('[') + 1;
                let posicionAperturaCorchete = codeArray.indexOf('[');
                i = posicionAperturaCorchete;
            }
        };

        if (codeArray[i] === '{') {
            if (valor === 0) {
                let posicionCierreCorchete = codeArray.slice(i + 1).indexOf('}')+i; 
                i = posicionCierreCorchete
            } else {
                continue;
            }
        };

        if (codeArray[i] === '}') {
                continue;
        };
    }

    console.log(valor)
    return valor
}

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5