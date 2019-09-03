const UNIVERSAL_GRAVITATIONAL_CONSTANT = 6.672 * Math.pow(10, -11);

const calculateOrbitalEccentricity = (aphelion_AU, perihelion_AU) => 1 - (2 / ((aphelion_AU / perihelion_AU) + 1));

const calculateEscapeVelocity = (mass_kg, meanRadius_m) => Math.sqrt(2 * UNIVERSAL_GRAVITATIONAL_CONSTANT * mass_kg / meanRadius_m);

const calculateSurfaceGravity = (mass_kg, meanRadius_m) => UNIVERSAL_GRAVITATIONAL_CONSTANT * mass_kg / Math.pow(meanRadius_m, 2);

/**
 * Sorts a list of planets according to one of their properties.
 * @param {Object[]} planets - List of planets to be sorted.
 * @param {string} property - Property analyzed to sort the planets.
 * @param {boolean} [ascending = true] - true if the list should be sorted in ascending order of the property, false otherwise.
 * @returns {string[]} The list of planets' names with the value of the property sorted according to the given property.
 */
const sortPlanetsByKey = (planets, property, ascending = true) => {
  const sortedPlanets = Array.prototype.slice.call(planets)
    .sort((a, b) => ascending ? a[property] > b[property] : a[property] < b[property]);

  return sortedPlanets.map(planet => `${planet.name} (${planet[property]})`);
};

/**
 * Filters a list of planets according to one of their properties.
 * @param {Object[]} planets - List of planets to be filtered.
 * @param {string} property - Property analyzed to filter the planets.
 * @param {any} value - The value the property should have to add the planet to the filtered list.
 * @returns {string[]} The list of planets' names filtered according to the property and value parameters.
 */
const filterPlanetsByKey = (planets, property, value) => {
  const filteredPlanets = planets.filter(planet => {
    console.assert(Object.prototype.hasOwnProperty.call(planet, property),
      `${planet.name} has no property ${property}`);
    return Object.prototype.hasOwnProperty.call(planet, property) ? planet[property] === value : false;
  });

  return filteredPlanets.map(planet => planet.name);
};

/**
 * Calculates some extra properties for the input list of planets: orbital eccentricity, escape velocity and surface gravity.
 * @param {Object[]} planets - List of planets that will be used to calculate some extra properties.
 * @returns {Object[]} The list of planets with the extra properties 'eccentricity', 'escapeVelocity_m_per_s' and 'surfaceGravity_m_per_s2'
 */
const calculatePlanetsProperties = planets => planets.map(planet => {
  const eccentricity = calculateOrbitalEccentricity(planet.aphelion_AU, planet.perihelion_AU);
  const escapeVelocity = calculateEscapeVelocity(planet.mass_kg, planet.meanRadius_m);
  const surfaceGravity = calculateSurfaceGravity(planet.mass_kg, planet.meanRadius_m);

  return {
    ...planet,
    eccentricity: parseFloat(eccentricity.toFixed(3)),
    escapeVelocity_m_per_s: parseFloat(escapeVelocity.toFixed(3)),
    surfaceGravity_m_per_s2: parseFloat(surfaceGravity.toFixed(3))
  };
});

module.exports = {
  sortPlanetsByKey,
  filterPlanetsByKey,
  calculatePlanetsProperties,
};