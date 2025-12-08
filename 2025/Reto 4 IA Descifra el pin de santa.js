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
    const blocks = code.match(/\[([^\]]+)\]/g);
    if (!blocks) return null;

    let pin = "";

    for (const block of blocks) {
        const content = block.slice(1, -1);

        if (content === "<") {
            if (pin.length > 0) {
                pin += pin[pin.length - 1];
            }
            continue;
        }

        let digit = parseInt(content[0], 10);
        const ops = content.slice(1);

        for (const op of ops) {
            if (op === "+") {
                digit = (digit + 1) % 10;
            } else if (op === "-") {
                digit = (digit - 1 + 10) % 10;
            }
        }

        pin += digit;
    }

    return pin && pin.length === 4 ? pin : null;
}

console.log(decodeSantaPin("[1++][2-][3+][<]"));
// "3144"

console.log(decodeSantaPin("[9+][0-][4][<]"));
// "0944"

console.log(decodeSantaPin("[1+][2-]"));
// null (solo 2 dígitos)
