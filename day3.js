// Array challenges

// 1
let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];
// 2
let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

// 3
let teaTypes = ["herbel tea", "white tea", "masala chai"];

//4
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

//5
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();

//6
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

//7
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
topCities.pop();
console.log(hardCopyCities);
//8
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

//9
let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

//10
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");
