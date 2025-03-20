/*
Santa Claus 🎅 está decorando un árbol de Navidad mágico 🪄, que este año tiene una estructura especial en forma de árbol binario. Cada nodo del árbol representa un regalo, y Santa quiere saber la altura del árbol para colocar la estrella mágica en la punta.

Tu tarea es escribir una función que calcule la altura de un árbol binario. La altura de un árbol binario se define como el número máximo de niveles desde la raíz hasta una hoja. Un árbol vacío tiene una altura de 0.


Ejemplos:
// Definición del árbol
const tree = {
   value: '🎁',
   left: {
      value: '🎄',
      left: {
         value: '⭐',
         left: null,
         right: null
      },
      right: {
         value: '🎅',
         left: null,
         right: null
      }
   },
   right: {
      value: '❄️',
      left: null,
      right: {
         value: '🦌',
         left: null,
         right: null
      }
   }
};

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(tree)
// Devuelve: 3





* @param {{ value: string; left: any; right: any }} tree
* @returns {number} - Height of the tree.
*/
function treeHeight(tree) {
	// Profundidad de un árbol binario
   let altura = 0;

   // Con una función recursiva revisaremos la profundidad de cada rama
   function profundidad(nodo, nivel) {
      console.log(nodo);
      if (!nodo) {
         return;
      }
      if (nivel > altura) {
         altura = nivel;
         console.log(altura);
      }
      profundidad(nodo.left, nivel + 1);
      profundidad(nodo.right, nivel + 1);
   }

   profundidad(tree, 1);
   console.log({altura});
   return altura;
}

// Definición del árbol
const tree = {
   value: '🎁',
   left: {
      value: '🎄',
      left: {
         value: '⭐',
         left: null,
         right: null
      },
      right: {
         value: '🎅',
         left: null,
         right: null
      }
   },
   right: {
      value: '❄️',
      left: null,
      right: {
         value: '🦌',
         left: null,
         right: null
      }
   }
};

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(tree)
// Devuelve: 3