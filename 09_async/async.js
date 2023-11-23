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

//c) ---> XMLHttpRequest()
const url = "https://dummyjson.com/users/1";
// const dataCall = new XMLHttpRequest();
// const userCard = document.querySelector(".user-card");

// dataCall.open('GET',url);
// dataCall.onreadystatechange = function() {
//     if(this.readyState === 4){
//         const data = JSON.parse(this.responseText);
//         console.log(data);
//         userCard.querySelector(".user-image").src = data.image;
//         userCard.querySelector(".user-name").innerText = data.firstName +" "+ data.maidenName +" "+ data.lastName;
//         userCard.querySelector(".user-email").innerHTML = data.email;
//     }
// }
// dataCall.send();

//d) ---> Promis()
//[Ex. 1] ----------------
// const promis1 = new Promise(function(resolve,reject){
//     const error = false;

//     if(!error){
//         resolve("success");
//     }else{
//         reject("something went wrong.");
//     }
// })
// promis1.then(() => {
//     console.log("success");
// })
// promis1.catch((error) => {
//     console.log(error);
// })
// promis1.finally(() => {
//     console.log("preocess done");
// })


//e) ---> fetch() with Promis()
// fetch(url)
// .then( response => response.json() )
// .then(data => console.log(data) )
// .catch( error => console.log(error) )
// .finally(() => console.log("process done"))

//f) ---> fetch() with async await
// const usersUrl = "https://jsonplaceholder.typicode.com/users";
// async function getUser() {
//     try{
//         const response = await fetch(usersUrl)
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("error :", error);
//     }
// }

// getUser();

//g) ---> async await vs promise
// function promisFunc(resolve, reject){
//     const condition = false;
//     setTimeout((success) => {
//         success ? resolve(true) : reject(false);
//     },
//     2000,
//     condition)
// }

// const promis2 = new Promise(promisFunc);
// promis2
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(data) {
//     console.log(data);
// })
// .finally(function() {
//     console.log("all process done");
// })

// function doTask(){
//     const condition = false;
//     return new Promise((resolve,reject) => {
//         setTimeout(function (success) {
//             console.log("task done");

//             success ? resolve(true) : reject(false);
//         }, 
//         2000,
//         condition);
//     })
// }
// async function doProcess1() {
//     try{
//         const result = await doTask();
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }

// doProcess1();

//h) ---> handle error in then
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("error!"), 1000);
//   });
  
//   // resolve runs the first function in .then
//   promise.then(
//     result => console.log("success :",result), // shows "done!" after 1 second
//     error => console.log("error :",error) // doesn't run
//   );
