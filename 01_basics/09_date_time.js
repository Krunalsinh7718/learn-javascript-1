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

// let myTimeStamp =  Date.now(); console.log(myTimeStamp);//get timestamp (mili seconds)
// console.log(date.getTime());// get timestamp from date
// console.log(Math.floor(Date.now() / 1000));// time stamp mili seconds to seconds

// console.log(date.getDate()); //get date only
// console.log(date.getMonth() + 1); //get month only
// console.log(date.getFullYear()); //get year only

//other custom format
const newDate = date.toLocaleString('default', {
    day: "numeric",
    weekday: "long",
    year: "numeric",
})

console.log(newDate);