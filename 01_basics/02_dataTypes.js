"use strict"; // treat all js code as newer version

//number  = 1234;
//bigint
//string  = "abcd";
//boolean  = true/false;
//undefined
//null => stand alone value
//symbol => unique

//object

let a = ['1','2','3'];
const b = 1150;
const c = "abcd";
const d = true;

console.table([{
    a_array: typeof a, 
    b_number : typeof b, 
    c_string : typeof c, 
    d_boolean: typeof d,
    e_null: typeof null,
    f_undefined: typeof undefined,
    g_NaN : typeof NaN
}])

