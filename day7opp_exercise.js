//Prototypes in JavaScript
// Task: Prototype Chaining

// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

// Then create another constructor Dog that inherits from Animal using prototypes.

// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

// Parent constructor
function Animal() {}

// Add a method to Animal's prototype
Animal.prototype.speak = function () {
  return "Animal speaking";
};

// Child constructor
function Dog() {}

// Make Dog inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

// Fix the constructor reference
Dog.prototype.constructor = Dog;

// Add a method to Dog's prototype
Dog.prototype.bark = function () {
  return "Woof!";
};

// Create a Dog object
let dog = new Dog();

// Test the methods
console.log(dog.bark());
console.log(dog.speak());

// Functional Constructor and Errors
// Task 1: Create a Functional Constructor

// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

let person1 = new Person("John", 25);

console.log(person1.greet());

//Task 2: Handle Errors

// Modify the Person constructor to throw an error if the age is not a positive number.

function Person(name, age) {
  if (typeof age !== "number" || age <= 0) {
    throw new Error("Age must be a positive number");
  }

  this.name = name;
  this.age = age;

  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

//Classes, Objects, and Inheritance
// Task 1: Class Inheritance

// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }
}

let car = new Car("Toyota", "Corolla");

console.log(car.getDetails());
console.log(car.startEngine());

//Task 2: Method Overriding in Inheritance

// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }

  move() {
    return "The vehicle is moving";
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }

  // Override Vehicle's move() method
  move() {
    return "The car is driving";
  }
}

let car = new Car("Toyota", "Corolla");

console.log(car.getDetails());
console.log(car.startEngine());
console.log(car.move());

// Task 3: Static Methods in Classes

// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }

  move() {
    return "The vehicle is moving";
  }

  // Static method
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }

  move() {
    return "The car is driving";
  }
}

let car = new Car("Toyota", "Corolla");
let vehicle = new Vehicle("Honda", "Civic");
let person = {};

console.log(Vehicle.isVehicle(car));
console.log(Vehicle.isVehicle(vehicle));
console.log(Vehicle.isVehicle(person));

//Encapsulation, Polymorphism, Abstraction, and Getters/Setters
// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  withdraw(amount) {
    if (this.balance - amount >= 0) {
      this.balance = this.balance - amount;
    } else {
      console.log("Insufficient balance");
    }
  }

  // Getter
  get balance() {
    return this._balance;
  }

  // Setter
  set balance(amount) {
    if (amount >= 0) {
      this._balance = amount;
    }
  }
}

let account = new BankAccount(100);

//Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

let circle = new Circle(5);
let rectangle = new Rectangle(10, 4);

console.log(circle.area());
console.log(rectangle.area());
