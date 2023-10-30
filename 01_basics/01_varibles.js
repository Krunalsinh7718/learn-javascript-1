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
Don't use var because of scoping and function scoping issues
*/
 
