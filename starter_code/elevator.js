class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
  }

  start() {
    var intervalID = window.setInterval(myCallback, 500);
    function myCallback() {
      this.update();
    }
  }
  stop() { intervalID = clearInterval() }
  update() {
    log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() {
    console.log(`Direction: ${} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
