document.addEventListener('DOMContentLoaded', function (event) {
  doOperation(add, 1, 2);
  doOperation(substract, 1, 2);
});

function add (num1, num2) {
  return num1 + num2;
}

function substract (num1, num2) {
  return num1 - num2;
}

function doOperation (operation, num1, num2) {
  operation(num1, num2);
  console.log(operation.name + ': ' + operation(num1, num2));
}
