
/*
Why Refactor
Identical groups of parameters are often encountered in multiple methods. This causes code duplication of both the parameters themselves and of related operations. By consolidating parameters in a single class, you can also move the methods for handling this data there as well, freeing the other methods from this code.
*/


class Pin {
  constructor(lat, long) {
    this.latitude = lat;
    this.longitude = long;
  }

  getCoordinates() {
    return {
      latitude: this.lat,
      longitude: this.long,
    }
  }
};


const displayPin = (pin) => {
  //Draw a pin in a map.
}

const selectPin = (pin) => {
  //Select a pin in a map.
}

const deletetPin = (pin) => {
  //Select a pin in a map.
}

const createLine = (xPin, yPin) => {
  displayPin(xPin);
  displayPin(yPin);
  ///...Create a line between;
}


/* 
Drawbacks
If you move only data to a new class and don’t plan to move any behaviors or related operations there, this begins to smell of a Data Class. 

It’s a normal thing when a newly created class contains only a few public fields (and maybe even a handful of getters/setters). But the true power of objects is that they can contain behavior types or operations on their data.
*/


class Pin {
  constructor(lat, long, colour = '#F00', comment = null, map = null) {
    this.latitude = lat;
    this.longitude = long;
    this.colour = colour;
    this.comment = comment;
    this.map = map;
  }

  getCoordinates() {
    return {
      latitude: this.lat,
      longitude: this.long,
    }
  }

  addComment(comment) {
    this.comment = comment;
  }

  getComment() {
    return this.comment;
  }

  setColour(col) {
    this.colour = col
  }

  isOverSea() {
    // Calculate if pin is over the sea using this.map
  }

  whatCountry() {
    // Return Country if is over any country using this.map
  }

  //...
};
