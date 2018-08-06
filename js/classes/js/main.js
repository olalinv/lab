class Thing {
  constructor (attr1, attr2) {
    // Attributes
    this.attr1 = attr1;
    this.attr2 = attr2;
    console.log(this);
  }
  // Methods
  doSomething (thing) {
    console.log(`This thing has an attribute 'attr1' with value '${thing.attr1}' and an attribute 'attr2' with value '${thing.attr2}'`);
  }
}

// A thing
let thing1 = new Thing('Value1', 'Value2');
thing1.doSomething(thing1);
// Another thing
let thing2 = new Thing('ValueA', 'ValueB');
thing2.doSomething(thing2);
