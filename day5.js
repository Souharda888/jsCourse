// Functions
//1

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
  console.log(test);
}
let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);

//2

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

//3

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499 * 100);

//4
function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);

//5

function createTeaMaker(name) {
  let score = 100;
  return function (teaType) {
    return `Making ${teaType} ${name} ${score}`;
  };
}

let teaMaker = createTeaMaker("hitesh");
let result = teaMaker("green tea");
console.log(result);
