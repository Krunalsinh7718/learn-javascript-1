const score = new Number(500000.1234);
const amount = new Number(1000000);
/* -------- numbers-------------- */

// console.log(score.toFixed(2)); // for set fixed point
// console.log(score.toString(), typeof score.toString()); // number to string conversion
// console.log(amount.toLocaleString('en-IN')) // convert number format to indian format

/* -------- Maths-------------- */
// console.log("PI", Math.PI); // get PI value 3.14159265368
// console.log("random", Math.random()); // returns random number
// console.log("minimum" ,Math.min(5,9,12,20)); // returns min value
// console.log("maximum", Math.max(5,9,12,20)); // returns max value
// console.log("absolute",Math.abs(-5)); // returns absolute value
// console.log("sine",Math.sin(5)); // take number as radiance angle and return sine value (-1 to 1)
// console.log("cosine",Math.cos(5)); // take number as radiance angle and return cosine value (-1 to 1)
// console.log("power",Math.pow(2,3)); // return power value,, param 2 is base value, and param 3 is exponent value 
// console.log("floor", Math.floor(25.51245)); // returns floor value
// console.log("round",Math.round(25.51245)); // returns round value
// console.log("ceil",Math.ceil(25.51245)); // returns ceil value
// console.log("truncate'",Math.trunc(25.12323)); // truncate floting part and return integer value
// console.log("square root √'",Math.sqrt(25)); // returns square root value

//get random number from given range
const min = 5;
const max = 17;
setInterval(() => console.log(Math.floor(Math.random() * (max - min + 1)) + min),2000);