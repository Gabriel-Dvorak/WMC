// --- Section 1: Array / Object Spreading ---


// E1: Create a new array that includes all existing animals
// plus "🐹" at the end, without mutating the original.

const animals = ["🐶", "🐱", "🐭"];

const allExistingAnimals = [...animals, "🐹"];
console.log(allExistingAnimals);


// E2: Create a new array that includes all existing colors
// plus "yellow" at the beginning, without mutating the original.

const colors = ["red", "green", "blue"];

const allExistingColors = ["yellow", ...colors];
console.log(allExistingColors);


// E3: Create a new object with all the same properties
// but an additional property role: "student".

const person = {
    name: "Agnes",
    age: 18
};

// Neues Objekt mit allen alten Eigenschaften + neuer Property
const student = {
    ...person,
    role: "student"
};

console.log(student);


// E4: Create a new object with all the same properties
// but update the age to 23.

const user = { name: "Max", age: 22 };

const user2 = { ...user, age: 23 };
console.log(user2);


// --- Section 2: Array.map() and Array.filter() ---

// E5: Filter out only the even numbers in:
// 1. Imperative version
// 2. Declarative version

const numbers = [2, 7, 8, 3, 10];

// Iterativ
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {  // prüft gerade Zahl
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);
// Declarative
const evenNumbers2 = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers2);


// E6: Increase every student’s grade by 1 point in:
// 1. Imperative version
// 2. Declarative version

const students = [
    { name: "Anna", grade: 3 },
    { name: "Ben", grade: 5 },
    { name: "Cara", grade: 4 },
];

const imperativIncrease = [];

for (let i = 0; i < students.length; i++) {
    const updatedStudent = { ...students[i], grade: students[i].grade + 1 };
    imperativIncrease.push(updatedStudent);
}
console.log(imperativIncrease);

const declarativeIncrease = students.map(student => ({
    ...student,
    grade: student.grade + 1
}));

console.log(declarativeIncrease);


// E7: Create a new array containing only expensive cars (price > 20000),
// but with their prices increased by 10%.

// 1. Imperative version
// 2. Declarative version

const cars = [
    { brand: "BMW", price: 40000 },
    { brand: "Fiat", price: 12000 },
    { brand: "Tesla", price: 60000 },
];

const newCars = [];
for (let car of cars) {
    if (car.price > 20000) {
        const newC = {...car, price: car.price * 1.10};
        newCars.push(newC);
    }
}
console.log(newCars);

const newCarsD = cars.filter(car => car.price > 20000).map(car => ({...car, price: car.price * 1.10}));
console.log(newCarsD);

// E8: Create a new array where each object has an added property:
// - isAvailable: true

const books = [
    { title: "1984", author: "Orwell" },
    { title: "Dune", author: "Herbert" },
];

const newBooks = books.map(book => ({...book, isAvailable: true}))
console.log(newBooks);


// E9: Create a new array that:
// - Filters out products cheaper than 30.
// - Increases remaining prices by 15%.
// - Adds a new property { inStock: true } to each object.
// 1. Imperative version
// 2. Declarative version

const products = [
    { name: "Keyboard", price: 40 },
    { name: "Mouse", price: 20 },
    { name: "Monitor", price: 200 },
];

const filterP = [];

for (let product of products) {
    if (product.price >= 30) {
        filterP.push(product);
    }
}
const newProducts = filterP.map(filterP => ({...filterP, price: filterP.price * 1.15, inStock: true}));
console.log(newProducts);

const newProductsD = products.filter(product => product.price >=30).map(product => ({...product, price: product.price * 1.15, isAvailable: true}));
console.log(newProductsD);