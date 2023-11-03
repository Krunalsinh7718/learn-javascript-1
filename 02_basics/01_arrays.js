// 1) declaration methods
// const arr1 = ['a','b','c'];
// const arr2 = new Array('a','b','c');
// console.log('arr1 =>', arr1,' arr2 =>', arr2,' both are technically same. [] is shortcut for new Array(). [] is call literal or Array short hand');

// const arr3 = new Array(3);
// console.log('arr3 =>',arr3,'arr3[0] =>',arr3[0],',arr3 Declares array with 3 undefined(empty) elements');

// 2) add or remove elements
// ----> a) push()
// const arr4 = ['a','b','c'];
// arr4.push('d');
// console.log('arr4 =>',arr4, " arr4.push('d') add element at last position. And return new length of array.");

// ----> b) pop()
// const arr5 = ['a','b','c','d'];
// arr5.pop();
// console.log('arr5 =>',arr5, " arr5.pop() removes element at last position");

// ----> c) unshift()
// const arr6 = ['b','c'];
// arr6.unshift('a');
// console.log(
//     'arr6 =>',arr6, 
//     "\n arr6.unshift() add element at first position. And return new length of array.",
//     "\n This method is not used much if we add element at first position all element have to perform shifting.",
//     "\n If there is thousands of elements it may causes performance issue."
// );

// ----> d) shift()
// const arr7 = ['a','b','c','d'];
// arr7.shift();
// console.log(
//     'arr7 =>',arr7, " arr7.shift() removes element at first position",
//     "\n This method is not used much if we add element at first position all element have to perform shifting.",
//     "\n If there is thousands of elements it may causes performance issue."
// );

//----> *) every()
//A function to execute for each element in the array. 
//it return true if all element pass test otherwise return false

// const arr8 = [1,2,3,4,5,6];
// const testHasVal_less_7 = val => val < 7;
// console.log(arr8.every(testHasVal_less_7));

//----> *) filter()
//The filter() method of Array instances creates a shallow copy of a portion of a given array, 
//filtered down to just the elements from the given array that pass the test implemented by the provided function.

// const arr9 = [1,2,3,4,5,6,'apple','banana'];
// const result1 = val => val % 2 === 0;
// const result2 = val => val.length > 5;
// console.log("result1 =>", arr9.filter(result1)," result2 =>", arr9.filter(result2));

//----> *) flat()
//it takes all array elements and sub arrays and crates new array in which all elements have same level. 

// const arr9 = [['1','2','3'],['apple','banana',['vitamin c fruits', 'vitamin a fruits']],['sports','utility','family',['4by4','rear weel',['Tata','Mahindra']]]];
// console.log(arr9.flat(3));
// console.log(arr9);

//----> *) forEach()
//It executes a provided function once for each array element.
// const arr10 = ['a', 'b', 'c'];
// arr10.forEach(e => console.log("Element =>",e))

//----> *) indexOf()
//find element index. If element not exist returns -1.
//if multiple elements exist with same name it returns index of first element
// const arr11 = ['a', 'b', 'c'];
// console.log('index of "b" => ',arr11.indexOf('b'));

//----> *) lastIndexOf()
//find element index. If element not exist returns -1.
//if multiple elements exist with same name it returns index of last element
// const arr12 = ['a', 'b', 'c'];
// console.log('index of "b" => ',arr11.indexOf('b'));

//----> *) map()
//it returns creates a new array populated with the results of calling a provided function on every element in the calling array.
// const arr13 = ['a', 'b', 'c'];
// const arr14 = arr13.map( e => e + 1 );
// console.log(arr13, arr14);

//----> *) reduce()
//it returns final calculated value based on provided callback function.
//iterate every element of array and apply callback function
//the provide callback function takes two argument previous value and current value on every iteration.
//on the first iteration the callback function takes initialValue as previous value

// const array14 = [1, 2, 3, 4, 10, 50, 100, 80];

// const initialValue = 0;
// const sumWithInitial = array14.reduce(
//   (accumulator, currentValue) => accumulator > currentValue? accumulator : currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

//----> *) reverse()
//reverse the original array element indexes
// const arr15 = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr15.reverse());
// console.log(arr15);

//----> *) slice()
//returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where 
//start and end represent the index of items in that array. The original array will not be modified.

// const arr16 = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr16.slice(1,3));
// console.log(arr16);

//----> *) some()
//A function to execute for each element in the array. 
//it return true if any element pass test otherwise return false

// const arr17 = ['a', 'b', 'c', 'd', 'e', 'f'];
// const test4 = e => e === 'c';
// console.log(arr17.some(test4));

//----> *) sort()
//sorts the elements of an array in place and returns the reference to the same array, now sorted. 
//The default sort order is ascending, built upon converting the elements into strings, 
//then comparing their sequences of UTF-16 code units values.
//To sort the elements in an array without mutating the original array, use toSorted().

// const arr18 = ['f', 'e', 'd', 'c', 'b', 'a'];
// console.log(arr18.sort());
// console.log(arr18);

//toSorted() supports browsers only
// const arr19 = ['f', 'e', 'd', 'c', 'b', 'a'];
// console.log(arr19.toSorted());
// console.log(arr19);

//----> *) splice()
// returns array of given range form original array,
//and removes the element of given range from original array

//if you provide third argument 
//it takes first argument as index, second argument as count and third argument as element to replace
//it go to provide index remove element of given count and replace the element in original array
//returns removed elements

// const arr20 = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr20.splice(1,3));
// console.log(arr20);

// const arr21 = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr21.splice(1,2,'banana cat'));
// console.log(arr21);
//first it goes to index 1 and removes two(2) elements 'b' and 'c'
//replace 'banana cat' string in original array
//return removed elements

//----> *) fill()
//it modifies original array

//it may one argument, two argument or three argument
//the first argument is the element to replace
//the second argument is the starting index
//the third argument is the ending index

//if we pass one argument it replaces all the array elements with provided argument
//if we pass two arguments it replaces all the array elements with provided argument from the second argument
//if we pass three arguments it replaces all the array elements with provided argument between the second argument and third argument

// const array22 = [1, 2, 3, 4];

// // Fill with 0 from position 2 until position 4
// console.log(array22.fill(0, 2, 3));
// // Expected output: Array [1, 2, 0, 0]

// // Fill with 5 from position 1
// console.log(array22.fill(5, 1));
// // Expected output: Array [1, 5, 5, 5]

// console.log(array22.fill(6));
// // Expected output: Array [6, 6, 6, 6]

//----> *) entries()
//it returns a new array iterator object that contains the key/value pairs for each index in the array.

// const array23 = ['a', 'b', 'c'];

// const iterator1 = array23.entries();

// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]

//----> *) find()
//returns the first element in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.

// const array24 = [5, 12, 12, 8, 130, 44];

// const found = array24.find((element) => element > 10);

// console.log(found);
// // Expected output: 12

//----> *) findIndex()
//It returns the index of the first element in an array that satisfies the provided testing function. 
//If no elements satisfy the testing function, -1 is returned. 

// const array25 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array25.findIndex(isLargeNumber));
// // Expected output: 3

//----> *) findLast()
//It iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. 
//If no elements satisfy the testing function, undefined is returned.

// const array26 = [5, 12, 50, 130, 44];

// const found = array26.findLast((element) => element > 45);

// console.log(found);
// // Expected output: 130

//----> *) findLastIndex()
//It  iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. 
//If no elements satisfy the testing function, -1 is returned.

// const array1 = [5, 12, 50, 130, 44];

// const isLargeNumber = (element) => element > 45;

// console.log(array1.findLastIndex(isLargeNumber));
// // Expected output: 3
// // Index of element with value: 130

// *) includes
//determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// const array_1 = [1, 2, 3];

// console.log(array_1.includes(2));
// // Expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // Expected output: true

// console.log(pets.includes('at'));
// // Expected output: false


// *) join
//creates and returns a new string by concatenating all of the elements in this array, 
//separated by commas or a specified separator string. 
//If the array has only one item, then that item will be returned without using the separator.

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join('-'));
// // Expected output: "Fire-Air-Water"


// *) keys
//The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

// const array_2 = ['a', 'b', 'c'];
// const iterator_1 = array_2.keys();

// for (const key of iterator_1) {
//   console.log(key);
// }

// Expected output: 0
// Expected output: 1
// Expected output: 2

// *) toLocaleString
//The toLocaleString() method of Array instances returns a string representing the elements of the array. 
//The elements are converted to strings using their toLocaleString methods and 
//these strings are separated by a locale-specific string (such as a comma ","). 

// const array_3 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
// const localeString = array_3.toLocaleString('en', { timeZone: 'UTC' });

// console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary


// *) values
//The values() method of Array instances returns a new array 
//iterator object that iterates the value of each item in the array.

// const array_4 = ['a', 'b', 'c'];
// const iterator_2 = array_4.values();

// for (const value of iterator_2) {
//   console.log(value);
// }