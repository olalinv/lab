'use strict';

console.time('timerThings');

let things = [];

for (let i = 0; i < 9999; i++) {
  things[i] = 'thing' + i;
}

console.timeEnd('timerThings');

console.log(things);
