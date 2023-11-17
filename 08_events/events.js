const mainList = document.querySelector("#mainList");
const image4 = document.querySelector("#image4");
const image5 = document.querySelector("#image5");

// document.getElementById('image5').onclick = function (e) {
//     console.log("image5 clicked", e);
// }

//attachEvent()
//jquery on

//read below event properties
// type, timestamp, defaultPrevented, 
//target, toElement, sourceElement, currentTarget
//clientX, clientY, screenX, screenY
//altKey, ctrlKey, shiftKey, keyCode

//there two type of context of event propagation
// event bubbling and event capturing

//1) with event bubbling (default) ------
// in event listener third parameter is for enable capturing mode (true or false)
// event bubbling is by default enabled in event listener means third parameter is by default false, declare or not

// mainList.addEventListener('click', function(e) {
//     console.log("main list clicked");
// }, false)

// image4.addEventListener('click', function(e) {
//     console.log("image 4 clicked");
// }, false)

//2) with event capturing ------
//in below example 
mainList.addEventListener('click', function(e) {
   console.log("main list clicked");
}, false)

image4.addEventListener('click', function(e) {
    console.log("image 4 clicked");
}, false)