'use strict';

// Rest operator (convert any number of parameters to an array)
function sumThings (...numbers) {
  // forEach way
  // let result = 0;
  // numbers.forEach(elem => {
  //   result += elem;
  // });
  // return result;
  return numbers.reduce((sum, next) => sum + next);
}

console.log(sumThings(1, 6, 10));

// Spread operator (convert an array to a parameter's list)
let numbers = [1, 6, 10];
let sumNumbers = sumThings(...numbers);
console.log(sumNumbers);
// This will not sum, an array is not a parameter's list
let trySumNumbers = sumThings([1, 6, 10]);
console.log(trySumNumbers);