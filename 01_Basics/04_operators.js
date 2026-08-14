// --------------Arthematic operatiors--------------

// 1. NEGATION OPERATOR (-)
let val = 3;
let negVal = -val;

console.log(negVal);

// 2. ADDITION (+)
console.log(1+1);
console.log("Hi"+"Hello");
// 3. SUBTRACTION (-)
console.log(1-1);
// 4. DIVISION (/)
console.log(1/1);
// 4. DIVISION (/)
console.log(1*1);
// 6. MODULUS (%)
console.log(1%1);
// 7. EXPONENTIATION (**)
console.log(1**1);



// 1. String + Number → String
console.log("1" + 1); // "11"

// 2. String + Number + Number → String
// Evaluated from left to right
console.log("1" + 1 + 1); // "111"

// 3. Number + Number + String → String
// First 1 + 1 is calculated, then joined with "1"
console.log(1 + 1 + "1"); // "21"



// 1. UNARY PLUS (+)
// Converts a string containing a number into a Number.
let value0 = "5";

console.log(+value0); // 5


// 2. PREFIX INCREMENT (++)
// Increases the value by 1 first, then returns the new value.
let value1 = 5;

console.log(++value1); // 6


// 3. POSTFIX INCREMENT (++)
// Returns the current value first, then increases it by 1.
let value2 = 5;

console.log(value2++); // 5
console.log(value2);   // 6


// -------------- Comparison Operators -------------------------------------

// 1. GREATER THAN (>)
console.log(1 > 0); // true
// 2. LESS THAN (<)
console.log(1 < 0); // false
// 3. GREATER THAN OR EQUAL TO (>=)
console.log(1 >= 0); // true
// 4. LESS THAN OR EQUAL TO (<=)
console.log(1 <= 0); // false
// 5. EQUAL TO (==)
// Compares values and allows type conversion.
console.log(1 == 0); // false
// 6. NOT EQUAL TO (!=)
// Checks whether two values are different.
console.log(1 != 0); // true
