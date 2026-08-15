// ============================================================
// 1. STRING → NUMBER
// ============================================================

let numericString = "24";

console.log("\n--- String → Number ---");
console.log("Before:", numericString, "| Type:", typeof numericString);

let convertedNumber = Number(numericString);

console.log("After:", convertedNumber, "| Type:", typeof convertedNumber);

// ============================================================
// 2. INVALID STRING → NUMBER
// ============================================================

// "24IK" contains letters, so it cannot be converted to a number.
// Number() returns NaN (Not a Number).

let invalidNumericString = "24IK";

console.log("\n--- Invalid String → Number ---");
console.log("Before:", invalidNumericString, "| Type:", typeof invalidNumericString);

let convertedInvalidNumber = Number(invalidNumericString);

console.log("After:", convertedInvalidNumber, "| Type:", typeof convertedInvalidNumber);

// ============================================================
// 3. BOOLEAN → NUMBER
// ============================================================

// true → 1
// false → 0

let booleanForNumber = true;

console.log("\n--- Boolean → Number ---");
console.log("Before:", booleanForNumber, "| Type:", typeof booleanForNumber);

let convertedBooleanNumber = Number(booleanForNumber);

console.log("After:", convertedBooleanNumber, "| Type:", typeof convertedBooleanNumber);

// ============================================================
// 4. NUMBER → BOOLEAN
// ============================================================

// 0 → false

let zeroValue = 0;
let booleanFromZero = Boolean(zeroValue);

console.log("\n--- Number 0 → Boolean ---");
console.log("Before:", zeroValue, "| Type:", typeof zeroValue);
console.log("After:", booleanFromZero, "| Type:", typeof booleanFromZero);

// Any non-zero number → true

let nonZeroNumber = 1;
let booleanFromNonZero = Boolean(nonZeroNumber);

console.log("\n--- Number 1 → Boolean ---");
console.log("Before:", nonZeroNumber, "| Type:", typeof nonZeroNumber);
console.log("After:", booleanFromNonZero, "| Type:", typeof booleanFromNonZero);

// ============================================================
// 5. STRING → BOOLEAN
// ============================================================

// Any non-empty string → true

let nonEmptyString = "ABC";
let booleanFromNonEmptyString = Boolean(nonEmptyString);

console.log("\n--- Non-empty String → Boolean ---");
console.log("Before:", nonEmptyString, "| Type:", typeof nonEmptyString);
console.log("After:", booleanFromNonEmptyString, "| Type:", typeof booleanFromNonEmptyString);

// Empty string "" → false

let emptyString = "";
let booleanFromEmptyString = Boolean(emptyString);

console.log("\n--- Empty String → Boolean ---");
console.log("Before:", emptyString, "| Type:", typeof emptyString);
console.log("After:", booleanFromEmptyString, "| Type:", typeof booleanFromEmptyString);

// ============================================================
// 6. NUMBER → STRING
// ============================================================

let numberValueForString = 24;

console.log("\n--- Number → String ---");
console.log("Before:", numberValueForString, "| Type:", typeof numberValueForString);

let convertedNumberString = String(numberValueForString);

console.log("After:", convertedNumberString, "| Type:", typeof convertedNumberString);

// ============================================================
// 7. BOOLEAN → STRING
// ============================================================

let booleanForString = true;

console.log("\n--- Boolean → String ---");
console.log("Before:", booleanForString, "| Type:", typeof booleanForString);

let convertedBooleanString = String(booleanForString);

console.log("After:", convertedBooleanString, "| Type:", typeof convertedBooleanString);

// ============================================================
// 8. NULL → NUMBER
// ============================================================

// null → 0

let nullForNumber = null;

console.log("\n--- Null → Number ---");
console.log("Before:", nullForNumber, "| Type:", typeof nullForNumber);

let convertedNullNumber = Number(nullForNumber);

console.log("After:", convertedNullNumber, "| Type:", typeof convertedNullNumber);

// ============================================================
// 9. UNDEFINED → NUMBER
// ============================================================

// undefined → NaN

let undefinedForNumber = undefined;

console.log("\n--- Undefined → Number ---");
console.log("Before:", undefinedForNumber, "| Type:", typeof undefinedForNumber);

let convertedUndefinedNumber = Number(undefinedForNumber);

console.log("After:", convertedUndefinedNumber, "| Type:", typeof convertedUndefinedNumber);

// ============================================================
// 10. NULL → BOOLEAN
// ============================================================

// null → false

let nullForBoolean = null;

console.log("\n--- Null → Boolean ---");
console.log("Before:", nullForBoolean, "| Type:", typeof nullForBoolean);

let convertedNullBoolean = Boolean(nullForBoolean);

console.log("After:", convertedNullBoolean, "| Type:", typeof convertedNullBoolean);

// ============================================================
// 11. UNDEFINED → BOOLEAN
// ============================================================

// undefined → false

let undefinedForBoolean = undefined;

console.log("\n--- Undefined → Boolean ---");
console.log("Before:", undefinedForBoolean, "| Type:", typeof undefinedForBoolean);

let convertedUndefinedBoolean = Boolean(undefinedForBoolean);

console.log("After:", convertedUndefinedBoolean, "| Type:", typeof convertedUndefinedBoolean);

// ============================================================
// 12. NULL → STRING
// ============================================================

// null → "null"

let nullForString = null;

console.log("\n--- Null → String ---");
console.log("Before:", nullForString, "| Type:", typeof nullForString);

let convertedNullString = String(nullForString);

console.log("After:", convertedNullString, "| Type:", typeof convertedNullString);

// ============================================================
// 13. UNDEFINED → STRING
// ============================================================

// undefined → "undefined"

let undefinedForString = undefined;

console.log("\n--- Undefined → String ---");
console.log("Before:", undefinedForString, "| Type:", typeof undefinedForString);

let convertedUndefinedString = String(undefinedForString);

console.log("After:", convertedUndefinedString, "| Type:", typeof convertedUndefinedString)



