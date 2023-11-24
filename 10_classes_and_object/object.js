//we can inject nay method to any objects prototype

// challenge 1) inject function for all string which return true length of string ###################################

String.prototype.truelength = function () {
    return this.trim().length;
}

// console.log( "abc   ".truelength());
//output : 3


// in above function we have inject truelength function in String main object
// so all string get access of truelength() function


// challenge 2) give access of property and method of one object to another object ###################################
const studentLevel = {
    level: "beginner"
}
const studentSupport ={
    support : "online",
    __proto__: studentLevel
}
const studentPractice = {
    practice : "offline",
    __proto__: studentSupport
}
const student = {
    name: "krunal",
    // __proto__: studentPractice
}
// console.log("student support : ", student.support);
// console.log("student practice : ", student.practice);
// console.log("student level : ", student.level);

//a) -----> we can also link externally using ".__proto__" 
// student.__proto__ = studentPractice;
// console.log("student support : ", student.support);
// console.log("student practice : ", student.practice);
// console.log("student level : ", student.level);



//b) -----> we can also link externally using Object.setPrototypeOf method 

// (method) ObjectConstructor.setPrototypeOf(o: any, proto: object | null): any
// Sets the prototype of a specified object o to object proto or null. Returns the object o.

// @param o — The object to change its prototype.
// @param proto — The value of the new prototype or null.

const newstudent = Object.setPrototypeOf(student, studentPractice )
console.log("student name : ", newstudent.name);
console.log("student practice : ", newstudent.practice);
console.log("student level : ", newstudent.support);

//we can either link internally using "__proto__:" or externally or Object.setPrototypeOf function

//above code is example of prototypal inheritance

