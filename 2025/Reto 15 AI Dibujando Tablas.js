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
    if (data.length === 0) return "";

    const columns = Object.keys(data[0]);

    const sortedData = [...data].sort((a, b) => {
        if (typeof a[sortBy] === "number") {
            return a[sortBy] - b[sortBy];
        }
        return String(a[sortBy]).localeCompare(String(b[sortBy]));
    });

    const colWidths = columns.map((_, i) => {
        const headerLen = 1; // 'A', 'B', etc.
        const maxValLen = Math.max(
            ...sortedData.map((row) => String(row[columns[i]]).length)
        );
        return Math.max(headerLen, maxValLen);
    });

    const buildSeparator = () => {
        return "+" + colWidths.map((w) => "-".repeat(w + 2)).join("+") + "+";
    };

    const buildRow = (values) => {
        return (
            "|" +
            values
                .map((val, i) => {
                    const str = String(val);
                    return " " + str.padEnd(colWidths[i], " ") + " ";
                })
                .join("|") +
            "|"
        );
    };

    const headerValues = columns.map((_, i) => String.fromCharCode(65 + i));
    const header = buildRow(headerValues);
    const separator = buildSeparator();

    const body = sortedData.map((row) => buildRow(columns.map((c) => row[c])));

    return [separator, header, separator, ...body, separator].join("\n");
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
