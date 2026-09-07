// Primitives and Objects
//Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

// null and undefined

let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

//string

let myString = "hello";
let myStringOne = "Hola";
let username = "souharda";

let oldGreet = myString + " " + "souharda";
console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);

let sm1 = Symbol("souharda");
let sm2 = Symbol("souharda");

console.log(sm1);
console.log(sm2);

// non primitives
const username2 = {
  "first name": "souharda",
  isLoggedin: true,
};

username.firstname = "Mr. s";
username.lastname = "bhattarai";

console.log(username["first name"]);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

let today = new Date();
console.log(today.getDate());

// Array

let anotherUser = ["hitesh", true];

console.log(anotherUser[0]);

let isValue = "2abc";
console.log(typeof Number(isValue));
console.log(Number(null));

//condition

//Checking if a variable is a number or not:

let score = "44";

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No that is not a number");
}

// Checking if an array is empty or not:

let items = ["item1"];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT empty");
}
