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
 *  @param {string} code - El programa mágico a ejecutar
 *  @returns {number} - El valor final después de ejecutar el programa
 */
export function execute(code: string): number {
    let value = 0;
    let i = 0;

    while (i < code.length) {
        const char = code[i];

        if (char === "+") {
            value++;
        } else if (char === "-") {
            value--;
        } else if (char === ">") {
            // Sin operación, solo avanza a la siguiente instrucción
        } else if (char === "[") {
            if (value === 0) {
                // Salta a después del ] coincidente
                let depth = 1;
                i++;
                while (i < code.length && depth > 0) {
                    if (code[i] === "[") depth++;
                    else if (code[i] === "]") depth--;
                    i++;
                }
                i--; // Ajusta porque el bucle incrementará i al final
            }
        } else if (char === "]") {
            if (value !== 0) {
                // Salta atrás a después del [ coincidente
                let depth = 1;
                i--;
                while (i >= 0 && depth > 0) {
                    if (code[i] === "]") depth++;
                    else if (code[i] === "[") depth--;
                    i--;
                }
                i++; // Ajusta porque el bucle incrementará i al final
            }
        } else if (char === "{") {
            if (value === 0) {
                // Salta a después del } coincidente
                let depth = 1;
                i++;
                while (i < code.length && depth > 0) {
                    if (code[i] === "{") depth++;
                    else if (code[i] === "}") depth--;
                    i++;
                }
                i--; // Ajusta porque el bucle incrementará i al final
            }
        } else if (char === "}") {
            // Fin del condicional, solo continúa
        }

        i++;
    }

    // console.log("🚀 ~ execute ~ value:", value)
    return value;
}

execute("+++"); // 3
execute("+--"); // -1
execute(">+++[-]"); // 0
execute(">>>+{++}"); // 3
execute("+{[-]+}+"); // 2
execute("{+}{+}{+}"); // 0
execute("------[+]++"); // 2
execute("-[++{-}]+{++++}"); // 5
