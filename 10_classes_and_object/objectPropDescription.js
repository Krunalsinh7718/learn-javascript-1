Math.PI = 55;
console.log(Math.PI);
//we can not set value of Math.PI because in it's property description it's writable false

const piDescription = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(piDescription);
//we can check any property description with Object.getOwnPropertyDescriptor factory method

let defaultUser = {
    name : "mainUser",
    email : "abc@abc.com",
    password : "abc123xyz"
}

Object.defineProperty(defaultUser,"name",{
    configurable: false,
    writable: false,
    enumerable: false
})
//configurable
//the type of this property cannot be changed between data property and accessor property, and
//the property may not be deleted, and
// other attributes of its descriptor cannot be changed (however, if it's a data descriptor with writable: true, the value can be changed, and writable can be changed to false).

// Object.defineProperty(defaultUser,"name",{
//     writable: true
// })
// above code give error because we define configurable: false,


//writable
//if true the value associated with the property may be changed with an assignment operator. Defaults to false.

// defaultUser.name = "abc";
// console.log(defaultUser);

//we can not change name property because we set property writable: false

//enumerable
//true if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false.

for (let [key,value] of Object.entries(defaultUser)) {
    console.log(key, ": ", value);
}
//in above code we can not iterate name property because it's set enumerable: false