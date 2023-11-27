//1) if statement  ############################################################

// if(true){
//     console.log("true called");
// }

//implicit scope
// let amount = 5000;

// if(amount  > 4000) console.log("amount is grater then 4000"), console.log("add required amount");
//we can add multiple line using by comma but we should avoid write multiline using comma because it is not easy readable code.


// 2) else if ladder  ############################################################

// if('a' === 'b'){
//     console.log("a === b");
// }else if('b' === 'c'){
//     console.log("b === c");
// }else{
//     console.log("final else block called.");
// }

// 3) switch ############################################################

// const month = 'jan';

// switch(month){
//     case 'jan':
//         console.log(`current month ${month}`);
//     break;
//     case 'feb':
//         console.log(`current month ${month}`);
//     break;
//     case 'mar':
//         console.log(`current month ${month}`);
//     break;
//     case 'apr':
//         console.log(`current month ${month}`);
//     break;
//     case 'may':
//         console.log(`current month ${month}`);
//     break;
//     case 'jun':
//         console.log(`current month ${month}`);
//     break;
//     case 'jul':
//         console.log(`current month ${month}`);
//     break;
//     case 'aug':
//         console.log(`current month ${month}`);
//     break;
//     case 'sep':
//         console.log(`current month ${month}`);
//     break;
//     case 'oct':
//         console.log(`current month ${month}`);
//     break;
//     case 'nov':
//         console.log(`current month ${month}`);
//     break;
//     case 'dec':
//         console.log(`current month ${month}`);
//     break;
//     default :
//         console.log(`Please enter valid month.`);
//     break;
// }

// 4) comparison operator ############################################################

//  >, <, >=, <=, ==, ===, !=, !==, 


// 5) logical operator ############################################################

// if('a' === 'a' && 0 === false) {
//     console.log("condition pass.");
// }

// if('a' === 'a' ||  1 === false) {
//     console.log("condition pass.");
// }

// if('a' !== 'a' ) {
//     console.log("condition pass.");
// }


// 6) The Nullish Coalescing Operator (??) ############################################################
// let name = undefined;
// let text = null;
// let text1 = 10;
// let text2 = 20;
// let result = name ?? text ?? text1 ?? text2;
// console.log(result);

// 7) Ternary operator ############################################################

// 'a' === 'b' ? console.log("a === b") : console.log("a !== b");


// 8) truthy and falsy values ############################################################

//falsy value
// 0, -0, "", undefined, null, false, Bigint 0n, NaN

//truthy value
// {}, [], " ", "false", "undefined", function(){}

//check for empty array
// let arr1 = [];

// if(arr1.length === 0){
//     console.log("array is empty");
// }

// let obj1 = {};

// if(Object.keys(obj1).length === 0){
//     console.log("object is empty");
// }

