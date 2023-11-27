// 1) for loop ############################################################
// let myArr = ["1", "2", "3", "4", "5"];
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     // console.log(element);
// }


// 2) loop break ############################################################
// let myArr1 = ["1", "2", "3", "4", "5", "6", "7"];
// for (let index = 0; index < myArr1.length; index++) {
//     const element = myArr1[index];
//     if(index === 4){
//         break;
//     }
//     console.log(element);
// }
//break if index === 4


// 3) loop continue ############################################################
// let myArr2 = ["1", "2", "3", "4", "5", "6", "7"];
// for (let index = 0; index < myArr2.length; index++) {
//     const element = myArr2[index];
//     if(index === 4){
//         console.log("---> 5 detected.");
//         continue;
//         console.log("other statement 1");
//         console.log("other statement 2");
//     }
//     console.log(element);
// }
//skip the other statements if index === 4

// 4) while loop ############################################################

// let count1 = 0
// while (count1 < 10) {
//     console.log(count1);
//     count1++;
// }

// 5) do while loop ############################################################

// let count2 = 15;
// do {
//     console.log(count2);
//     count2++;
// } while(count2 < 10)
//in this loop we can print first value of count2 event if its not matching count
//because we are matching condition after statement execution

// 6) for of loop ############################################################
// let arr1 = ['apple', 'banana', 'cherry', 'dragon fruit', 'elderberry'];

// for (const i of arr1) {
//     console.log(`fruit ${i}`);
// }


// const map = new Map();
// map.set('name', "krunalsinh");
// map.set('surname', "vaghela");
// map.set('name', "vaghela");

// for (const [key, value] of map) {
//     console.log(`${key} => ${value}`);
// }

// 7) for in loop ############################################################
// const games = {
//     'game1' : 'NFS',
//     'game2' : 'call of duty',
//     'game3' : 'gta 5',
//     'game4' : 'forza horizan 5',
// }

// for (const game in games) {
//     console.log(`${game} => ${games[game]}`);
// }
// let arr2 = ['apple', 'banana', 'cat', 'dog', 'elephant'];

// for(const e in arr2){
//     console.log(` ${e} : ${arr2[e]}`);
// }

//we cant use "for of" loop for object because object is not iterable. for of loop works on only iterable data.
//we have to use "for in" loop. this loop can access object keys. we can iterate key one by one. 

// 8) array.forEach ############################################################
// let arr3 = ['apple', 'banana', 'cat', 'dog', 'elephant'];

// arr3.forEach( (element, index, array) => console.log(`${index} => ${element} of ${arr3}`));


// 9) array.map ############################################################
// let arr4 = ["ele", "ele", "ele", "ele", "ele", "ele"];

// let arr4_e = arr4.map((e,i) =>  `${e}_${i}`);
// console.log(arr4_e);

// 10) array.filter ############################################################
let arr5 = ["apple", "airplane", "banana", "cherry", "ele", "ele"];

let arr5_e = arr5.filter((e,i) =>  e.includes('a'));
console.log(arr5_e);
