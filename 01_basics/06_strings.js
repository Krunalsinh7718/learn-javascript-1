const text = "hello world";
const text1 = new String("hello India!");
const text2 = "The quick brown fox~ jumps. over the lazy dog. If the dog barked, was it really lazy?";


//0) length of string
// console.log(text.length);

//1) sell the functions (run below code in browser and check Prototype for attached methods and properties of string class)
//console.log(text1);

//2) get character at specific index
// console.log(text[0]);
// console.log(text.at(0));
// console.log(text.charAt(0));

//3) get index by specific character (index of first matched character)
//console.log(text.indexOf('l')); //search first to last character
//console.log(text.lastIndexOf('l')); //search last to first character

//4) joint strings
// console.log(text.concat(". ", text1));
// console.log(text+". "+text1);
// console.log(`${text}. ${text1}`);

//5) slice, devide strings
// /*1) slice */ console.log(text2.slice(4)); //return sub string from start index
// /*2) slice */ console.log(text2.slice(4,19)); //return sub string between start and end index
// /*3) slice */ console.log(text2.slice(-9, -5)); //return sub string between start and end index (also takes negative index for end start)
// /*4) split */ console.log(text2.split(' ')); //split string from given string and return array of splited strings
// /*5) substring */ console.log(text2.substring(4,19)); //same as slice return sub string between start and end index

//6) search and check in string functions
// /*1) endsWith */console.log(text.endsWith('ld')); //check string ends with specific string, returns true or false
// /*2) startsWith */console.log(text.startsWith('he')); //check string start with specific string, returns true or false
// /*3) includes */console.log(text.includes('ell')); //check string includes specific string, returns true or false
// /*4) search */console.log(text2.search(/[^\w\s]/g)); //check regular expression(Any character that is not a word character or whitespace) in string, returns index of first match
// /*5) match */console.log(text2.match(/[A-Z]/g)); //check regular expression(capital letter) in string, returns array of match string
// /*6) match */console.log([...text2.matchAll(/[A-Z]/g)]); //check regular expression(capital letter) in string, returns returns an iterator of all results matching this string against a regular expression, including capturing groups.

//7) replace in strings
// /*1) replace */ console.log(text2.replace('dog', 'cat')); //find the first argument string and replace first match with second argument string and return replaced string
// /*2) replaceAll */ console.log(text2.replaceAll('dog', 'cat')); //find the first argument string and replace all match with second argument string and return replaced string

//8) repeat string
// /*1) repeat */ console.log(text1.repeat(2)); //repeat string with given count


//9) modify string, convert string (useful for text comparision in conditions)
// /*1) trim */ console.log("  abcd  ".trim()); //use to remove white spaces from start and end of string
//other trim function => trimEnd(), trimRight(), trimStart(), trimLeft()
// /*2) toLowerCase */ console.log("HELLO".toLowerCase()); //return toLowerCase string
// /*3) toUpperCase */ console.log("world".toUpperCase()); //return toUpperCase string

