/* 
Benefits
More readable code. Instead of a hodgepodge of parameters, you see a single object with a comprehensible name.

Identical groups of parameters scattered here and there create their own kind of code duplication: while identical code isn’t being called, identical groups of parameters and arguments are constantly encountered.
*/


const displayPin = (lat, long) => {
  //Draw a pin in a map.
}

const selectPin = (lat, long) => {
  //Select a pin in a map.
}

const deletetPin = (lat, long) => {
  //Select a pin in a map.
}



const createLine = (xlat, xlong, ylat, ylong) => {
  displayPin(xlat, xlong);
  displayPin(ylat, ylong);
  ///...Create a line between;
}
