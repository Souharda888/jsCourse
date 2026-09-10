//loops challenges
//1

let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

//2

let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

//3

let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");

//4

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);

//5

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
  let takeNumber = numbers[l] * 2;
  multipliedNumbers.push(takeNumber);
}
console.log(multipliedNumbers);

//6

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];
  cityList.push(myCity);
}
console.log(cityList);

// advanced challenges
//1

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
console.log(selectedTeas);

//2

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris" || cities[i] === "Paris") {
    continue;
  }

  visitedCities.push(cities[i]);
}
//3
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
//4

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}

//5

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityNewPopulations = {};
console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);

//6

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}

//7

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

console.log(availableTeas);

//8

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCities.forEach(function (city) {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

//9

let myNumbers = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < myNumbers.length; i++) {
  if (numbers[i] === 7) {
    continue;
  }
  doubledNumbers.push(numbers[i] * 2);
}

//10

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
