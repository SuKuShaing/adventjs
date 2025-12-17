/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe tener:

Cabecera con letras de columna (A, B, C…).
El contenido de la tabla son los valores de los objetos.
Los valores deben estar alineados a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
La función recibe un segundo parámetro sortBy que indica el nombre del campo por el que se deben ordenar las filas. El orden será alfabético ascendente si los valores son strings y numérico ascendente si son números.

Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable(
    [
        { name: 'Charlie', city: 'New York' },
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' }
    ],
    'name'
)
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

drawTable(
    [
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 },
        { gift: 'Doll', quantity: 10 }
    ],
    'quantity'
)
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+
*/

/**
 * @param {Array<Object>} data - The data to draw the table
 * @param {string} sortBy - The field to sort the table
 * @returns {string}
 */
function drawTable(data, sortBy) {
    // Ordenar datos
    let dataOrdanada = [...data];

    if (typeof data[0][sortBy] === "number") {
        dataOrdanada.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
        dataOrdanada.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    // Pasar datos del objeto a una tabla (array de arrays)
    const keys = Object.keys(data[0]);
    let tabla = [];

    for (let key of keys) {
        const columna = [];
        for (let i = 0; i < data.length; i++) {
            columna.push(dataOrdanada[i][key]);
        }
        tabla.push(columna);
    }

    // medir el ancho máximo de la tabla
    const anchoMaximo = [];

    for (let i = 0; i < tabla.length; i++) {
        anchoMaximo.push(
            tabla[i].reduce(
                (acumulador, ValorActual) =>
                    ValorActual.toString().length > acumulador
                        ? ValorActual.toString().length
                        : acumulador,
                0
            )
        );
    }

    // Colocar letra en la tabla
    const letra = "A";

    for (let i = 0; i < tabla.length; i++) {
        const letraAInsertar = String.fromCharCode(letra.charCodeAt(0) + i);
        // charCodeAt(0) obtiene el código ASCII/Unicode del primer carácter (índice 0) de la cadena letra.
        // Ejemplo: 'A'.charCodeAt(0) → 65

        // String.fromCharCode(...) Método estático que convierte un código numérico de vuelta a carácter.
        // String.fromCharCode(66) → 'B'

        tabla[i].unshift(letraAInsertar);
    }

    // Crear la tabla
    let diagramaTabla = "";
    for (let filas = 0; filas < tabla[0].length; filas++) {
        let yaEntre = false;
        for (let columnas = 0; columnas < tabla.length; columnas++) {
            if (!yaEntre) {
                if (filas === 0 || filas === 1) {
                    for (
                        let filasSeparadora = 0;
                        filasSeparadora < tabla.length;
                        filasSeparadora++
                    ) {
                        diagramaTabla +=
                            `+` + "-".repeat(anchoMaximo[filasSeparadora] + 2);
                    }
                    diagramaTabla += `+\n`;
                    yaEntre = true;
                }
            }
            diagramaTabla +=
                `| ${tabla[columnas][filas]} ` +
                " ".repeat(
                    anchoMaximo[columnas] -
                        tabla[columnas][filas].toString().length
                );
        }
        diagramaTabla += `|\n`;
    }

    for (
        let filasSeparadora = 0;
        filasSeparadora < tabla.length;
        filasSeparadora++
    ) {
        diagramaTabla += `+` + "-".repeat(anchoMaximo[filasSeparadora] + 2);
    }
    diagramaTabla += `+`;

    console.log(tabla);
    console.log(anchoMaximo);
    console.log(diagramaTabla);
    return diagramaTabla;
}

drawTable(
    [
        { name: "Charlie", city: "New York" },
        { name: "Alice", city: "London" },
        { name: "Bob", city: "Paris" },
    ],
    "name"
);
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

drawTable(
    [
        { gift: "Book", quantity: 5 },
        { gift: "Music CD", quantity: 1 },
        { gift: "Doll", quantity: 10 },
    ],
    "quantity"
);
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+
