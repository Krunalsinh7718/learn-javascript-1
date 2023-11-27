//The call() method calls a function by passing "this" and specified values as arguments.
//The call() method can refer "this" to any object.

function setUserName(name) {
    this.username = name;
}

function createUser(username, id ,pass) {
    // setUserName(username)
    setUserName.call(this, username);
    this.id = id;
    this.pass = pass;
}

const user1 = new createUser("Suresh", 1245, "abx123478");
console.log(user1);