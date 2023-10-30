
let num_a = "33";
let numberVal_a = Number(num_a);
// console.table([{numberVal_a : numberVal_a, numberVal_a_type: typeof numberVal_a}]);
// "33" => 33 (number)

let num_b = "33abc";
let numberVal_b = Number(num_b);
// console.table([{numberVal_b : numberVal_b, numberVal_b_type: typeof numberVal_b}]);
//"33abc" => NaN (number)

let num_c = null;
let numberVal_c = Number(num_c);
// console.table([{numberVal_c : numberVal_c, numberVal_c_type: typeof numberVal_c}]);
//null => 0 (number)

let num_d = undefined;
let numberVal_d = Number(num_d);
// console.table([{numberVal_d : numberVal_d, numberVal_d_type: typeof numberVal_d}]);
//undefined => NaN (number)

let num_e = true;
let numberVal_e = Number(num_e);
// console.table([{numberVal_e : numberVal_e, numberVal_e_type: typeof numberVal_e}]);
//true => 1 (number)

let num_f = "";
let numberVal_f = Boolean(num_f);
// console.table([{numberVal_f : numberVal_f, numberVal_f_type: typeof numberVal_f}]);
//"" => false (boolean)

let num_g = "bac";
let numberVal_g = Boolean(num_g);
// console.table([{numberVal_g : numberVal_g, numberVal_g_type: typeof numberVal_g}]);
//"" => true (boolean)

let num_h = 0;
let numberVal_h = Boolean(num_h);
// console.table([{numberVal_h : numberVal_h, numberVal_h_type: typeof numberVal_h}]);
//0 => false (boolean)

let num_i = 1;
let numberVal_i = Boolean(num_i);
// console.table([{numberVal_i : numberVal_i, numberVal_i_type: typeof numberVal_i}]);
//1 => true (boolean)

let num_j = null;
let numberVal_j = Boolean(num_j);
// console.table([{numberVal_j : numberVal_j, numberVal_j_type: typeof numberVal_j}]);
//null => false (boolean)

let num_k = undefined;
let numberVal_k = Boolean(num_k);
// console.table([{numberVal_k : numberVal_k, numberVal_k_type: typeof numberVal_k}]);
//undefined => false (boolean)

let num_l = 33;
let numberVal_l = String(num_l);
// console.table([{numberVal_l : numberVal_l, numberVal_l_type: typeof numberVal_l}]);
//33 => "33" (string)

let num_m = true;
let numberVal_m = String(num_m);
// console.table([{numberVal_m : numberVal_m, numberVal_m_type: typeof numberVal_m}]);
//true => 'true' (string)

let num_n = null;
let numberVal_n = String(num_n);
// console.table([{numberVal_n : numberVal_n, numberVal_n_type: typeof numberVal_n}]);
//null => 'null' (string)

let num_o = undefined;
let numberVal_o = String(num_o);
// console.table([{numberVal_o : numberVal_o, numberVal_o_type: typeof numberVal_o}]);
//undefined => 'undefined' (string)

let num_p = "bac";
let numberVal_p = Object(num_p);
// console.table([{numberVal_p : numberVal_p, numberVal_p_type: typeof numberVal_p}]);
//"bac" =>  [String: 'bac'] (object)

let num_q = null;
let numberVal_q = Object(num_q);
// console.table([{numberVal_q : numberVal_q, numberVal_q_type: typeof numberVal_q}]);
//null => {} (object)

let num_r = 1234;
let numberVal_r = Object(num_r);
// console.table([{numberVal_r : numberVal_r, numberVal_r_type: typeof numberVal_r}]);
//1234 => [Number: 1234] (object)

let num_s = undefined;
let numberVal_s = Object(num_s);
// console.table([{numberVal_s : numberVal_s, numberVal_s_type: typeof numberVal_s}]);
//undefined => {} (object)

// [numberVal_f].forEach( e => {
//     console.log(e);
//     console.table([{var : e, varType: typeof e}]);
// })


