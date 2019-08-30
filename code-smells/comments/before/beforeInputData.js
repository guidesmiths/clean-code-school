// List of planets with some interesting data
module.exports = [
  {
    id: "Jupiter", // name of the planet
    aph: 5.4588, // aphelion in Astronomical Units
    per: 4.9501, // perihelion in Astronomical Units
    sat: 79, // number of satellites
    rad: 6.9911 * Math.pow(10, 7), // mean radius in m
    mass: 1.8982 * Math.pow(10, 27), // mass in kg
    gas: true, // is a gas giant planet?
  },
  {
    id: "Mars", // name of the planet
    aph: 1.666, // aphelion in Astronomical Units
    per: 1.382, // perihelion in Astronomical Units
    sat: 2, // number of satellites
    rad: 3.3895 * Math.pow(10, 6), // mean radius in m
    mass: 6.4171 * Math.pow(10, 23), // mass in kg
  },
  {
    id: "Earth", // name of the planet
    aph: 1.017, // aphelion in Astronomical Units
    per: 0.98327, // perihelion in Astronomical Units
    sat: 1, // number of satellites
    rad: 6.371 * Math.pow(10, 6), // mean radius in m
    mass: 5.97237 * Math.pow(10, 24), // mass in kg
    gas: false, // is a gas giant planet?
  },
  {
    id: "Saturn", // name of the planet
    aph: 10.1238, // aphelion in Astronomical Units
    per: 9.0412, // perihelion in Astronomical Units
    sat: 62, // number of satellites
    rad: 5.8232  * Math.pow(10, 7), // mean radius in m
    mass: 5.6834 * Math.pow(10, 26), // mass in kg
  },
  {
    id: "Mercury", // name of the planet
    aph: 0.466697, // aphelion in Astronomical Units
    per: 0.307499, // perihelion in Astronomical Units
    sat: 0, // number of satellites
    rad: 2.4397 * Math.pow(10, 6), // mean radius in m
    mass: 3.3011 * Math.pow(10, 23), // mass in kg
    gas: false, // is a gas giant planet?
  },
  {
    id: "Uranus", // name of the planet
    aph: 20.11, // aphelion in Astronomical Units
    per: 18.33, // perihelion in Astronomical Units
    sat: 27, // number of satellites
    rad: 2.5362 * Math.pow(10, 7), // mean radius in m
    mass: 8.6810 * Math.pow(10, 25), // mass in kg
    gas: true, // is a gas giant planet?
  },
  {
    id: "Neptune", // name of the planet
    aph: 30.33, // aphelion in Astronomical Units
    per: 29.81, // perihelion in Astronomical Units
    sat: 14, // number of satellites
    rad: 2.4622 * Math.pow(10, 7), // mean radius in m
    mass: 1.02413 * Math.pow(10, 26), // mass in kg
    gas: true, // is a gas giant planet?
  },
  {
    id: "Venus", // name of the planet
    aph: 0.728213, // aphelion in Astronomical Units
    per: 0.718440, // perihelion in Astronomical Units
    sat: 0, // number of satellites
    rad: 6.0518 * Math.pow(10, 6), // mean radius in m
    mass: 4.8675 * Math.pow(10,24), // mass in kg
    gas: false, // is a gas giant planet?
  },
];
