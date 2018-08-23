'use strict';

try {
  thing.doSomething(); // Throws ReferenceError
  // eval('alert("Hello world)'); // Throws SyntaxError
} catch (e) {
  console.log(e.name + ': ' + e.message);
  if (e instanceof EvalError) {

  } else if (e instanceof RangeError) {

  } else if (e instanceof ReferenceError) {

  } else if (e instanceof SyntaxError) {

  } else if (e instanceof TypeError) {

  } else if (e instanceof URIError) {

  }
}
