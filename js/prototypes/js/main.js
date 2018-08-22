'use strict';

// Prototypes
function Thing (attr1) {
  this.attr1 = attr1;
}

Thing.prototype.saySomething = function () {
  console.log('I\'m a ' + this.attr1);
};

function SubThing (attr1) {
  Thing.call(this, attr1);
  this.attr2 = '';
}

SubThing.prototype = Object.create(Thing.prototype);
SubThing.prototype.constructor = SubThing;
SubThing.prototype.doSomething = function () {
  console.log('I do things');
};

// Thing
var thing = new Thing('being');
thing.saySomething(); // Outputs 'I'm a being'.

// SubThing
var subthing = new SubThing('person');
subthing.saySomething(); // Outputs 'I'm a person'.
subthing.doSomething(); // Outputs 'I do things'.
