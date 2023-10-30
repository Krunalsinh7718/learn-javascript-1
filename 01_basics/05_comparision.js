// console.log("2" > 1); // true (data type conversion "2" -> 2)
// console.log("0" > 1); // false (data type conversion "0" -> 0)

// console.log(null == 0); // false 
// console.log(null === 0); // false 
// console.log(null <= 0); // true 
// console.log(null >= 0); // true 
// console.log(null > 0); // false 

// console.log(undefined == 0); // false 
// console.log(undefined === 0); // false 
// console.log(undefined <= 0); // false 
// console.log(undefined >= 0); // false 
// console.log(undefined > 0); // false 

// console.log(2 == "2"); // true (data type conversion "2" -> 2)
// console.log(2 === "2"); // false (also check data type)

// console.log(true == 1); // true (data type conversion,, true -> 1)
// console.log(true === 1); // false (data type conversion,, true -> 1 but also type check which is not same)
// console.log(true > 0); // true (data type conversion,, true -> 1)
// console.log(false == 0); // true (data type conversion,, false -> 0)
// console.log(false < 1); // true (data type conversion,, false -> 0)

let a = Symbol('123');
let b = Symbol('123');
console.log(a === b); //false