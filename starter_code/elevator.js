class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'up';
    this.passenger = [];
    this.waitingList = [];
    this.intervalID = 0
  }
  start() {
    let i = 0;
    this.intervalID =  setInterval(() => {
      if (this.floor < this.MAXFLOOR && this.direction == 'up') {
        this._passengersEnter();
        this._passengersLeave();
        this.floorUp();
        this.update();
      } else {
        this._passengersEnter();
        this._passengersLeave();
        this.floorDown();
        this.update();
      }
    }, 1000);
  }

  stop() {
    this.intervalID = clearInterval()
  }

  update() {
    this.log();
  }
  _passengersEnter() {
    for (let i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor == this.floor) {
        this.passenger.push(this.waitingList[i])
        this.requests.push(this.waitingList[i].destinationFloor)
        console.log(`${this.waitingList[i].name} has enter the elevator`)
        this.waitingList.splice(i, 1);
      }
    }
  }
  _passengersLeave() {
    for (let i = 0; i < this.passenger.length; i++) {
      if (this.passenger[i].destinationFloor == this.floor) {
        console.log(`${this.passenger[i].name} has left the elevator`)
        this.passenger.splice(i, 1);
      }
    }
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
      this.direction = 'up';
    } else {
      this.direction = 'down'
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor--;
      this.direction = 'down';
    } else {
      this.direction = 'up'
    }
  }
  call(person) {
    //modo cola
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
    console.log(this.waitingList)
    console.log(this.requests)
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
