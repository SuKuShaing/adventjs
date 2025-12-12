/*
Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

Tu misión es escribir una función que reciba:

fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
takeOffTime → la misma fecha de despegue, también en formato elfo.
La función debe devolver:

Los segundos completos que faltan para el despegue.
Si ya estamos en el despegue exacto → 0.
Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
🎯 Reglas
Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
Usa diferencias en segundos, no en milisegundos.
Redondea siempre hacia abajo (floor): solo segundos completos.
🧩 Ejemplos

const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)
// 30

// justo en el momento exacto
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
// 0

// 12 segundos después del despegue
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
// -12
*/

type ElfDateTime =
    `${number}*${number}*${number}@${number}|${number}|${number} NP`;

const takeoff = "2025*12*25@00|00|00 NP";

/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */

export function timeUntilTakeOff(
    fromTime: ElfDateTime,
    takeOffTime: ElfDateTime
): number {
    const fechaLimite = npToUTC(takeOffTime);
    const fechaQueTienen = npToUTC(fromTime);

    const diferencia = fechaLimite - fechaQueTienen;

    console.log(diferencia / 1000);
    return Math.floor(diferencia / 1000);

    function npToUTC(timeInString: ElfDateTime) {
        // Regex con grupos nombrados (?<nombre>...)
        // Nota: Escapamos caracteres especiales como * con \* y | con \|
        const regex =
            /^(?<anio>\d{4})\*(?<mes>\d{2})\*(?<dia>\d{2})@(?<hora>\d{2})\|(?<min>\d{2})\|(?<seg>\d{2})\sNP$/;
        const coincidencia = timeInString.match(regex);

        if (!coincidencia || !coincidencia.groups) {
            throw new Error("Formato de fecha inválido");
        }

        const { anio, mes, dia, hora, min, seg } = coincidencia.groups;

        console.log(`${dia} ${mes} ${anio} ${hora}:${min}:${seg}`);

        const valor = Date.parse(
            `${anio}-${mes}-${dia}T${hora}:${min}:${seg}Z`
        );
        return valor;
    }
}

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
timeUntilTakeOff("2025*12*24@23|59|30 NP", takeoff);
// 30

// justo en el momento exacto
timeUntilTakeOff("2025*12*25@00|00|00 NP", takeoff);
// 0

// 12 segundos después del despegue
timeUntilTakeOff("2025*12*25@00|00|12 NP", takeoff);
// -12
