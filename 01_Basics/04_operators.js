// --------------------------------------------------
// --------------Arthematic operatiors---------------
// --------------------------------------------------

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

// --------------------------------------------------
// -------------- Comparison Operators --------------
// --------------------------------------------------

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

// 1. STRING → NUMBER
// "2" is converted to the number 2.
// 2 > 1 → true

console.log("2" > 1); // true

// 2. STRING → NUMBER
// "02" is converted to the number 2.
// 2 > 1 → true

console.log("02" > 1); // true

// 3. NULL → NUMBER
// For the > comparison, null is converted to 0.
// 0 > 0 → false

console.log(null > 0); // false

// 4. NULL → NUMBER
// == has a special rule for null.
// null is only loosely equal to null or undefined.
// null == 0 → false

console.log(null == 0); // false
// == with null
// null == undefined  // true
// null == 0          // false
// null == ""         // false
// null == false      // false

// Relational comparison
// null >= 0          // true → null becomes 0
// null > 0           // false → null becomes 0

// 5. NULL → NUMBER
// For >=, null is converted to 0.
// 0 >= 0 → true

console.log(null >= 0); // true

// --------------------------------------------------

// 1. LOOSE EQUALITY (==)
// Compares only the value.
// JavaScript converts the types if necessary.
// "1" → 1, so both values are equal.

console.log("1" == 1); // true


// 2. STRICT EQUALITY (===)
// Compares both the value AND the data type.
// "1" is a String and 1 is a Number.
// Different types → false.

console.log("1" === 1); // false

// --------------------------------------------------