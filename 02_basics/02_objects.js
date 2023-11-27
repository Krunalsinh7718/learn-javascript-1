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
// console.log("obj3.true => ",obj3[sym1]);
// //output obj3.[sym1] => 3

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
// const obj4 = {a : "1", b : "2", c : "3"}; 
// const obj5 = {d : "4", e : "5", f : "6"}; 

// const obj6 = {...obj4, ...obj5};
// console.log("obj6 => " , obj6);
//output =>  obj6 =>  { a: '1', b: '2', c: '3', d : "4", e : "5", f : "6" } 

//----> b) Object.assign
//method copies all enumerable own properties from one or more source objects to a target object. 
//It returns the modified target object.

// console.log(Object.assign({}, obj4, obj5));

//output =>  { a: '1', b: '2', c: '3', d : "4", e : "5", f : "6" } 

//4)  septate properties from object (object destructuring)  ############################################################

//we can septate properties from object for some frequent uses

// const obj7a = {name : "Rajiv", surname : "Shah", gender: "male", age : 40, address: "loream ipsum" }
// const {name, age, address : location} = obj7a;

//It will extract name and age from obj7
//we can set alias name using colon sign (address : location)

// console.log("name => ", name, "age => ", age," location => ", location);

//output => name =>  Rajiv age =>  40  location =>  loream ipsum


//5) delete object property  ############################################################

//The delete operator deletes a property from an object:

//The delete operator is designed to be used on object properties. 

//after delete property when we try to access object it returns "undefined"

//It has no effect on variables or functions.

// const obj7 = {a : "apple", b : "banana", c : "charry" };

// delete obj7.c;

// console.log("obj7 => ",obj7);

//output obj7 => {a : "apple", b : "banana" }

/* * * * * 
Note: 
The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
* * * * */



//5)  object to array  ############################################################

// const obj8 = {a : "apple", b : "banana", c : "charry" };

//----> a) get object keys
// const obj8_keys = Object.keys(obj8);
// console.log("obj8_keys => ",obj8_keys); 
//output => obj8_keys => ['a', 'b', 'c']

//----> b) get object values
// const obj8_values = Object.values(obj8);
// console.log("obj8_values => ",obj8_values); 
//output => obj8_values =>  [ 'apple', 'banana', 'charry' ]

//----> c) get object property's key and value as array
// const obj8_entries = Object.entries(obj8);
// console.log("obj8_entries => ",obj8_entries); 
//output => obj8_entries =>  [ [ 'a', 'apple' ], [ 'b', 'banana' ], [ 'c', 'charry' ] ]

//5)  object methods  ############################################################
// const obj9 = {a : "apple", b : "banana", c : "charry" };

//----> a) hasOwnProperty()
//method returns a boolean indicating whether this object has the specified 
//property as its own property (as opposed to inheriting it).
// console.log("Is obj9 has 'd' property => ", obj9.hasOwnProperty('d'));
//output => Is obj9 has 'd' property =>  false



