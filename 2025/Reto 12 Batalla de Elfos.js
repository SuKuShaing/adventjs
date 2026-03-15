/*
Dos elfos están jugando una batalla por turnos. Cada uno tiene un mazo de movimientos que se representan como un string donde cada carácter es una acción.

A Ataque normal: causa 1 punto de daño si no es bloqueado
B Bloqueo: bloquea un ataque normal (A)
F Ataque fuerte: causa 2 puntos de daño, no puede ser bloqueado
Ambos elfos comienzan con 3 puntos de vida. El primer elfo que llegue a 0 puntos de vida o menos pierde y la batalla termina inmediatamente (no se siguen procesando más movimientos).

Reglas por ronda

Si ambos usan ataque (A o F), ambos reciben daño según el tipo.
B bloquea A, pero no bloquea F.
Todo se resuelve simultáneamente.
Tu tarea

Devuelve el resultado de la batalla como un número:

1 → si el Elfo 1 gana
2 → si el Elfo 2 gana
0 → si empatan (ambos llegan a 0 a la vez o terminan con la misma vida)
elfBattle('A', 'B')
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

elfBattle('F', 'B')
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

elfBattle('AAB', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

elfBattle('AFA', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

elfBattle('AFAB', 'BBAF')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

elfBattle('AA', 'FF')
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2
*/

/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
    const elf1Array = elf1.split("");
    const elf2Array = elf2.split("");

    let vidasElf1 = 3;
    let vidasElf2 = 3;

    console.log(`-`.repeat(50));
    console.log(`-`.repeat(50));

    console.log(
        `vidasElf1 Iniciales: ${vidasElf1} | vidasElf2 Iniciales: ${vidasElf2}`,
    );
    console.log(`Letra Elf1: ${elf1} | Letra Elf2: ${elf2}`);

    console.log(`-`.repeat(50));

    for (let i = 0; i < elf1Array.length; i++) {
        console.log(
            `Letra Elf1: ${elf1Array[i]} | Letra Elf2: ${elf2Array[i]}`,
        );

        if (
            (elf1Array[i] === "A" && elf2Array[i] === "B") ||
            (elf1Array[i] === "B" && elf2Array[i] === "A") ||
            (elf1Array[i] === "B" && elf2Array[i] === "B")
        ) {
            continue;
        }

        if (elf1Array[i] === "A" && elf2Array[i] !== "B") {
            vidasElf2--;
        }

        if (elf2Array[i] === "A" && elf1Array[i] !== "B") {
            vidasElf1--;
        }

        if (elf1Array[i] === "F") {
            vidasElf2 = vidasElf2 - 2;
        }

        if (elf2Array[i] === "F") {
            vidasElf1 = vidasElf1 - 2;
        }

        console.log(`vidasElf1: ${vidasElf1} | vidasElf2: ${vidasElf2}`);

        if (vidasElf1 <= 0 || vidasElf2 <= 0) {
            break;
        }
    }

    // Evaluación
    if (vidasElf1 === vidasElf2) {
        console.log(`return: 0`);
        return 0;
    } else if (vidasElf1 > vidasElf2) {
        console.log(`return: 1`);
        return 1;
    }
    console.log(`return: 2`);
    return 2;
}

elfBattle("A", "B");
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

elfBattle("F", "B");
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

elfBattle("AAB", "BBA");
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

elfBattle("AFA", "BBA");
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

elfBattle("AFAB", "BBAF");
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

elfBattle("AA", "FF");
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2

elfBattle("AAFFFBBB", "ABBBBFFF");
// → 1
