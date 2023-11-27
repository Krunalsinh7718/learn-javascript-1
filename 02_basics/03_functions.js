// 1) how to declare function ############################################################

//----> a) using function syntax (function declaration)
// function addNumbers( num1 , num2){
//     if(!num1 || !num2 || typeof num1 !== 'number' || typeof num2 !== 'number'){
//         console.log("Please enter valid number.");
//         return;
//     }
//     return num1 + num2;
// }
// console.log( addNumbers( 10, 2 ) );
//output => 20

//JavaScript doesn’t have a function data type but when we find the data type of a function using the typeof operator, 
//we find that it returns a function. This is because a function is an object in JavaScript. 
//Ideally the data type of a function should return an object but instead, it returns a function. 
//This is an error in JavaScript.

//we can return any valid data type using return statement
//any statement after return statement will not executed
//function name without brackets simply passes function reference.
//function name with brackets calls function

//----> b) using function expression
//we can store functions in variables
//The function keyword can be used to define a function inside an expression.
//The function name. Can be omitted, in this case the function is anonymous.

// const sum = function(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(true, true));
//output => 1

// const userInfo = {
//     name : "Krunalsinh",
//     surname : "Vaghela",
//     welcomeMessage : function() {
//         console.log(`Welcome ${this.name} ${this.surname}.`);
//     }
// }

// console.log(userInfo.welcomeMessage());
//output => Welcome krunalsinh vaghela.

//function expression is not hoisted

//Example 1) ``````````````````````````````
// abc();
// function abc(){
//     console.log("hello abc,,," , abcVarible);

//     var abcVarible = function () {
//         return "abc varible"
//     }
// }
//In above example we can call function before declaration 

//Example 2) ``````````````````````````````
//xyz();
// const xyz = function(){
//     console.log("hello xyz");
// }
//In above example we can not call function before declaration

//----> c) using Arrow function expressions
//we can write function shorter way
//Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
//Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. 
//They also don't have access to the new.target keyword.

// const sumNum = (num1 , num2) => num1 + num2;
// console.log(sumNum(1 , 2));
//output : 3


//if single parameter is there we can omit parentheses
// const getCalcVal = rowVal => rowVal * rowVal - 5;
// console.log(getCalcVal(5));
//output 20

// const getUserInfo = () =>  ({name : "Krunalsinh"});
// console.log(getUserInfo());
//output : { name: 'Krunalsinh' }
//to return object we need scope. parentheses create block scope for us


//----> d) using immediately invoked function expression (IIFE)
//An immediately invoked function expression, or IIFE (pronounced iffy), 
//is a function that is called immediately after it is defined.
// to call function immediately and avoid global pollution we can use IIFE
(function message(){
    console.log("hello world");
})();
//above function called named IIFE

(function(){
    console.log("hello javascript");
})();
//output : hello javascript

( name => console.log(`hello ${name}`))('javascript');
//output : hello javascript




// 2) default parameter ############################################################
//Default function parameters allow named parameters to be initialized with default values 
//if no value or undefined is passed.

// function calcDataAmt( num1 = 1 , num2 = 2){
//     return num1 + num2;
// }
// console.log( calcDataAmt() );
//output => 3


// 3) parameter using rest operator ############################################################
//rest operator convert parameters to array

// function dataTest(parm1, parm2, ...parmOther){
//     console.log("parm1 => ",parm1," parm2 => ",parm2);
//     console.log("parmOther => ",parmOther);
// }
// dataTest(10,20,30,40,50,60,70,80);

//output => 
//parm1 =>  10  parm2 =>  20
//parmOther =>  [ 30, 40, 50, 60, 70, 80 ]