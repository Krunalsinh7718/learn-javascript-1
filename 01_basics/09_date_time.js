const date = new Date();
// console.log("date =>", date);
// console.log("date to string =>", date.toString());
// console.log("local string =>", date.toLocaleString());
// console.log("date string =>", date.toDateString());
// console.log("time string =>", date.toTimeString());
// console.log("ISO string =>", date.toISOString());
// console.log("JSON string =>", date.toJSON());
// console.log("UTC string =>", date.toUTCString());
// console.log("Local Date String =>", date.toLocaleDateString());


// console.log(new Date(2023, 0, 23, 5, 3).toLocaleString()); //custom date format
// console.log(new Date("12-31-1991").toLocaleString()); //custom date format

// let myTimeStamp =  Date.now(); console.log(myTimeStamp);//get timestamp (milliseconds)
// console.log(date.getTime());// get timestamp from date
// console.log(Math.floor(Date.now() / 1000));// time stamp milliseconds to seconds

// console.log(date.getDate()); //get date only
// console.log(date.getMonth() + 1); //get month only
// console.log(date.getFullYear()); //get year only






//1) compare two dates----------------------------------------------------------------------------------
// CompareDates("12/11/2023", new Date("11/11/2023"));

// function CompareDates(date1, date2){
//     const dateVal1 = new Date(date1);
//     const dateVal2 = new Date(date2);
    
//     console.log(dateVal1, dateVal2);

//     if(dateVal2.getTime() > dateVal1.getTime()){
//         console.log(`${dateVal2.toLocaleDateString()} is more recent then ${dateVal1.toLocaleDateString()}`);
//     }else if(dateVal2 < dateVal1){
//         console.log(`${dateVal1.toLocaleDateString()} is more recent then ${dateVal2.toLocaleDateString()}`);
//     }else if(dateVal1 == "Invalid Date" || dateVal2 == "Invalid Date"){
//         dateVal1 == "Invalid Date" ? console.log(`Date1 is not valid.`) : console.log(`Date2 is not valid.`)
//     }else{
//         console.log(`${dateVal1.toLocaleDateString()} and ${dateVal2.toLocaleDateString()} are same`);
//     }
// }

//2) format date to local format----------------------------------------------------------------------------------

// //---a) MM/DD/YYYY format 
// const newDate = date.toLocaleString('en-us', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric'
// })
// console.log('MM/DD/YYYY => ',newDate);

// //---b) DD/MM/YYYY format
// const newDate1 = date.toLocaleString('default', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric'
// })
// console.log('DD/MM/YYYY =>',newDate1);

// //---c) DD/MM/YYYY HH:MM format
// const newDate2 = date.toLocaleString('default', {
//     day: '2-digit',
//     month: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     year: 'numeric',
//     hourCycle: "h24"
// })
// console.log('DD/MM/YYYY HH:MM =>',newDate2);

// //---d) DD/MM/YYYY HH:MM AM/PM format 
// const newDate3 = date.toLocaleString('default', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     hourCycle: "h12"
// })
// console.log('DD/MM/YYYY HH:MM AM/PM=>',newDate3);

// //---e) HH:MM format 
// const newDate4 = date.toLocaleString('default', {
//     hour: '2-digit',
//     minute: '2-digit',
//     hourCycle: "h24"
// })
// console.log('HH:MM=>',newDate4);

// //---f) HH:MM AM/PM format 
// const newDate5 = date.toLocaleString('default', {
//     hour: '2-digit',
//     minute: '2-digit',
//     hourCycle: "h12"
// })
// console.log('HH:MM AM/PM =>',newDate5);

// //---g) HH:MM in the {afternoon} format 
// const newDate6 = date.toLocaleString('default', {
//     hour: '2-digit',
//     minute: '2-digit',
//     hourCycle: "h12",
//     dayPeriod: "long",
// })
// console.log('HH:MM in the {afternoon} =>',newDate6);

// //---h) date style short (DD/MM/YYYY)
// const newDate7 = date.toLocaleString('default', {
//     dateStyle: "short",
// })
// console.log('date style short (DD/MM/YYYY)=>',newDate7);

// //---i) date style medium (DD-mm-YYYY)
// const newDate8 = date.toLocaleString('default', {
//     dateStyle: "medium",
// })
// console.log('date style medium (DD-mm-YYYY)=>',newDate8);

// //---j) date style long (D mmm YYYY)
// const newDate9 = date.toLocaleString('default', {
//     dateStyle: "long",
// })
// console.log('date style long (D mmm YYYY)=>',newDate9);

//---j-a) (mmm DD, YYYY) //ex. February 14, 2020
// const newDate9a = date.toLocaleString('default', {
//     year:  'numeric',
//     month: 'long',
//     day:   'numeric',
// })
// console.log('(D mmm YYYY)=>',newDate9a);

// //---k) time style short (HH:MM AM/PM)
// const newDate10 = date.toLocaleString('default', {
//     timeStyle: "short",
// })
// console.log('time style short (HH:MM AM/PM)=>',newDate10);

// //---l) time style medium (HH:MM:SS AM/PM)
// const newDate11 = date.toLocaleString('default', {
//     timeStyle: "medium",
// })
// console.log('time style medium (HH:MM:SS AM/PM)=>',newDate11);

// //---m) time style long (HH:MM:SS AM/PM IST)
// const newDate12 = date.toLocaleString('default', {
//     timeStyle: "long",
// })
// console.log('time style long (HH:MM:SS AM/PM IST)=>',newDate12);


//---o) Using Intl (The Intl.DateTimeFormat() constructor creates Intl.DateTimeFormat objects.)
//##### we can use same configuration object as we pass in toLocaleString function ######
// const dateFormat1 = new Intl.DateTimeFormat('Default',{
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric'
// });
// console.log(dateFormat1.format(new Date()));
