// 1) how to declare function ############################################################
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