const UNIVERSAL_GRAVITATIONAL_CONSTANT = 6.672 * Math.pow(10, -11);

const calculateOrbitalEccentricity = (aphelion_AU, perihelion_AU) => 1 - (2 / ((aphelion_AU / perihelion_AU) + 1));

const calculateEscapeVelocity = (mass_kg, meanRadius_m) => Math.sqrt(2 * UNIVERSAL_GRAVITATIONAL_CONSTANT * mass_kg / meanRadius_m);

const calculateSurfaceGravity = (mass_kg, meanRadius_m) => UNIVERSAL_GRAVITATIONAL_CONSTANT * mass_kg / Math.pow(meanRadius_m, 2);

const sortPlanetsByKey = (planets, property, ascending = true) => {
  const sortedPlanets = Array.prototype.slice.call(planets)
    .sort((a, b) => ascending ? a[property] > b[property] : a[property] < b[property]);

  return sortedPlanets.map(planet => `${planet.name} (${planet[property]})`);
};

const filterPlanetsByKey = (planets, property, value) => {
  const filteredPlanets = planets.filter(planet => {
    console.assert(Object.prototype.hasOwnProperty.call(planet, property),
      `${planet.name} has no property ${property}`);
    return Object.prototype.hasOwnProperty.call(planet, property) ? planet[property] === value : false;
  });

  return filteredPlanets.map(planet => planet.name);
};

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