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

let count2 = 15;
do {
    console.log(count2);
    count2++;
} while(count2 < 10)
//in this loop we can print first value of count2 event if its not matching count
//because we are matching condition after statement execution
