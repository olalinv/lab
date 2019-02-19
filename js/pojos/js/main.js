'use strict';

// Manual POJO
// var pojo = function (name, age) {
//     return {
//         name: name,
//         age: age
//     };
// };
// let thing = pojo('name', 'age');
// console.log(thing.name);
// console.log(thing.age);

// POJOs dynamic generator
var pojo = function () {
    var members = arguments;

    return function () {
        var obj = {}, i = 0, j = members.length;
        for (; i < j; ++i) {
            obj[members[i]] = arguments[i];
        }

        return obj;
    };
};

// A thing
let thing = pojo('name', 'age');
let thing1 = thing('Oscar', 40);
console.log(thing1.name);
console.log(thing1.age);
// Another thing
let thing2 = thing('Pedro', 15);
console.log(thing2.name);
console.log(thing2.age);
