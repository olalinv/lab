class Thing {
  constructor (attr1, attr2) {
    // Attributes
    this.attr1 = attr1;
    this.attr2 = attr2;
    console.log(this);
  }
  // Methods
  doSomething (thing) {
    console.log(`This thing has an attribute '${Object.keys(thing)[0]}' with value '${thing.attr1}' and an attribute '${Object.keys(thing)[1]}' with value '${thing.attr2}'`);
  }
}

// Thing 1
let thing1 = new Thing('value1', 'value2');
thing1.doSomething(thing1);
// Thing 2
let thing2 = new Thing('valueA', 'valueB');
thing2.doSomething(thing2);
