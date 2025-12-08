/*
Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

[1++][2-][3+][<]
Escribe una función que descifre el PIN a partir del código.

El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

+ suma 1
- resta 1
El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

También existe el bloque especial [<], que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver null.

🧩 Ejemplos
decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)
*/

/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
    const arrayConInstrucciones = code.split("]");
    arrayConInstrucciones.pop();

    const arrayConInstruccionesLimpio = arrayConInstrucciones.map((elemento) =>
        elemento.slice(1)
    );

    console.log(arrayConInstruccionesLimpio);

    if (arrayConInstruccionesLimpio.length < 4) {
        return null;
    }

    const codigoOculto = [];

    for (const oneCode of arrayConInstruccionesLimpio) {
        const primerCaracter = oneCode.slice(0, 1);
        const comandos = oneCode.slice(1);

        if (primerCaracter == "<") {
            codigoOculto.push(codigoOculto[codigoOculto.length - 1]);
            continue;
        }

        let numero = parseInt(primerCaracter);

        for (const comandoAEjecutar of comandos) {
            if (comandoAEjecutar == "+") {
                if (numero == 9) {
                    numero = 0;
                } else {
                    numero++;
                }
            } else if (comandoAEjecutar == "-") {
                if (numero == 0) {
                    numero = 9;
                } else {
                    numero--;
                }
            }
        }

        codigoOculto.push(numero);
    }

    console.log(codigoOculto.join(""));
    return codigoOculto.join("");
}

decodeSantaPin("[1++][2-][3+][<]");
// "3144"

decodeSantaPin("[9+][0-][4][<]");
// "0944"

decodeSantaPin("[1+][2-]");
// null (solo 2 dígitos)
