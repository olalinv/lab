'use strict';

// Classes
class Thing {
  constructor (attr1, attr2) {
    // Attributes
    this._attr1 = attr1;
    this._attr2 = attr2;
    console.log(this);
  }
  // Getters/Setters
  get attr1 () {
    return this._attr1;
  }
  get attr2 () {
    return this._attr2;
  }
  set attr1 (attr1) {
    this._attr1 = attr1;
  }
  set attr2 (attr2) {
    this._attr2 = attr2;
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
    this._attr3 = attr3;
    console.log(this);
  }
  // Getters/Setters
  get attr3 () {
    return this._attr3;
  }
  set attr3 (attr3) {
    this._attr3 = attr3;
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
console.log(thing.attr1); // getter
thing.attr1 = 'value11'; // setter
console.log(thing.attr1);

// A subthing
let subthing = new SubThing('value1', 'value2', 'value3');
console.log(subthing.attr3); // getter
subthing.attr3 = 'value33'; // setter
console.log(subthing.attr3);
