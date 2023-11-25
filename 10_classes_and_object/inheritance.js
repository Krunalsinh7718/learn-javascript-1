//[Ex.1] ##################################################

class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`User name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`The course was added by ${this.username}`);
    }
}

const chai = new Teacher("krunalsinh", "kaabc@xyz.com", "123Abc123");
chai.logMe();

/*````````````````````````````````````````````````````````````````````````````````
// we can inherit class using "extends" keyword 
// and must have to call super constructor in derived class's constructor at top  
.................................................................................*/

// const masalaChai = new User("masalachai");
// masalaChai.logMe();

// console.log(chai instanceof User);
/*````````````````````````````````````````````````````````````````````````````````
// using instanceof method we can check the specified object 
// derived from specified class or not.
.................................................................................*/

//[Ex.2] ##################################################

class Person{
    constructor(username, id){
        this.username = username;
        this.id = id;
    }

    logMe(){
        console.log(`User name is ${this.username}. And unique ID is ${this.id}.`);
    }

    static compareId(person1, person2){
        return person1.id === person2.id;
    }
}


const hitesh = new Person("Hitesh", "1234");
const rajesh = new Person("Rajesh", "1234");

console.log(Person.compareId(hitesh,rajesh));