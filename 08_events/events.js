// 1) how to add event on element ############################################################

//attachEvent()
//jquery on
//addEventListener


// ----> a) add function in event attribute
//some mouse events
//<button onclick="changeColor()">Change Color</button>
//<div onmouseover="changeStyle()"></div>

// ----> b) add function in event attribute using javascript
//<button id="submitBtn">Submit</button>

//const submitBtn = document.querySelector("#submitBtn");

//submitBtn.onclick = function(eventObject){
//    submitData(data)
//}

// ----> c) using event listener
// event listener gives propagation availability
// we can chose which context of event propagation we want to use (bubbling or capturing)

//const submitBtn = document.querySelector("#submitBtn");

// submitBtn.addEventListener('click', function(eventObject) {
//      submitData(data)
// }, false)

//2) event object ############################################################
//every event function give event object as parameter

// submitBtn.addEventListener('click', function(eventObject) {
//      console.log(eventObject)
// }, false)

//read below event properties
// type, timestamp, preventDefault, 
//target, toElement, sourceElement, currentTarget
//clientX, clientY, screenX, screenY
//altKey, ctrlKey, shiftKey, keyCode


// 2) event listener propagation context ############################################################
const mainList = document.querySelector("#mainList");
const image4 = document.querySelector("#image4");
const image5 = document.querySelector("#image5");
const linkImage = document.querySelector("#linkImage");

//there two type of context of event propagation
// event bubbling and event capturing

//a) ----> with event bubbling (default) 
// in event listener third parameter is for enable capturing mode (true or false)
// event bubbling is by default enabled in event listener means third parameter is by default false, declare or not

// mainList.addEventListener('click', function(eventObject) {
//     console.log("main list clicked");
// }, false)

// image4.addEventListener('click', function(eventObject) {
//     console.log("image 4 clicked");
// }, false)

//in above example first function called for "image4" then function call for "mainList"
//because event bubbling is enabled by default
//event travels bottom to top
//event we don't have to define false

//b) ----> with event capturing 

// mainList.addEventListener('click', function(eventObject) {
//    console.log("main list clicked");
// }, true)

// image4.addEventListener('click', function(eventObject) {
//     console.log("image 4 clicked");
// }, true)

//in above example first function called for "mainList" then function call for "image4"
//because we have enable event capturing context
//event travels top to bottom
//event have to define true as third parameter

// 3) stop propagation ############################################################
// event.stopPropagation() stops event traveling 

//a) ----> stop propagation with event bubbling 
// with event bubbling context enabled event stops travel bottom to top
// mainList.addEventListener('click', function(eventObject) {
//    console.log("main list clicked");
// })

// image4.addEventListener('click', function(eventObject) {
//     eventObject.stopPropagation();
//     console.log("image 4 clicked");
// })

//b) ----> stop propagation with event capturing 
// with event capturing context enabled event stops travel top to bottom
// mainList.addEventListener('click', function(eventObject) {
//     eventObject.stopPropagation();
//     console.log("main list clicked");
//     console.log(eventObject.toElement);
//  },true)
 
//  image4.addEventListener('click', function(eventObject) {
//      console.log("image 4 clicked");
//  },true)

// 4) prevent default ############################################################

// The preventDefault() method cancels the event if it is cancelable, 
// meaning that the default action that belongs to the event will not occur.

// For example, this can be useful when:

// Clicking on a "Submit" button, prevent it from submitting a form
// Clicking on a link, prevent the link from following the URL
// Clicking on checkbox, prevent the check on checkbox
// Note: Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.

// Note: The preventDefault() method does not prevent further propagation of an event through the DOM. 
//Use the stopPropagation() method to handle this.

// linkImage.addEventListener('click', function(eventObject) {
//     eventObject.preventDefault();
// })
 

// 5) remove list item on click ############################################################
// document.querySelector("#mainList").addEventListener('click', function (eventObject) {
//     //method 1) ----> using remove() function
//     // if(eventObject.target.tagName === 'IMG'){
//     //     const parent = eventObject.target.parentNode;
//     //     parent.remove();
//     // }

//     //method 2) ----> using removeChild() function
//     // if(eventObject.target.tagName === 'IMG'){
//     //     const child = eventObject.target.parentNode;
//     //     const parent = eventObject.target.parentNode.parentNode;
//     //     parent.removeChild(child);
//     // }
// })

//6) action button with loader

//method 1) ----> using addEventListener, attach event all the elements  
// this method works fine when you have few elements
// const allActionBtns = document.querySelectorAll(".action-btn");

// allActionBtns.forEach( btn => {
//     btn.addEventListener('click', function(event) {
//         btn.classList.toggle('loading-state');
//     })
// })

//method 2) ----> using addEventListener, attach event to parent element and identify element by tag name or any unique selector
// this method works fine when you have thousands of element. 
// to attach click event all the elements can be costly operation.
// const allBtnsWrapper = document.querySelector(".all-btns-wrapper");

// allBtnsWrapper.addEventListener('click', function(eventObject) {
//     if(eventObject.target.tagName === 'BUTTON'){
//         eventObject.target.classList.toggle('loading-state');
//     }
// })