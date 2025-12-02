/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable([
{ name: 'Alice', city: 'London' },
{ name: 'Bob', city: 'Paris' },
{ name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
{ gift: 'Doll', quantity: 10 },
{ gift: 'Book', quantity: 5 },
{ gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

*/ 

/*
* @param {Array<Object>} data
* @returns {string}
*/
function drawTable(data) {
    // obtener el nombre de la columna
    const columnNames = Object.keys(data[0]);

    // poner la primera letra en mayuscula
    columnNames.forEach((palabra, index) => {
        columnNames[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });

    // valores de las columnas
    const values = data.map((row) => Object.values(row));

    // unir columnNames y values
    const table = [columnNames, ...values];

    // console.log(table[1][1].length);
    // console.log(table[1][1].toString());
    // console.log(table[1][1].toString().length);

    // obtener la longitud maxima de caracteres de cada columna
    let longitudColumna = [];

    let valorMaximoTemporal = 0;
    for (let i = 0; i < columnNames.length; i++) {
        for (let j = 0; j < table.length; j++) {
            table[j][i].length > valorMaximoTemporal ? valorMaximoTemporal = table[j][i].length : null;
            
            if (j === table.length - 1) {
                longitudColumna.push(valorMaximoTemporal);
                break;
            }
        }
        valorMaximoTemporal = 0;
    }


    // colocar valores en una tabla resultado
    const esquinaYunion = '+';
    const guion = '-';
    const espacio = ' ';
    const pared = '|';

    // separadores 
    let separador = '';
    for (let i = 0; i < table[0].length; i++) {
        separador += esquinaYunion + guion.repeat(longitudColumna[i] + 2);
    }
    separador += esquinaYunion;

    let resultado = '';
    for (let i = 0; i < table.length; i++) {
        if (i === 0) {
            resultado += separador + '\n';
        }
        for (let j = 0; j < table[i].length; j++) {
            resultado += pared + espacio + table[i][j] + espacio.repeat(longitudColumna[j] - table[i][j].toString().length) + espacio;
            if (j === table[i].length - 1) {
                resultado += pared + '\n';
            }
        }
        if (i === 0) {
            resultado += separador + '\n';
        }
    }
    resultado += separador;
    




    // console.log(table);
    // console.log(longitudColumna);
    console.log(resultado);
    return resultado;
}

/*
[
    [ 'gift', 'quantity' ],
    [ 'Doll', 10 ],
    [ 'Book', 5 ],
    [ 'Music CD', 1 ]
]
*/ 


drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
    ])

drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
    ])