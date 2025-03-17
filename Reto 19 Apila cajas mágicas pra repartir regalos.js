/*
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:


    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,  // 1 línea arriba
  2: [" ___ ", "|___|"],   // 3 lineas arriba
  5: [" _____ ", "|     |", "|_____|"],   // 5 lineas arriba
  10: [" _________ ", "|         |", "|_________|"]  // 9 lineas arriba
}

Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.


Ejemplos:
distributeWeight(1)
// Devuelve:
//  _
// |_|
// |_|

distributeWeight(2)
// Devuelve:
//  ___
// |___|

distributeWeight(3)
// Devuelve:
//  _
// |_|_
// |___|

distributeWeight(4)
// Devuelve:
//  ___
// |___|
// |___|

distributeWeight(5)
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

//  ___
// |___|_
// |     |
// |_____|

Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.





* @param {number} weight - Total weight of the gifts
* @returns {string} - Stacked boxes represented as ASCII art

*/
function distributeWeight(weight) {
    // Cálculo de cajas necesarias
	const cuantasCajasDe10 = Math.floor(weight / 10);
	const cuantasCajasDe5 = Math.floor((weight % 10) / 5);
	const cuantasCajasDe2 = Math.floor(((weight % 10) % 5) / 2);
	const cuantasCajasDe1 = Math.floor(((weight % 10) % 5) % 2);
	const cajasNecesarias = {
		cuantasCajasDe1,
		cuantasCajasDe2,
		cuantasCajasDe5,
		cuantasCajasDe10,
	};

	// Representación en JavaScript de las cajas
	const boxRepresentations = {
		1: [" _ ", "|_|"],
		2: [" ___ ", "|___|"],
		5: [" _____ ", "|     |", "|_____|"],
		10: [" _________ ", "|         |", "|_________|"],
	};

    // Suma de cajas totales
    let cajasTotales = 0;
    Object.values(cajasNecesarias).forEach((cajas) => {
        cajasTotales += cajas;
    });

    console.log(cajasNecesarias);
	console.log(cajasTotales);
    
    // Caja de arriba
    let cajaArriba = 0;

    // Dibujar las cajas
    let representacionCajas = "";
    for (let i = 0; i < cajasTotales; i++) {
        // Caja de 1
        if (cajasNecesarias.cuantasCajasDe1 > 0) {
            if (cajaArriba === 0) {
                representacionCajas += boxRepresentations[1][0] + "\n" + boxRepresentations[1][1];
            } else {
                representacionCajas += "\n" + boxRepresentations[1][1];
            }
            cajaArriba = 1;
            cajasNecesarias.cuantasCajasDe1--;
        }
        // Caja de 2
        else if (cajasNecesarias.cuantasCajasDe2 > 0) {
            if (cajaArriba === 0) {
                representacionCajas += boxRepresentations[2][0] + "\n" + boxRepresentations[2][1];
            } else if (cajaArriba === 1) {
                representacionCajas += "_" + "\n"+ boxRepresentations[2][1];
            } else {
                representacionCajas += "\n" + boxRepresentations[2][1];
            }            
            cajaArriba = 2;
            cajasNecesarias.cuantasCajasDe2--;
        }
        // Caja de 5
        else if (cajasNecesarias.cuantasCajasDe5 > 0) {
            if (cajaArriba === 0) {
                representacionCajas += boxRepresentations[5][0] + "\n" + boxRepresentations[5][1] + "\n" + boxRepresentations[5][2];
            } else if (cajaArriba === 1) {
                representacionCajas += "___" + "\n" + boxRepresentations[5][1] + "\n" + boxRepresentations[5][2];
            } else if (cajaArriba === 2) {
                representacionCajas += "_" + "\n" + boxRepresentations[5][1] + "\n" + boxRepresentations[5][2];
            } else {
                representacionCajas += "\n" + boxRepresentations[5][1] + "\n" + boxRepresentations[5][2];
            }
            cajaArriba = 5;
            cajasNecesarias.cuantasCajasDe5--;
        }
        // Caja de 10
        else if (cajasNecesarias.cuantasCajasDe10 > 0) {
            if (cajaArriba === 0) {
                representacionCajas += boxRepresentations[10][0] + "\n" + boxRepresentations[10][1] + "\n" + boxRepresentations[10][2];
            } else if (cajaArriba === 1) {
                representacionCajas += "_______" + "\n" + boxRepresentations[10][1] + "\n" + boxRepresentations[10][2];
            } else if (cajaArriba === 2) {
                representacionCajas += "_____" + "\n" + boxRepresentations[10][1] + "\n" + boxRepresentations[10][2];
            } else if (cajaArriba === 5) {
                representacionCajas += "___" + "\n" + boxRepresentations[10][1] + "\n" + boxRepresentations[10][2];
            } else {
                representacionCajas += "\n" + boxRepresentations[10][1] + "\n" + boxRepresentations[10][2];
            }
            cajaArriba = 10;
            cajasNecesarias.cuantasCajasDe10--;
        }
    }


    console.log(representacionCajas);
    return representacionCajas;
}

distributeWeight(1);
// Devuelve:
//  _
// |_|

distributeWeight(2);
// Devuelve:
//  ___
// |___|

distributeWeight(3);
// Devuelve:
//  _
// |_|_
// |___|

distributeWeight(4);
// Devuelve:
//  ___
// |___|
// |___|

distributeWeight(5);
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6);
// Devuelve:
//  _
// |_|___
// |     |
// |_____|


distributeWeight(18);
//  _ 
// |_|_
// |___|_
// |     |
// |_____|___
// |         |
// |_________|


distributeWeight(121);