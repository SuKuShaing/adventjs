/*

¡El GPS del trineo se ha vuelto loco! 😱 Papá Noel tiene los tramos de su viaje, pero están todos desordenados.

Tu misión es reconstruir la ruta completa desde el origen hasta el destino final.

Ten en cuenta: El primer elemento del array es siempre el primer tramo del viaje. A partir de ahí, debes ir conectando los destinos con los siguientes orígenes.

revealSantaRoute([
    ["MEX", "CAN"],
    ["UK", "GER"],
    ["CAN", "UK"],
]);
// → ['MEX', 'CAN', 'UK', 'GER']

revealSantaRoute([
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["BRA", "UAE"],
    ["UAE", "JPN"],
    ["CMX", "HKN"],
]);
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log(revealSantaRoute([
    ["STA", "HYD"],
    ["ESP", "CHN"],
]));
// → ['STA', 'HYD']

🔎 A tener en cuenta:

No hay rutas duplicadas ni ciclos en el camino de Papá Noel.
Puede haber tramos que no pertenezcan a la ruta; estos deben ignorarse.
*/

/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
    if (routes.length === 0) return [];

    const [firstRoute] = routes;
    const routeMap = new Map();

    // Create a map for quick lookup: Origin -> Destination
    for (const [origin, dest] of routes) {
        routeMap.set(origin, dest);
    }

    console.log(routeMap);

    const result = [firstRoute[0], firstRoute[1]];
    let currentDest = firstRoute[1];

    // Follow the path
    while (routeMap.has(currentDest)) {
        const nextDest = routeMap.get(currentDest);
        // Avoid infinite loops if there's a cycle (though problem says no cycles)
        if (nextDest === result[result.length - 2]) break;

        result.push(nextDest);
        currentDest = nextDest;
    }

    return result;
}

console.log(
    revealSantaRoute([
        ["MEX", "CAN"],
        ["UK", "GER"],
        ["CAN", "UK"],
    ])
);
// → ['MEX', 'CAN', 'UK', 'GER']

console.log(
    revealSantaRoute([
        ["USA", "BRA"],
        ["JPN", "PHL"],
        ["BRA", "UAE"],
        ["UAE", "JPN"],
        ["CMX", "HKN"],
    ])
);
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log(
    revealSantaRoute([
        ["STA", "HYD"],
        ["ESP", "CHN"],
    ])
);
// → ['STA', 'HYD']
