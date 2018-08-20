// Mixins
let mixin = {
  madeIn () {
    console.log(`This thing was made in year 2018!`);
  }
};

let thingMixin = {
  __proto__: mixin,
  madeIn () {
    super.madeIn();
  }
};

// Classes
class Thing {
  constructor (attr1, attr2) {
    // Attributes
    this.attr1 = attr1;
    this.attr2 = attr2;
    // Mixins
    Object.assign(this, thingMixin);
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

// A thing
let thing = new Thing('value1', 'value2');
// Instance methods
thing.saySomething();
thing.explainYourself(thing);
// Mixin methods
thing.madeIn();
