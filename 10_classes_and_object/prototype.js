//javascript have prototypal behavior
//every thing in javascript directly or in directly object

 

//[Ex.1] -------------------
//in this example function behave like object
//so under the hood it is object

// function MultiplyBy5(val) {
//     return val * 5;
// }
// MultiplyBy5.defaultval = 10;

// console.log(MultiplyBy5);
//output : [Function: MultiplyBy5] { defaultval: 10 }


//[Ex.2] -------------------
function createUser(username, score){
    this.username = username
    this.score = score

    return this;
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
chai.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 

This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 

If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, 

to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, 
    
function, etc.), the newly created object is returned.

*/