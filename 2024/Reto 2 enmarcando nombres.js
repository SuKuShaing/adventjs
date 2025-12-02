/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])

*/

function createFrame(names) {
	// Buscar el string más largo en el array, guardar su valor en una constante llamada strMasLargo
    const strMasLargo = names.reduce((acc, name) => name.length > acc ? name.length : acc, 0);
    // strMasLargo más 2 espacios más 2 asteriscos
    const ancho = strMasLargo + 4;
    // Crear una constante que contenga el stringResultado
    let stringResultado = '';
    // crear una variable aperturaCierre con la parte de linea de apertura y cierre con solo *, con la cantidad de strMasLargo + 4
    const aperturaCierre = '*'.repeat(ancho);
    // colocar la aperturaCierre para abrir en stringResultado
    stringResultado += aperturaCierre + '\n';
    // colocar los string uno por uno en stringResultado, con el formato * string (espacios necesarios para completar el strMasLargo) *
    names.forEach(name => {
        stringResultado += `* ${name}${' '.repeat(strMasLargo - name.length)} *\n`;
    });
    // colocar la aperturaCierre para cerrar en stringResultado
    stringResultado += aperturaCierre;
    // retornar stringResultado
    return stringResultado;
}

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));

