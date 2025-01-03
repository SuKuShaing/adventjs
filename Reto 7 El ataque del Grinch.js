/*
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
*/

function fixPackages(packages) {
	while (packages.includes("(")) {
		console.log(packages);

		// encontrar el último paréntesis "(" con un lastIndexOf
		const parentesisAbierto = packages.lastIndexOf("(");

		// encontrar el primer paréntesis ")" después del último "("
		const parentesisCerrado = packages.indexOf(")", parentesisAbierto);
		// console.log({ parentesisAbierto, parentesisCerrado });

		// letras entre medio
		const letras = packages.slice(parentesisAbierto + 1, parentesisCerrado);
		// console.log(letras);

		// voltear las letras
		const volteado = voltearTexto(letras);
		// console.log(volteado);

		// reemplazar las letras volteadas en el string original
		const resultado = packages.replace(letras, volteado);
		// eliminar la posición del paréntesisCerrado
		packages = resultado.slice(0, parentesisCerrado) + resultado.slice(parentesisCerrado + 1);
		// eliminar la posición del paréntesisAbierto
		packages = packages.slice(0, parentesisAbierto) + packages.slice(parentesisAbierto + 1);

	}
    console.log(packages);
    return packages;
}

function voltearTexto(texto) {
	return texto.split("").reverse().join("");
}

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"