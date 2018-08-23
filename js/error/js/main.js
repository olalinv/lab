'use strict';

try {
  thing.doSomething(); // Throws ReferenceError
  // eval('alert("Hello world)'); // Throws SyntaxError
  // throw 'myException'; // generates an exception
} catch (e) {
  if (e.name || e.message) {
    console.log(e.name + ': ' + e.message);
  }
  if (e instanceof EvalError) {

  } else if (e instanceof RangeError) {

  } else if (e instanceof ReferenceError) {

  } else if (e instanceof SyntaxError) {

  } else if (e instanceof TypeError) {

  } else if (e instanceof URIError) {

  } else {
    // unspecified exceptions
    console.log(e); // pass exception object to error handler
  }
}
