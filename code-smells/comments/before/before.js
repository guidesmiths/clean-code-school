const planets = require("./beforeInputData");

console.log('\nINPUT DATA:\n');
console.table(planets);

// Let's sort the planets by several parameters
console.log('\nPLANETS SORTED BY DIFFERENT PARAMETERS:\n')
const list = {};

// - Sort alphabetically
const alphList = Array.prototype.slice.call(planets)
    .sort((a, b) => a.id.localeCompare(b.id, {sensitivity: 'base'}));
list['alphabetically'] = alphList.map(p => `${p.id} (${p.id})`);

// - Sort by nearest to Sun comparing 'per' property
const perList = Array.prototype.slice.call(planets)
    .sort((a, b) => a.per > b.per);
list['> perihelion'] = perList.map(p => `${p.id} (${p.per})`);

// - Sort by increasing number of satellites comparing 'sat' property
const satList = Array.prototype.slice.call(planets)
    .sort((a, b) => a.sat > b.sat);
list['> satellites'] = satList.map(p => `${p.id} (${p.sat})`);

// - List gas giant planets, checking 'gas' property
const gasList = planets.filter(p =>
  // Check if the planet has the property 'gas'. If it does, check its value. Otherwise, return false.
   Object.prototype.hasOwnProperty.call(p, 'gas') ? p.gas : false
);
list['gas giants'] = gasList.map(p => p.id);

console.table(list);

// Let's calculate some properties based on the input data
console.log('\nPLANETS WITH SOME EXTRA PROPERTIES:\n')
const props = planets.map(p => {
  // Calculate orbital eccentricity: calculated from perihelion and aphelion
  const e = 1 - (2 / ((p.aph / p.per) + 1));

  // Calculate 'escape velocity': √(2*G*M/R), where
  //  - G is the universal gravitational constant
  //  - M the mass of the body to be escaped from
  //  - r the distance from the center of mass of the body to the object
  const ve = Math.sqrt(2 * 6.672 * Math.pow(10, -11) * p.mass / p.rad);

  // Calculate 'surface gravity' directly from Newton's law of universal gravitation: g = G * M / r^2, where:
  //  - G is the universal gravitational constant
  //  - M the mass of the planet
  //  - r the radius of the object
  const g = 6.672 * Math.pow(10, -11) * p.mass / Math.pow(p.rad, 2);

  // Append calculated properties to planet input properties
  return {
    ...p,
    e: parseFloat(e.toFixed(3)),
    ve: parseFloat(ve.toFixed(3)),
    g: parseFloat(g.toFixed(3)),
  };
});

console.table(props);
