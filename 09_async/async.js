// 1) Javascript ############################################################

// --> synchronous 
// --> single threaded

// 2) Execution context ############################################################

// --> execute 1 line of code at a time
// --> each operation waits for last one to complete before executing


// 3) DOM API ############################################################

//a) ---> setTimeout() 
// setTimeout() execute function or code snippet once after given time with given value
// it has three parameters 1) function, 2) time, 3) value
// 1) function / code snippet :  It can be anonymous function , any function reference or code snippet
// 2) time : time will be in milliseconds. the function / code snippet will execute once after time passed.
// 3) value: you can pass avy value. which will become the functions default parameter

//[Ex. 1] ----------------
// setTimeout(
//     function(message) {
//         console.log("hello bro. "+ message);
//     },
//     3000,
//     "Have a great day."
// )

//[Ex. 2] ----------------
// setTimeout(() => console.log("world"), 0);
// console.log("Hello");

// in this exam second statement execute first
// because setTimeout register callback function the add in the task queue and then add to call stack
// that's why setTimeout takes some time and second statement execute first


//b) ---> setInterval()
// setInterval() execute function / code snippet continuously with given time delay with given value
// it has three parameters 1) function / code snippet, 2) time, 3) value
// 1) function / code snippet :  It can be anonymous function , any function reference or code snippet
// 2) time : time will be in milliseconds. the function will execute after time delay.
// 3) value: you can pass avy value. which will become the functions default parameter

// function getRandomColor() {
//     const data = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += data[Math.floor(data.length * Math.random())]
//     }
//     console.log("called");
//     return color;
// }
// let colorInterval;
// function startColor() {
//     if(!colorInterval){
//         colorInterval = setInterval(() => {
//             document.body.style.backgroundColor = getRandomColor();
//         },1000)
//     }
// }
// function stopColor() {
//     clearInterval(colorInterval);
//     colorInterval = null;
// }