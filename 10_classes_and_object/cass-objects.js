
// 1) constructor function ############################################################
function User(name, age, loggedIn){
    this.name = name;
    this.age = age;
    this.loggedIn = loggedIn;
    this.greeting = function () {
        console.log(`Hello ${this.name}.`);
    }
    return this;
}

//[Ex.1] -------------------
const user1 = User("Sanjay",18,true);
const user2 = User("Vijay",30,false);

// console.log("user1 => ","name: "+ user1.name," Age : "+ user1.age," Login : "+ user1.loggedIn);
//output : user1 =>  name: Vijay  Age : 30  Login : false
// console.log("user2 => ","name: "+ user2.name," Age : "+ user2.age," Login : "+ user2.loggedIn);
//output : user2 =>  name: Vijay  Age : 30  Login : false

//in above example we have same output even we have pass different arguments for different user
//we should note that the function variable overwrite with latest value given

//[Ex.2] -------------------

const user3 = new User("Rajesh",21,false);
const user4 = new User("Suresh",32,true);

console.log("user3 => ","name: "+ user3.name," Age : "+ user3.age," Login : "+ user3.loggedIn);
//output : user3 =>  name: Rajesh  Age : 21  Login : false
console.log("user4 => ","name: "+ user4.name," Age : "+ user4.age," Login : "+ user4.loggedIn);
//output : user4 =>  name: Suresh  Age : 32  Login : true

// in above example we have different output because we have assign constructor function with the "new" keyword
// In javascript "new" keyword creates a unique instance of the prototype for us. 

// On calling the constructor function with ‘new’ operator, the following actions are taken:

// 1) The new keyword first creates a new empty object.

// 2) Then, it binds the newly created object to the prototype of the constructing function.

// 3) The "new" keyword in JavaScript takes care of the "this" keyword. 
// We know that whenever there is a regular call of a function, 
// the "this" keyword always points towards the global scope to find its value. 
// Using the "new" keyword shifts the focus from global scope to the inside of this newly created object, 
// the "new" keyword in JavaScript binds the data variables and data functions defined inside the constructing function.

// 4) Finally, it returns the newly created object.


// 2) instanceof ############################################################
//The Left Hand Side (LHS) operand is the actual object being tested to the Right Hand Side (RHS) 
//operand which is the actual constructor of a class. The basic definition is:

//Checks the current object and returns true if the object is of the specified object type.

// var color1 = new String("green");
// color1 instanceof String; // returns true
// var color2 = "coral"; //no type specified
// color2 instanceof String; // returns false (color2 is not a String object)

// var p = new User("Jon",22,false);
// p instanceof User
// That is p instanceof User is true since p inherits from User.prototype.