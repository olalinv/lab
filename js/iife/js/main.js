'use strict';

// IIFE
let thing = (function () {
  let privateAttr = 'privateAttr';
  return {
    attr1: 'attr1',
    attr2: 'attr2',
    saySomething: function (str) {
      console.log(str);
    },
    doSomething: function (str) {
      console.log(str);
    }
  };
})();

// Thing
console.log(thing.privateAttr); // Outputs undefined.
console.log(thing.attr1); // Outputs 'attr1'.
console.log(thing.attr2); // Outputs 'attr2'.
thing.saySomething('I\'m a thing'); // Outputs 'I'm a thing'.
thing.doSomething('I do things'); // Outputs 'I do things'.
