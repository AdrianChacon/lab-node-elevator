const Elevator = require('./elevator.js');
const Person = require('./person.js');
const myElevator = new Elevator();
const pepe = new Person('pepe', 0 , 3);
const paco = new Person('paco', 9 , 1);
const manue = new Person('manue', 2 , 5);
const fali = new Person('fali', 10 , 4);
myElevator.start();
myElevator.call(pepe)
myElevator.call(paco)
myElevator.call(manue)
myElevator.call(fali)





