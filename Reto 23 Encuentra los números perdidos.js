/*
Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. Sin embargo, ¡algunas listas están incompletas y faltan números!

Tu tarea es escribir una función que, dado un array de números, encuentre todos los números que faltan entre 1 y n (donde n es el tamaño del array o el número más alto del array).

Eso sí, ten en cuenta que:

Los números pueden aparecer más de una vez y otros pueden faltar
El array siempre contiene números enteros positivos
Siempre se empieza a contar desde el 1


Ejemplo de entrada
findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]




* @param {number[]} nums - List of integers.
* @returns {number[]} - List of missing numbers.
*/
function findMissingNumbers(nums) {
    // Encontrar el número más alto
    const NumeroMasAlto = Math.max(...nums);

    // Números faltantes
    const numerosFaltantes = [];
    
    // Recorrer los números
    for (let i = 1; i <= NumeroMasAlto; i++) {
        // Si el número no está en el array, agregarlo a los faltantes
        if (!nums.includes(i)) numerosFaltantes.push(i);
    }

    console.log(numerosFaltantes);
    return numerosFaltantes;
}

findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findMissingNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]