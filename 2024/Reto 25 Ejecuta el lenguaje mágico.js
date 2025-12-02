/*
¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{ y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
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




* @param {string} code - The magical program to execute
* @returns {number} - The final value after executing the program
*/


function execute(code) {
	// variables
    let resultado = 0;
    let posicion = 0;

    console.log('Código: ', code)
    console.log(resultado)

    // bucle para recorrer el código
    while (posicion < code.length) {
        // switch para evaluar cada caracter
        switch (code[posicion]) {
            case '>':
                console.log(`entré a > en la posición ${posicion}`);
                posicion++;
                break;
            case '+':
                console.log(`entré a + en la posición ${posicion}`);
                resultado++;
                posicion++;
                break;
            case '-':
                console.log(`entré a - en la posición ${posicion}`);
                resultado--;
                posicion++;
                break;
            case '[':
                console.log(`entré a [ en la posición ${posicion}`);
                // encuentra el índice de cierre del bucle
                // let posicionCierre = code.indexOf(']', posicion);
                // if (resultado == 0) {
                //     posicion = posicionCierre + 1;
                // } else {
                //     posicion++;
                // }
                posicion++;
                break;
            case ']':
                console.log(`entré a ] en la posición ${posicion}`);
                // encuentra el índice de apertura del bucle
                let posicionApertura = code.lastIndexOf('[', posicion);
                if (resultado != 0) {
                    posicion = posicionApertura + 1;
                } else {
                    posicion++;
                }
                break;
            case '{':
                console.log(`entré a { en la posición ${posicion}`);
                // encuentra el índice de cierre del condicional
                let posicionCierreCondicional = code.indexOf('}', posicion);
                if (resultado == 0) {
                    posicion = posicionCierreCondicional + 1;
                } else {
                    posicion++;
                }
                break;
            case '}':
                console.log(`entré a } en la posición ${posicion}`);
                // encuentra el índice de apertura del condicional
                // let posicionAperturaCondicional = code.lastIndexOf('{', posicion);
                // if (resultado == 0) {
                //     posicion++;
                // } else {
                //     posicion = posicionAperturaCondicional + 1;
                // }
                posicion++;
                break;
        }
        console.log(resultado);
    }
    console.log('Resultado final: ', resultado);
    return resultado;
}

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5