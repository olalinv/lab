'use strict';

function saySomething (text) {
  return console.log(text);
}

function sayHello () {
  saySomething('Hello');
}

export {sayHello};
