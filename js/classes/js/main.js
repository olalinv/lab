'use strict';

// Classes
class Thing {
  constructor (attr1, attr2) {
    // Attributes
    this.attr1 = attr1;
    this.attr2 = attr2;
    console.log(this);
  }
  // Methods
  saySomething () {
    console.log(`I'm a thing`);
  }
  explainYourself (thing) {
    console.log(
      `I have: 
      an attribute '${Object.keys(thing)[0]}' with value '${thing.attr1}', 
      an attribute '${Object.keys(thing)[1]}' with value '${thing.attr2}'`);
  }
}

// Subclasses
class SubThing extends Thing {
  constructor (attr1, attr2, attr3) {
    // Attributes
    super(attr1, attr2);
    this.attr3 = attr3;
    console.log(this);
  }
  // Methods
  saySomething () {
    super.saySomething();
    console.log(`I'm a subthing`);
  }
  explainYourself (subthing) {
    console.log(
      `I have: 
      an attribute '${Object.keys(subthing)[0]}' with value '${subthing.attr1}', 
      an attribute '${Object.keys(subthing)[1]}' with value '${subthing.attr2}', 
      an attribute '${Object.keys(subthing)[2]}' with value '${subthing.attr3}'`
    );
  }
}

// A thing
let thing = new Thing('value1', 'value2');
thing.saySomething();
thing.explainYourself(thing);

// A subthing
let subthing = new SubThing('value1', 'value2', 'value3');
subthing.saySomething();
subthing.explainYourself(subthing);
