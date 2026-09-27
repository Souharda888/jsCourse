//Asynchronous JavaScript with Event Loop
// Task 1: Simulating Asynchronous Behavior

// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

// Use setTimeout to simulate this behaviour.

function simulateAsyncTask() {
  console.log("Task started");
  setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}
simulateAsyncTask();

//Task 2: Simulate Multiple Async Tasks with Different Delays

// Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

// Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.

function simulateMultipleTasks() {
  setTimeout(() => {
    console.log("Task 1 finished");
  }, 1000);

  setTimeout(() => {
    console.log("Task 2 finished");
  }, 2000);

  setTimeout(() => {
    console.log("Task 3 finished");
  }, 3000);
}

simulateMultipleTasks();

//Task 3: Async Task with Callback Function

// Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).

// Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback("Fetched data");
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fetchDataWithCallback(displayData);

// Closures in JavaScript
// Task 1: Creating a Counter Using Closures

// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
function createCounter() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

const count = createCounter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());

// Task 2: Rate Limiter Function

// Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".

function rateLimiter(fn, limit) {
  let lastCalled = 0;

  return function () {
    let currentTime = Date.now();

    if (currentTime - lastCalled >= limit) {
      lastCalled = currentTime;
      return fn();
    } else {
      return "Rate limit exceeded";
    }
  };
}

function sayHello() {
  return "Hello!";
}

const limitedHello = rateLimiter(sayHello, 2000);

console.log(limitedHello()); // Hello!
console.log(limitedHello()); // Rate limit exceeded

setTimeout(() => {
  console.log(limitedHello()); // Hello!
}, 2000);

// Task 3: Memoization Function

// Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.

function memoize(fn) {
  let cache = {};

  return function (a, b) {
    let key = a + "," + b;

    if (cache[key]) {
      return cache[key];
    }

    let result = fn(a, b);
    cache[key] = result;

    return result;
  };
}

// Prototypal Inheritance in JavaScript
// Task 1: Create Inheritance Using Prototypes

// Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()

function Animal() {}

Animal.prototype.makeSound = function () {
  console.log("Animal makes a sound");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log("Dog barks");
};

const dog = new Dog();

dog.makeSound();
dog.bark();

// Task 2: Shape and Rectangle Inheritance

// Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.

// Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle.

function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {
  return this.color;
};

function Rectangle(color, width, height) {
  Shape.call(this, color);

  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const rectangle = new Rectangle("Red", 10, 5);

console.log(rectangle.getColor());
console.log(rectangle.getArea());

// THIS and Binding Context
// Task 1: Bind the Correct Context

// Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.
const person = {
  name: "Souharda",

  introduce: function () {
    console.log("My name is " + this.name);
  },
};

const introducePerson = person.introduce.bind(person);

introducePerson();

// Task 2: Using call() to Invoke a Function with Different Contexts

// Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.

function introduce() {
  console.log("My name is " + this.name);
}

const person1 = {
  name: "Souharda",
};

const person2 = {
  name: "Ram",
};

introduce.call(person1);
introduce.call(person2);

// Task 3: Using apply() to Pass Arguments with Context

// Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.

function sum(a, b) {
  return (a + b) * this.multiplier;
}

const obj1 = {
  multiplier: 2,
};

const obj2 = {
  multiplier: 3,
};

console.log(sum.apply(obj1, [10, 5]));
console.log(sum.apply(obj2, [10, 5]));

// Async-Await and Promise.all
// Task 1: Async-Await with Promise.all

// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

// Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);

  console.log(user);
  console.log(posts);
}

fetchAllData();

// Task 2: Error Handling in Async/Await with Promise.all

// Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

// Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.
function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });
}

function fetchFailure() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Something went wrong!");
    }, 1000);
  });
}

async function handlePromises() {
  try {
    const results = await Promise.all([fetchSuccess(), fetchFailure()]);

    console.log(results);
  } catch (error) {
    console.log("Error:", error);
  }
}

handlePromises();

// Task 3: Timeout with Async/Await and Promise.race

// Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".

async function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout exceeded");
    }, timeout);
  });

  return await Promise.race([promise, timeoutPromise]);
}

// Task 1: Simple Generator
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// Task 2: Custom Iterator
function rangeIterator(start, end) {
  let current = start;

  return {
    next() {
      if (current <= end) {
        return {
          value: current++,
          done: false,
        };
      }

      return {
        value: undefined,
        done: true,
      };
    },
  };
}

const iterator = rangeIterator(1, 5);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Task 3: Fibonacci Generator
function* fibonacciGenerator() {
  let a = 1;
  let b = 1;

  while (true) {
    yield a;

    let next = a + b;
    a = b;
    b = next;
  }
}

const fibonacci = fibonacciGenerator();

console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
