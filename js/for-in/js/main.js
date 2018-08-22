'use strict';

// Object definition
let thing = {
  attr1: 'attr1',
  attr2: 'attr2',
  saySomeThing: () => {
    console.log(`I'm a thing`);
  }
};

// Iterate over object properties and methods
for (let item in thing) {
  console.log(item, thing[item]);
}
