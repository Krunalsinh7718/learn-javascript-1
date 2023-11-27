"use strict"; // treat all js code as newer version

/*actual datatypes*/
// 1) 'number' 
// 2) 'bigint' 
// 3) 'string' 
// 4) 'boolean' 
// 5) 'object' 
// 6) 'function' (function object)
// 7) 'symbol' 
// 8) 'undefined' 


/* primitive data type */
//1) number  = 1234;
//2) BigInt
//3) string  = "abcd";
//4) boolean  = true/false;
//5) undefined
//6) null => stand alone value
//7) symbol => unique

/* non primitive ( reference ) data type */
//1) Array
//2) object
//3) functions

const a = ['1','2','3'];
const b = 1150;
const c = 1150n;
const d = "abcd";
const e = true;
const f = {id: "1123", name : "abc"};
const g = (a) => a*a;
const h = Symbol('123');

console.table([{
    a_array: typeof a, //  object
    b_number : typeof b, // number
    c_bigint : typeof c, // bigint
    d_string : typeof d, // string
    e_boolean: typeof e, // boolean
    f_object: typeof f, // object
    g_function: typeof g, // function
    h_symbol: typeof h, // symbol
    i_null: `${typeof null} (js mistake)`, // object
    j_undefined: typeof undefined, // undefined
    k_NaN : typeof NaN, // number,
}])
    
/*
In JavaScript, null is considered a primitive value. 
Alongside undefined, boolean, number, string, and symbol, 
null is one of the primitive data types in JavaScript. 
Primitives are immutable, meaning their values cannot be changed.

It's important to note that while null is a primitive, 
the typeof operator in JavaScript returns "object" 
when applied to null. This is a historical quirk and 
considered a mistake in the language. It's a well-known inconsistency, 
and you may encounter it when checking the type of a variable using typeof.
 */