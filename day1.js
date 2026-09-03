// Printing
console.log("Hello");
process.stdout.write("tea");
console.table({ city: "ktm" });
console.warn({ city: "ktm" });

// Data Types
let score1 = 100;
let name = "chaicode.com";
let isLoggedin = false;

//object
let teaTypes = ["lemon tea", "orange tea"];
let user = { firstname: "souharda", lastname: "bhattarai" };

let getScore = score1;

console.log(getScore);

//changes
score2 = 105;
console.log(score2);

//operations
let addition = 4 + 5;
let subtract = 9 - 3;
let mult = 3 * 5;
let divi = 8 / 2;
let reminder = 9 % 2;
let expo = 2 ** 3;

let myscore = 110;
myscore++;

// Comparion operation

let num11 = 3;
let num2 = 3;
let num3 = 6;

console.log(num11 == num2);
console.log(num11 != num3);
console.log(num11 > num3);
console.log(num11 < num3);

//logical operation
let isEmailuser = true;
let isGoogleuser = false;

console.log(isEmailuser || isGoogleuser);
console.log(isEmailuser && isGoogleuser);
console.log(!isEmailuser);

//assignments
let score3 = 10 + 11;

let num1 = 10;

// num1 = num1 + 5
num1 /= 5;
console.log(num1);

//precedence
let score4 = 2 * (3 + 2) - 1;
console.log(score4);
