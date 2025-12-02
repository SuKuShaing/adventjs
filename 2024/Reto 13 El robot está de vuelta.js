/* 
Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
Pero también tiene ciertos modificadores para los movimientos:

*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

true: si el robot vuelve a estar justo donde empezó
[x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo


isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'



@param {string} moves
@returns {true|[number, number]} Return true if robot returns or position

*/
function isRobotBack(moves) {
    // copio la cadena y la convierto en un array para poder manipularla
    let comandos = moves.split('');

	// tomo la cadena comandos y buscaremos los * y duplicaremos el movimiento que sigue
    for (let i = 0; i < comandos.length; i++) {
        if (comandos[i] === '*') {
            comandos[i] = comandos[i + 1];
        }
    }

    // tomo la cadena comandos y buscaremos los ! y invertiremos el movimiento que sigue
    for (let i = 0; i < comandos.length; i++) {
        if (comandos[i] === '!') {
            if (comandos[i + 1] === 'U') {
                comandos[i + 1] = 'D';
            } else if (comandos[i + 1] === 'D') {
                comandos[i + 1] = 'U';
            } else if (comandos[i + 1] === 'L') {
                comandos[i + 1] = 'R';
            } else if (comandos[i + 1] === 'R') {
                comandos[i + 1] = 'L';
            }
            // elimino el símbolo de ! para que no se tome en cuenta en el siguiente ciclo
            comandos.splice(i, 1);
        }
    }

    // tomo la cadena comandos y buscaremos los ? y solo se hará el movimiento si no se ha hecho antes
    // U?D?U
    let hayUnoAntes = false;
    for (let i = 0; i < comandos.length; i++) {
        if (comandos[i] === '?') {
            for (let j = 0; j < i; j++) {
                if (comandos[i + 1] === comandos[j]) {
                    hayUnoAntes = true;
                    break;
                }
            }
            if (hayUnoAntes) {
                comandos.splice(i, 2);
            } else {
                comandos.splice(i, 1);
            }
            hayUnoAntes = false;
            i = 0;
        }
    }

    // declaro las variables para las coordenadas
    let x = 0;
    let y = 0;

    // recorro la cadena comandos y sumo o resto las coordenadas según el movimiento
    for (let i = 0; i < comandos.length; i++) {
        if (comandos[i] === 'U') {
            y++;
        } else if (comandos[i] === 'D') {
            y--;
        } else if (comandos[i] === 'L') {
            x--;
        } else if (comandos[i] === 'R') {
            x++;
        }
    }

    // si las coordenadas son 0,0 devuelvo true, si no devuelvo las coordenadas
    if (x === 0 && y === 0) {
        // console.log(true);
        return true;
    } else {
        // console.log([x, y]);
        return [x, y];
    }
}

isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true