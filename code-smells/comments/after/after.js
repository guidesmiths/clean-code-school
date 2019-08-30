const planets = require("./afterInputData");
const { sortPlanetsByKey, filterPlanetsByKey, calculatePlanetsProperties } = require("./utils_api");

console.log('\nINPUT DATA:\n');
console.table(planets);

console.log('\nPLANETS SORTED BY DIFFERENT PARAMETERS:\n')
const sortedPlanets = {};
const sortKeys = ['name', 'perihelion_AU', 'satellites'];
sortKeys.forEach(key => sortedPlanets[key] = sortPlanetsByKey(planets, key));
sortedPlanets['isGasGiant'] = filterPlanetsByKey(planets, 'isGasGiant', true);
console.table(sortedPlanets);

console.log('\nPLANETS WITH SOME EXTRA PROPERTIES:\n')
const planetsProperties = calculatePlanetsProperties(planets);
console.table(planetsProperties);