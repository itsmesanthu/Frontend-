// ===============================
// 1. Object Literal
// ===============================

const person = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function () {
    return `Hello, I'm ${this.name}`;
  }
};

console.log(person.name);
console.log(person.greet());


// ===============================
// 2. Constructor Function
// ===============================

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const car1 = new Car("Toyota", "Camry");

console.log(car1.brand);


// ===============================
// 3. Object.create()
// ===============================

const proto = {
  speak: function () {
    return `${this.name} is speaking`;
  }
};

const animal = Object.create(proto);

animal.name = "Dog";

console.log(animal.speak());


// ===============================
// 4. Class Syntax (ES6)
// ===============================

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying`;
  }
}

const student = new Student("Alice", "A");

console.log(student.study());


// ===============================
// 5. Object Methods
// ===============================

const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


// ===============================
// 6. Product Object (Constructor)
// ===============================

function Product(name, price, stock, category, rating) {
  this.name = name;
  this.price = price;
  this.stock = stock;
  this.category = category;
  this.rating = rating;
}

let p1 = new Product(
  "iPhone",
  200000,
  true,
  "Electronics",
  4.5
);

console.log(p1.name);
console.log(p1);


// ===============================
// 7. CRUD Operation Example
// ===============================

let user = {
  name: "Raj",
  age: 21,
  resume: {
    skills: ["react", "html", "css", "js"],
    area: {
      temp: "mahatemp",
      perm: "bgk"
    }
  }
};

console.log(user);

// Update operation
user.resume.skills[0] = "python";

// Delete operation
delete user.age;

console.log(user);