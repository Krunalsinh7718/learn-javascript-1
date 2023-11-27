
// 1) getter and setter on classes

// class User{
//     constructor(name, email, password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     get password(){
//         return this._password.toUpperCase();
//     }
//     set password(value){
//         this._password = value;
//     }
// }

// const user1 = new User("Vijay", "vij@gmail.com", "abc23abc");
// console.log(user1.password);


// 2) getter and setter on constructor function

// function Student(id, name, standard){
//     this._id = id;
//     this._name = name;
//     this._standard = standard;

//     Object.defineProperty(this, "name",{
//         get : function () {
//             return this._name.toUpperCase();
//         },
//         set : function (value) {
//             this._name = value;
//         }
//     })
// }

// const student1 = new Student(12, "Sanjay", 5);
// console.log(student1.name);

// 3) getter and setter on objects

const teacher = {
    _name : "Rajesh",
    _email : "abc@xyz.com",
    _subject: "maths",
   
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    }
}

console.log(teacher.email);