//  1. Implicit Typecasting (Type Coercion)

console.log("5" + 2); // "52" -> Number 2 is coerced to string and concatenated
console.log("5" - 2); // 3 -> '5' is coerced to number
console.log(true + 1); // 2 -> true is coerced to 1

// 2. Explicit Typecasting (Manual Conversion)

// ✅ String Conversion

String(123); // "123"
(123).toString(); // "123"
true.toString(); // "true"

// ✅ Number Conversion

Number("123");       // 123
parseInt("123");     // 123
parseFloat("123.45"); // 123.45
+"123";              // 123 (Unary plus)

// ✅ Boolean Conversion

Boolean(1);          // true
Boolean(0);          // false
Boolean("");         // false
Boolean("hello");    // true
