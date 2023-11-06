// 1) how to declare Object ############################################################

const obj1 = {1 : 'a'}; // non Singleton object, literal object 
const obj2 = new Object(); // Singleton object
obj2["1"] = 'a';
console.log(obj1, obj2);
//output =>  {1 : 'a'}  {1 : 'a'}
