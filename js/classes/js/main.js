class Thing {
  constructor (attr1, attr2) {
    // Attributes
    this.attr1 = attr1;
    this.attr2 = attr2;
    console.log(this);
  }
  // Methods
  doSomething () {
    console.log(`This is a thing`);
  }
  explainYourself (thing) {
    console.log(
      `This thing has: 
      an attribute '${Object.keys(thing)[0]}' with value '${thing.attr1}' and 
      an attribute '${Object.keys(thing)[1]}' with value '${thing.attr2}'`);
  }
}

// Inheritance
class SubThing extends Thing {
  constructor (attr1, attr2, attr3) {
    // Attributes
    super(attr1, attr2);
    this.attr3 = attr3;
    console.log(this);
  }
  // Methods
  doSomething () {
    super.doSomething();
    console.log(`This is a subthing`);
  }
  explainYourself (subthing) {
    console.log(
      `This subthing has: 
      an attribute '${Object.keys(subthing)[0]}' with value '${subthing.attr1}', 
      an attribute '${Object.keys(subthing)[1]}' with value '${subthing.attr2}' and 
      an attribute '${Object.keys(subthing)[2]}' with value '${subthing.attr3}'`
    );
  }
}

// A thing
let thing = new Thing('value1', 'value2');
thing.doSomething();
thing.explainYourself(thing);

// A subthing
let subthing = new SubThing('value1', 'value2', 'value3');
subthing.doSomething();
subthing.explainYourself(subthing);
