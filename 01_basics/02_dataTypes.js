"use strict"; // treat all JS code as newer version

// ============================================================
// PRIMITIVE DATA TYPES
// ============================================================
// Primitive values are simple/basic values.
// They store a single value.
// They are immutable (the original value cannot be changed).


// 1. STRING
let userName = "Ikhlas";

// 2. NUMBER
let age = 25;

// 3. BOOLEAN
let isLoggedIn = true;

// 4. UNDEFINED
// A variable that has been declared but has no value.

let userEmail;

// 5. NULL
// Represents an intentional empty value. type of = object

let userAddress = null;

// 6. BIGINT
// Used for very large integer numbers.

let bigNumber = 12345678901234567890n;

// 7. SYMBOL
// Creates a unique value.

let id = Symbol("id");

// ============================================================
// NON-PRIMITIVE DATA TYPES (Reference)
// ============================================================
// Non-primitive values are more complex data structures.
// They can contain multiple values.
// Objects, arrays, and functions are reference types.


// 1. OBJECT
// Stores data using key-value pairs.

let student = {
    name: "Ikhlas",
    age: 25
};

console.log(student);
console.log(typeof student); // object

// 2. ARRAY
// Stores multiple values in an ordered collection.

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(typeof fruits); // object

// 3. FUNCTION
// A block of code that can be called/executed.

function greet() {
    console.log("Hello");
}

greet();

console.log(typeof greet); // function

// ============================================================