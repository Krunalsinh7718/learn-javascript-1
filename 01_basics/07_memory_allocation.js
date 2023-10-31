//------------premitive data type (pass by value)
let apple = "apple";
let fruit = apple;
apple = "red apple";
console.table([apple, fruit]);

//------------pass by reference (pass by reference)
let car = {
    type: "sports",
    color: "red"
}

let vehicle = car;
car.type = "suv";
console.table([car, vehicle]);

let toys = ['aeroplane', 'horse', 'monkey', 'blocks', 'cars'];
let toy1 = toys;
toys[0] = 'cactus';
console.table([toys, toy1]);

function sum2(val1, val2){return  val1 + val2}
function sum3(val1, val2, val3) {return val1 + val2 + val3} 
let sum = sum2;
let addFun = sum;
sum = sum3;
console.log(sum.toString());
console.log(addFun.toString());
//output
//function sum3(val1, val2, val3) {return val1 + val2 + val3}
//function sum2(val1, val2){return  val1 + val2}