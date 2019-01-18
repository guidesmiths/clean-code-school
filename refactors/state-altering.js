const TrafficLight =  function() {
  let count = 0;
  let currentState = new Red(this);

  this.change = function (state) {
      // limits number of changesfu
      if (count++ >= 10) return;
      currentState = state;
      currentState.go();
  };

  this.start = function () {
      currentState.go();
  };
}

const Red = function (light) {
  this.light = light;

  this.go = function () {
      log.add("Red --> for 1 minute");
      light.change(new Green(light));
  }
};

const Yellow = function (light) {
  this.light = light;

  this.go = function () {
      log.add("Yellow --> for 10 seconds");
      light.change(new Red(light));
  }
};

const Green = function (light) {
  this.light = light;

  this.go = function () {
      log.add("Green --> for 1 minute");
      light.change(new Yellow(light));
  }
};

// log helper
const log = (function () {
  let log = "";

  return {
      add: function (msg) { log += msg + "\n"; },
      show: function () { console.log(log); log = ""; }
  }
})();

const run = () => {
  var light = new TrafficLight();
  light.start();

  log.show();
}

run();