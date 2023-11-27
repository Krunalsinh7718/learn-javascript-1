// Example 1) ############################################################
if(true){
    const a = "a";
    let b = "b";
    var c = "c";
}

console.log(a);
console.log(b);
console.log(c);

//in above example variable "c" is only accessible because it's declare with "var" keyword
//let and const variables accessible in block scope

//Example 2) ############################################################

/* this is global scope */
var d = 200;
let e = 300;
const f = 400;

if(true){
    /* this is block scope */
    var d = 500;
    let e = 600;
    const f = 700;

    console.log("inner d => ",d,"inner e => ",e, "inner f => ", f);
}

console.log("outer d => ",d,"outer e => ",e, "outer f => ", f);

//output =>  d =>  500  e =>  300
//In above example variable declare with "var", It has scope issues
//whereas  variable declare with "let" and "const" has not
//that is why now a days people avoid using "var"