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
//number  = 1234;
//BigInt
//string  = "abcd";
//boolean  = true/false;
//undefined
//null => stand alone value
//symbol => unique

/* non primitive ( reference ) data type */
//Array, object, functions

let a = ['1','2','3'];
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
    i_null: typeof null, // object
    j_undefined: typeof undefined, // undefined
    k_NaN : typeof NaN // number
}])

