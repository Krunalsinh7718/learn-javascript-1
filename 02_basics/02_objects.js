// 1) how to declare Object ############################################################

// const obj1 = {1 : 'a'}; // non Singleton object, literal object 
// const obj2 = new Object(); // Singleton object
// obj2["1"] = 'a';
// console.log(obj1, obj2);
//output =>  {1 : 'a'}  {1 : 'a'}

//2) get properties from array  ############################################################
const sym1 = Symbol("1");

const obj3 = {1 : "a", "name_2": "b", "3 1": "c" , true: "d", [sym1] : "e"};
// //----> a) using dot 
// console.log("obj3.name_2 => ",obj3.name_2);
// //output obj3.name_2 => b
// console.log("obj3.true => ",obj3.true);
// //output obj3.true => d

//----> b) using square brackets 

// console.log('obj3["1"] => ',obj3["1"]);
// //output =>  obj3["1"] => a

// console.log('obj3["3 1"] => ',obj3["3 1"]);
// //output =>  obj3["3 1"] => c

// console.log('obj3[sym1] => ',obj3[sym1]);
// //output =>  obj3["sym1"] => d

/* * * * * 
Note: 
when key is number, string with space or symbol. we can only access properties with square brackets.
* * * * */

//3) set array properties  ############################################################

//----> a) using dot 
// obj3.name_2 = "banana";
// console.log("obj3.name_2 => ",obj3.name_2);
// //output obj3.name_2 => banana
// obj3.true = "Dragon Fruit";
// console.log("obj3.true => ",obj3.true);
// //output obj3.true => Dragon Fruit

//----> b) using square brackets 
// obj3["1"] = "apple";
// console.log('obj3["1"] => ',obj3["1"]);
// //output =>  obj3["1"] => b

// obj3["3 1"] = "cherry";
// console.log('obj3["3 1"] => ',obj3["3 1"]);
// //output =>  obj3["3 1"] => cherry

// obj3[sym1] = "elderberry"
// console.log('obj3[sym1] => ',obj3[sym1]);
// //output =>  obj3["sym1"] => elderberry

//4) merge objects  ############################################################

//----> a) using spread operator
const obj4 = {a : "1", b : "2", c : "3"}; 
const obj5 = {d : "4", e : "5", f : "6"}; 

const obj6 = {...obj4, ...obj5};
console.log("obj6 => " , obj6);
//output =>  obj6 =>  { a: '1', b: '2', c: '3' } 

//----> b) Object.assign
console.log(Object.assign({}, obj4, obj5));
