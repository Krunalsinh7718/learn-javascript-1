var a = "hello a"
let b = "hello b"
const c = "hello c"
d = "hello d"
e = "hello e " + false
f = 43110 +true+' f'
g = 43110 +' g '+true
h = 43110 + undefined
i = 43110 + null

console.table([a,b,c,d,e,f,g,h,i]);
 

/*
In JavaScript, if you don't declare a variable using var, const, or let, 
the variable is automatically assigned to the global scope 
if it's used in the global context (outside of any function or block). 
If used within a function, it becomes a global variable or 
is limited to the scope of that function, depending on 
whether it's declared inside or outside the function.
*/

//[Ex. 1]--------------------------------------
var varibleTest1 = "Hello test";
{
    var varibleTest1 = "helllo xyz xyz";
}
console.log(varibleTest1);
//output : "helllo xyz xyz"

let varibleTest2 = "Hello test";
{
    let varibleTest2 = "helllo xyz xyz";
}
console.log(varibleTest2);
//output : "Hello test"

/*
Don't use var because of scoping and function scoping issues
in above example the variable declare with var and they have same name overwrite string 
even if they are in different scope
the varible declare with let and they have same name 
will not overwrite string if they are in different scope
*/
 
