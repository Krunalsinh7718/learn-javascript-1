// 1) how to add event on element ############################################################

//attachEvent()
//jquery on



// ----> a) add function in event attribute
//some mouse events
//<button onclick="changeColor()">Change Color</button>
//<div onmouseover="changeStyle()"></div>

// ----> b) add function in event attribute using javascript
//<button id="submitBtn">Submit</button>

//const submitBtn = document.querySelector("#submitBtn");

//submitBtn.onclick = function(e){
//    submitData(data)
//}

// ----> c) using event listener
// event listener gives propagation availability
// we can chose which context of event propagation we want to use (bubbling or capturing)

//const submitBtn = document.querySelector("#submitBtn");

// submitBtn.addEventListener('click', function(e) {
//      submitData(data)
// }, false)

//2) event object ############################################################
//every event function give event object as parameter

// submitBtn.addEventListener('click', function(eventObject) {
//      console.log(eventObject)
// }, false)

//read below event properties
// type, timestamp, defaultPrevented, 
//target, toElement, sourceElement, currentTarget
//clientX, clientY, screenX, screenY
//altKey, ctrlKey, shiftKey, keyCode


// 2) event listener propagation context ############################################################
const mainList = document.querySelector("#mainList");
const image4 = document.querySelector("#image4");
const image5 = document.querySelector("#image5");

//there two type of context of event propagation
// event bubbling and event capturing

//a) ----> with event bubbling (default) 
// in event listener third parameter is for enable capturing mode (true or false)
// event bubbling is by default enabled in event listener means third parameter is by default false, declare or not

// mainList.addEventListener('click', function(e) {
//     console.log("main list clicked");
// }, false)

// image4.addEventListener('click', function(e) {
//     console.log("image 4 clicked");
// }, false)

//in above example first function called for "image4" then function call for "mainList"
//because event bubbling is enabled by default
//event travels bottom to top
//event we don't have to define false

//b) ----> with event capturing 

mainList.addEventListener('click', function(e) {
   console.log("main list clicked");
}, true)

image4.addEventListener('click', function(e) {
    console.log("image 4 clicked");
}, true)

//in above example first function called for "mainList" then function call for "image4"
//because we have enable event capturing context
//event travels top to bottom
//event have to define true as third parameter
